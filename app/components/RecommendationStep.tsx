import { Box, Select } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { AskRecsStepType, DESIGN_COLORS } from '../constants/commonConstants'
import { CityStatesJohnnyHasBeenTo } from '../constants/placesConstants'
import { getUniqueCountryCodes } from '../utils/common'

export const RecommendationStep = ({ step }: { step: AskRecsStepType }) => {
  return (
    <Box bg={DESIGN_COLORS.SECONDARY} w="100%" p={4} color="white">
      {step.stepNo === 1 && <StepOne />}
    </Box>
  )
}

const StepOne = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
    if (selectedCity && selectedCountry) {
    }
  }

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value)
  }

  return (
    <>
      {!Boolean(selectedCountry) && (
        <Select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {getUniqueCountryCodes().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      )}

      {Boolean(selectedCountry) && (
        <Select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      )}
    </>
  )
}
