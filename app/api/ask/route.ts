import { OpenAIModelID, OpenAIModelsParams } from '@/app/constants/commonConstants';
import { BLOCK_REQUEST, TEST_MODE } from '@/app/constants/configConstants';
import { FremontRecommendations, OtherRecommendations, RecommendationsFromYelp, SystemInstructionPrompt } from '@/app/constants/promptConstants';
import { delay } from '@/app/utils/common';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionCreateParamsStreaming } from 'openai/resources/chat/completions';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ACTIVE_CHAT_MODEL = OpenAIModelID.GPT_5_NANO;

export const POST = async (request: NextRequest) => {
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
    const messages = data.messages || [];
    const lastMessage = messages[messages.length - 1];
    const userMessageContent = lastMessage?.content || '';

    if (messages.length > 0 && SystemInstructionPrompt && RecommendationsFromYelp) {
      const systemMessage = {
        role: 'system',
        content: TEST_MODE || userMessageContent === 'test'
          ? 'TESTING: Ignore this message'
          : SystemInstructionPrompt + RecommendationsFromYelp + FremontRecommendations + OtherRecommendations,
      };

      const apiMessages = [
        systemMessage,
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: TEST_MODE ? 'TESTING: Ignore this message' : msg.content,
        })),
      ];

      const activeModelParams = OpenAIModelsParams[ACTIVE_CHAT_MODEL];
      const shouldIncludeTemperature = !ACTIVE_CHAT_MODEL.startsWith('gpt-5');
      const completionRequest: ChatCompletionCreateParamsStreaming = {
        model: ACTIVE_CHAT_MODEL,
        messages: apiMessages,
        max_tokens: activeModelParams.maxTokens,
        stream: true,
        ...(shouldIncludeTemperature && {
          temperature: activeModelParams.temperature,
        }),
      };

      const response = await openai.chat.completions.create(completionRequest);

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          for await (const chunk of response) {
            controller.enqueue(encoder.encode(chunk.choices[0]?.delta?.content || ''));
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: { 'Content-Type': 'text/event-stream' },
      });
    } else {
      return NextResponse.json(
        { message: 'ERROR: No data message provided.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: 'Server error processing request.', details: error },
      { status: 500 }
    );
  }
};
