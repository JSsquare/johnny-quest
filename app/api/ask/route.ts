import { OpenAIModelID, OpenAIModelsParams } from '@/app/constants/commonConstants'
import { BLOCK_REQUEST, TEST_MODE } from '@/app/constants/configConstants'
import { RecommendationsFromYelp, SystemInstruction } from '@/app/constants/promptConstants'
import { delay } from '@/app/utils/common'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const POST = async (request: NextRequest, res: Response) => {
  if (BLOCK_REQUEST) {
    await delay(2000)
    return NextResponse.json('Sorry, requests are blocked, currently not accepting requests.')
  }

  const data = await request.json()
  const userMessage = data.messages[0].content
  if (userMessage && SystemInstruction && RecommendationsFromYelp) {
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
          content: TEST_MODE ? 'TESTING: Ignore this message' : userMessage,
        },
      ],
      max_tokens: OpenAIModelsParams[OpenAIModelID.GPT_4].maxTokens,
      temperature: OpenAIModelsParams[OpenAIModelID.GPT_4].temperature,
      stream: true,
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } else {
    return NextResponse.json({
      message: 'ERROR: No data message provided.',
    })
  }
}
