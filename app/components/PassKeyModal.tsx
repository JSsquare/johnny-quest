import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  Text,
  VStack,
  FormControl,
  FormErrorMessage,
  HStack,
  Divider,
  Box,
} from "@chakra-ui/react"

interface PassKeyModalProps {
  onClose: () => void
}

const PassKeyModal = ({ onClose }: PassKeyModalProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [passkey, setPasskey] = useState("")
  const [emailId, setEmailId] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState("")

  useEffect(() => {
    setIsOpen(true) // Ensure modal opens properly when rendered
  }, [])

  const setModalClosed = () => {
    Cookies.set("passkeyModalClosed", "true", { expires: 1 / 3, path: "/" }) // Expires in 8 hours
  }

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmitAndClose = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    setEmailError("")

    if (!passkey && !emailId) {
      setErrorMessage("Please provide either the password or your email.")
      setIsLoading(false)
      return
    }

    if (emailId && !validateEmail(emailId)) {
      setEmailError("Please enter a valid email address.")
      setIsLoading(false)
      return
    }

    try {
      if (passkey) {
        const response = await fetch("/api/verify-passkey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ passkey }),
        })

        const data = await response.json()
        if (data.valid) {
          setModalClosed()
          setIsOpen(false)
          onClose()
        } else {
          setErrorMessage("Incorrect passkey. Please try again.")
        }
      }

      if (emailId) {
        const response = await fetch("/api/new-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_id: emailId }),
        })

        const { data } = await response.json()
        
        if (data.success) {
          setModalClosed()
          setIsOpen(false)
          onClose()
        } else {
          setErrorMessage("Failed to register email. Sorry Please try again.")
        }
      }
    } catch {
      setErrorMessage("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasskeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("")
    setPasskey(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("")
    setEmailId(e.target.value)
  }

  return (
    <Modal isOpen={isOpen} size="full" onClose={() => setIsOpen(false)} closeOnEsc={false}>
      <ModalOverlay />
      <ModalContent alignItems="center">
        <ModalHeader textAlign={'center'}>Provide Either Your Password OR Email</ModalHeader>
        <ModalBody minWidth={300}>
          <form onSubmit={handleSubmitAndClose}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errorMessage}>
                <Input
                  value={passkey}
                  onChange={handlePasskeyChange}
                  placeholder="Type Your Provided Password"
                  type="password"
                />
              </FormControl>
              <HStack w="100%" alignItems="center" justifyContent="center">
                <Divider />
                <Box px={3} color="gray.500" fontWeight="medium">
                  OR
                </Box>
                <Divider />
              </HStack>

              <FormControl isInvalid={!!emailError}>
                <Input value={emailId} onChange={handleEmailChange} placeholder="Or Provide Your Email" type="email" />
                <FormErrorMessage>{emailError}</FormErrorMessage>
              </FormControl>
              {errorMessage && <Text color="red">{errorMessage}</Text>}
              <Button
                display="flex"
                justifyContent="center"
                minW={300}
                isLoading={isLoading}
                colorScheme="blue"
                type="submit"
              >
                Open Gate
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PassKeyModal

