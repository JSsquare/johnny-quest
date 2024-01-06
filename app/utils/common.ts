import { StateCountry } from '../constants/placesConstants'

export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * 60 * 1000
}
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getUniqueCountryCodes = () => {
  const uniqueCountryCodes: string[] = []
  const stateCountryValues = Object.values(StateCountry)

  for (const countryCode of stateCountryValues) {
    if (!uniqueCountryCodes.includes(countryCode)) {
      uniqueCountryCodes.push(countryCode)
    }
  }

  return uniqueCountryCodes
}
