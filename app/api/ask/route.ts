import { OpenAIModelID, OpenAIModelsParams } from '@/app/constants/commonConstants';
import { BLOCK_REQUEST, TEST_MODE } from '@/app/constants/configConstants';
import { FremontRecommendations, OtherRecommendations, RecommendationsFromYelp, SystemInstructionPrompt } from '@/app/constants/promptConstants';
import { delay } from '@/app/utils/common';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const ACTIVE_CHAT_MODEL = OpenAIModelID.GPT_5_NANO;
const EMPTY_RESPONSE_FALLBACK = 'Sorry, I could not generate a response right now.';
const GPT5_REASONING_EFFORT = 'low';
const GPT5_VERBOSITY = 'medium';

const stringifyForLog = (value: unknown) => {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return '[unserializable]';
  }
};

type ChatMessage = {
  role: 'assistant' | 'system' | 'user';
  content: string;
};

type OpenAIInputMessage = {
  role: 'assistant' | 'developer' | 'system' | 'user';
  content: Array<{
    type: 'input_text' | 'output_text';
    text: string;
  }>;
};

type OpenAIResponsesOutputItem = {
  type?: string;
  content?: Array<{
    type?: string;
    text?: string;
  }>;
};

type OpenAIResponsesPayload = {
  error?: {
    message?: string;
  };
  output?: OpenAIResponsesOutputItem[];
  output_text?: string;
};

const normalizeMessages = (messages: unknown[]): ChatMessage[] => {
  return messages
    .filter((msg): msg is Record<string, unknown> => typeof msg === 'object' && msg !== null)
    .map((msg): ChatMessage => {
      const role: ChatMessage['role'] =
        msg.role === 'assistant' || msg.role === 'system' ? msg.role : 'user';

      return {
        role,
        content: typeof msg.content === 'string' ? msg.content : '',
      };
    })
    .filter((msg) => msg.content.trim().length > 0);
};

const extractResponseText = (payload: OpenAIResponsesPayload) => {
  if (typeof payload.output_text === 'string' && payload.output_text.length > 0) {
    return payload.output_text;
  }

  return (
    payload.output
      ?.filter((item) => item.type === 'message')
      .flatMap((item) => item.content ?? [])
      .filter((item) => item.type === 'output_text' && typeof item.text === 'string')
      .map((item) => item.text ?? '')
      .join('') ?? ''
  );
};

const buildInputMessage = (
  role: OpenAIInputMessage['role'],
  text: string
): OpenAIInputMessage => ({
  role,
  content: [
    {
      type: role === 'assistant' ? 'output_text' : 'input_text',
      text,
    },
  ],
});

export const POST = async (request: NextRequest) => {
  const requestId = crypto.randomUUID();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'ERROR: Missing OPENAI_API_KEY' },
      { status: 500 }
    );
  }

  if (BLOCK_REQUEST) {
    await delay(2000);
    return NextResponse.json({
      message: 'Sorry, requests are blocked, currently not accepting requests.',
    });
  }

  try {
    const data = await request.json();
    const messages = normalizeMessages(Array.isArray(data?.messages) ? data.messages : []);
    const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user');
    const userMessageContent = lastUserMessage?.content || '';

    console.log(
      `[ask:${requestId}] Incoming request:\n${stringifyForLog({
        messageCount: messages.length,
        messages,
      })}`
    );

    if (messages.length > 0 && lastUserMessage && SystemInstructionPrompt && RecommendationsFromYelp) {
      const systemInstruction = TEST_MODE || userMessageContent === 'test'
        ? 'TESTING: Ignore this message'
        : SystemInstructionPrompt + RecommendationsFromYelp + FremontRecommendations + OtherRecommendations;
      const activeModelParams = OpenAIModelsParams[ACTIVE_CHAT_MODEL];
      const isGpt5Model = ACTIVE_CHAT_MODEL.startsWith('gpt-5');
      const shouldIncludeTemperature = !isGpt5Model;
      const inputMessages: OpenAIInputMessage[] = [
        buildInputMessage('developer', systemInstruction),
        ...messages.map((msg) =>
          buildInputMessage(
            msg.role,
            TEST_MODE ? 'TESTING: Ignore this message' : msg.content
          )
        ),
      ];
      const requestBody = {
        model: ACTIVE_CHAT_MODEL,
        input: inputMessages,
        max_output_tokens: activeModelParams.maxOutputTokens,
        store: false,
        ...(isGpt5Model && {
          reasoning: { effort: GPT5_REASONING_EFFORT as 'low' },
          text: { verbosity: GPT5_VERBOSITY as 'medium' },
        }),
        ...(shouldIncludeTemperature && {
          temperature: activeModelParams.temperature,
        }),
      };

      console.log(
        `[ask:${requestId}] OpenAI request body:\n${stringifyForLog(requestBody)}`
      );

      const openAIResponse = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const payload = (await openAIResponse.json()) as OpenAIResponsesPayload;

      if (!openAIResponse.ok) {
        console.error(
          `[ask:${requestId}] OpenAI API Error:\n${stringifyForLog(payload)}`
        );
        return NextResponse.json(
          {
            error: payload.error?.message || 'OpenAI request failed.',
          },
          { status: openAIResponse.status }
        );
      }

      const responseText = extractResponseText(payload).trim() || EMPTY_RESPONSE_FALLBACK;

      console.log(
        `[ask:${requestId}] OpenAI response:\n${stringifyForLog({
          payload,
          extractedText: responseText,
        })}`
      );

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(responseText));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    } else {
      return NextResponse.json(
        { message: 'ERROR: No data message provided.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(
      `[ask:${requestId}] Route Error:\n${stringifyForLog(error)}`
    );
    return NextResponse.json(
      { error: 'Server error processing request.' },
      { status: 500 }
    );
  }
};
