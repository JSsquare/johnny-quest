import { OpenAIModelParams } from '../types/openai'
import { minutesToMilliseconds } from '../utils/common'

export enum OpenAIModelID {
  GPT_4 = 'gpt-4',
}

export const OpenAIModelsParams: Record<OpenAIModelID, OpenAIModelParams> = {
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    maxTokens: 256,
    temperature: 0.9,
  },
}

export const SUBSTACK_NEWSLETTER = 'https://foodieyouall.substack.com'
export const BUY_ME_A_COFFEE = 'https://buymeacoffee.com/johnnysp'

export enum DESIGN_COLORS {
  PRIMARY = 'green',
  SECONDARY = 'orange',
  ATTENTION = 'red',
  SUBTLE = 'gray.300',
}

export const RECS_ALLOWED_MILLISECONDS = minutesToMilliseconds(2)

export type AskRecsStepType = {
  stepNo: number
  title: string
  description: string
}

export const askRecsSteps: AskRecsStepType[] = [
  {
    stepNo: 1,
    title: 'Choose Place',
    description: 'Choose The Location You Like Recommendations For',
  },
  { stepNo: 2, title: 'Cuisine', description: 'Do you have a Cuisine or a Kind of food you like?' },
  { stepNo: 3, title: 'More Details', description: 'Anything else you like to add?' },
]
