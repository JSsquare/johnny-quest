import { OpenAIModelID, OpenAIModelsParams } from '@/app/constants/commonConstants';
import { BLOCK_REQUEST, TEST_MODE } from '@/app/constants/configConstants';
import { OtherRecommendations, RecommendationsFromYelp, SystemInstruction } from '@/app/constants/promptConstants';
import { delay } from '@/app/utils/common';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    const userMessage = data.messages?.[0]?.content;

    if (userMessage && SystemInstruction && RecommendationsFromYelp) {
      const response = await openai.chat.completions.create({
        model: OpenAIModelID.GPT_4o_MINI,
        messages: [
          {
            role: 'system',
            content: TEST_MODE || userMessage === 'test'
              ? 'TESTING: Ignore this message'
              : SystemInstruction + RecommendationsFromYelp + OtherRecommendations,
          },
          {
            role: 'user',
            content: TEST_MODE ? 'TESTING: Ignore this message' : userMessage,
          },
        ],
        max_tokens: OpenAIModelsParams[OpenAIModelID.GPT_4o_MINI].maxTokens,
        temperature: OpenAIModelsParams[OpenAIModelID.GPT_4o_MINI].temperature,
        stream: true,
      });

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