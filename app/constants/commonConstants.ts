import { OpenAIModelParams } from '../types/openai'

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

export enum DESIGN_COLORS {
  PRIMARY = 'green',
  SECONDARY = 'orange',
  ATTENTION = 'red',
  SUBTLE = 'gray.300',
}
