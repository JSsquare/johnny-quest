export interface OpenAIModelParams {
  id: string
  name: string
  maxLength: number // maximum length of a message
  maxOutputTokens: number // maximum tokens for the model to generate in response
  temperature: number
}
