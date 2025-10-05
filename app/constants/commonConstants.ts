import { OpenAIModelParams } from '../types/openai'
import { minutesToMilliseconds } from '../utils/common'

export const SUBSTACK_NEWSLETTER_LINK = 'https://foodieyouall.substack.com'
export const BUY_ME_A_COFFEE_LINK = 'https://buymeacoffee.com/johnnysp'
export const RECS_ALLOWED_MILLISECONDS = minutesToMilliseconds(2)
export const RECS_ALLOWED_MESSAGE_LENGTH = 2

export enum OpenAIModelID {
  GPT_4 = 'gpt-4',
  GPT_4o_MINI = 'gpt-4o-mini'
}

export const OpenAIModelsParams: Record<OpenAIModelID, OpenAIModelParams> = {
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: OpenAIModelID.GPT_4,
    maxLength: 24000,
    maxTokens: 256,
    temperature: 0.9,
  },
  [OpenAIModelID.GPT_4o_MINI]: {
    id: OpenAIModelID.GPT_4o_MINI,
    name: OpenAIModelID.GPT_4o_MINI,
    maxLength: 32000,
    maxTokens: 512,
    temperature: 0.5,
  },
}

export enum DESIGN_COLORS {
  PRIMARY = '#C15F3C',
  SECONDARY = '#B1ADA1',
  ATTENTION = '#C15F3C',
  SUBTLE = '#B1ADA1',
  BACKGROUND = '#F4F3EE',
  SURFACE = '#FFFFFF',
  TEXT_PRIMARY = '#403530',
  TEXT_MUTED = '#7A6F66',
  WHITE = '#FFFFFF',
}

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
