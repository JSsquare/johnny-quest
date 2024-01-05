import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { CityStatesJohnnyHasBeenTo } from '../constants/placesConstants'

const SpecificQuestion = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const handleConfirm = () => {
    // Do something with the selected city
    console.log(selectedCity)
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose a City</ModalHeader>
          <ModalBody>
            <Select value={selectedCity} onChange={handleCityChange}>
              <option value="">Select a city</option>
              {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleConfirm}>
              Confirm
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SpecificQuestion
