export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * 60 * 1000
}
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
