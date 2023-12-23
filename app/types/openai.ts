export interface OpenAIModelParams {
  id: string
  name: string
  maxLength: number // maximum length of a message
  maxTokens: number
  temperature: number
}

export enum OpenAIModelID {
  GPT_4 = 'gpt-4',
}

export const OpenAIModelsParams: Record<OpenAIModelID, OpenAIModelParams> = {
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    maxTokens: 256,
    temperature: 0.7,
  },
}
