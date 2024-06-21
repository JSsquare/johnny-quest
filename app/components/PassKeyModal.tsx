'use client'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const PassKeyModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [passkey, setPasskey] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const passKeyLastSubmissionStorage = localStorage.getItem('passKeyLastSubmission')

  const handleClose = () => {
    if (passkey === 'JSPFRIEND') {
      localStorage.setItem('passKeyLastSubmission', Date.now().toString())
      setIsOpen(false)
    } else {
      setErrorMessage('Incorrect passkey')
    }
  }

  return (
    <Modal isOpen={isOpen} size="full" onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Passkey</ModalHeader>
        <ModalBody>
          <Input
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClose()
              }
            }}
            placeholder="Enter Passkey"
          />
          {errorMessage && <Text color="red">{errorMessage}</Text>}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleClose}>
            Open Gate
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PassKeyModal
