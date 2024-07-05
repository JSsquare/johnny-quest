import { StateCountry } from '../constants/placesConstants'

export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * 60 * 1000
}
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getUniqueCountryNames = () => {
  const uniqueCountryNames: string[] = []
  const stateCountryValues = Object.values(StateCountry)

  for (const countryName of stateCountryValues) {
    if (!uniqueCountryNames.includes(countryName)) {
      uniqueCountryNames.push(countryName)
    }
  }

  return uniqueCountryNames
}
