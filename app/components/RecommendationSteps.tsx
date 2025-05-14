import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Select, Slide, useDisclosure } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { AskRecsStepType } from '../constants/commonConstants'
import { CityStatesJohnnyHasExplored, CityStatesJohnnyHasExploredType, StateCountry } from '../constants/placesConstants'
import { getUniqueCountryNames } from '../utils/common'

export const RecommendationSteps = ({ step }: { step: AskRecsStepType }) => {
  return <div className="rounded-shadow-card bg-green-200">{step.stepNo === 1 && <StepOne />}</div>
}

const StepOne = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const { isOpen, onToggle } = useDisclosure()

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
    if (selectedCity && selectedCountry) {
    }
  }

  const handleCountrySelection = (country: string) => {
    setSelectedCountry(country)
    onToggle()
  }
  const filterCitiesByCountry = () => {
    const filteredCities = Object.keys(CityStatesJohnnyHasExplored).filter((city) => {
      const state = CityStatesJohnnyHasExplored[city]
      const country = StateCountry[state]
      console.log('country', country)
      console.log('selectedCountry', selectedCountry)

      return country === selectedCountry
    })
    return filteredCities
  }

  return (
    <>
      {!Boolean(selectedCountry) &&
        getUniqueCountryNames().map((countryName) => (
          <Button
            key={countryName}
            value={countryName}
            onClick={() => handleCountrySelection(countryName)}
          >
            {countryName}
          </Button>
        ))}
      <Slide direction="right" in={isOpen} hidden={!isOpen} style={{ position: 'static' }}>
        <Select
          placeholder="Select a city"
          value={selectedCity}
          onChange={handleCityChange}
          size="lg"
          icon={<ChevronDownIcon />}
        >
          {filterCitiesByCountry()?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </Slide>
    </>
  )
}
