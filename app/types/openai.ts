export interface OpenAIModelParams {
  id: string
  name: string
  maxLength: number // maximum length of a message
  maxTokens: number
  temperature: number
}
