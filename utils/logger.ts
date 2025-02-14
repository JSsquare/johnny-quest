export const logError = (message: string, error: any) => {
  console.error(`${message}:`, error)
}

export const logInfo = (message: string) => {
  console.info(message)
}
