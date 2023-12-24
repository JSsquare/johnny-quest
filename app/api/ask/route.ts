import { recommendationsFromYelp } from '@/app/constants'
import { OpenAIModelID, OpenAIModelsParams } from '@/app/types/openai'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemMessage = `You are a helpful and friendly assistant who can suggest restaurant options. You recommend places in Johnny's preferences given. I am giving the list of Johnny's preferences are the recommended places to eat. In the list of recommendations, restaurant names are denoted as 'RestaurantName', restaurant location denoted as 'RestaurantLocation' with the city name and state code seperated by a comma, cuisine and dishes denoted as 'CuisineAndDishes', and notes and tips about the restraunt is denoted by 'MyNotes', each property is separated by a semi-colon. Make sure your response is clear and is human readable format. Here is the list of Johnnys Preferences and Recommended places to eat.`

export const POST = async (request: NextRequest, res: Response) => {
  const data = await request.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: systemMessage + recommendationsFromYelp,
      },

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
