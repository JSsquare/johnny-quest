import { OpenAIModelID, OpenAIModelsParams } from '@/app/types/openai'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const POST = async (request: NextRequest, res: Response) => {
  const data = await request.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'user',
        content: data.message,
      },
    ],
    max_tokens: OpenAIModelsParams[OpenAIModelID.GPT_4].maxTokens,
    temperature: OpenAIModelsParams[OpenAIModelID.GPT_4].temperature,
  })

  return NextResponse.json({ message: response.choices[0].message.content })
}
