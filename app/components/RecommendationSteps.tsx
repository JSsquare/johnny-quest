import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Select, Slide, useDisclosure } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { AskRecsStepType } from '../constants/commonConstants'
import { CityStatesJohnnyHasBeenTo } from '../constants/placesConstants'
import { getUniqueCountryCodes } from '../utils/common'

export const RecommendationSteps = ({ step }: { step: AskRecsStepType }) => {
  return <div className="rounded-shadow-card bg-green-200">{step.stepNo === 1 && <StepOne />}</div>
}

const StepOne = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const { isOpen, onToggle } = useDisclosure()

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
    if (selectedCity && selectedCountry) {
    }
  }

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country)
    onToggle()
  }

  return (
    <>
      {!Boolean(selectedCountry) &&
        getUniqueCountryCodes().map((country) => (
          <Button key={country} value={country} onClick={() => handleCountryChange(country)}>
            {country}
          </Button>
        ))}
      <Slide direction="right" in={isOpen} hidden={!isOpen} style={{ position: 'static' }}>
        <Select
          placeholder="Select a location"
          value={selectedCity}
          onChange={handleCityChange}
          size="lg"
          icon={<ChevronDownIcon />}
        >
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </Slide>
    </>
  )
}
