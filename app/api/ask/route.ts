import OpenAI from 'openai'
import {
  OpenAIModelID,
  OpenAIModelsParams,
  TEST_MODE,
  RecommendationsFromYelp,
  BLOCK_REQUEST,
  SystemInstruction,
} from '@/app/constants'
import { NextRequest, NextResponse } from 'next/server'
import { delay } from '@/app/utils/delay'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const POST = async (request: NextRequest, res: Response) => {
  if (BLOCK_REQUEST) {
    await delay(2000)
    return NextResponse.json({
      message: 'Sorry, requests are blocked, currently not accepting requests.',
    })
  }

  const data = await request.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: TEST_MODE
          ? 'TESTING: Ignore this message'
          : SystemInstruction + RecommendationsFromYelp,
      },
      {
        role: 'user',
        content: TEST_MODE ? 'TESTING: Ignore this message' : data.message,
      },
    ],
    max_tokens: OpenAIModelsParams[OpenAIModelID.GPT_4].maxTokens,
    temperature: OpenAIModelsParams[OpenAIModelID.GPT_4].temperature,
  })
  return NextResponse.json({ message: response.choices[0].message.content })
}
