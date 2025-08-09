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
  keyframes,
} from "@chakra-ui/react"
import { verifyPasskey, createUser, createNewAccessedUser } from "../../services/apiService"
import { AccessedUserTypes } from "@/app/types/servicesTypes"
import { DESIGN_COLORS } from "@/app/constants/commonConstants"

const shake = keyframes`
  0% { transform: translateX(0); }
  12.5% { transform: translateX(-2px); }
  25% { transform: translateX(2px); }
  37.5% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  62.5% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
  87.5% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

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
  const shakeAnimation = `${shake} 0.5s`

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const setModalClosed = () => {
    Cookies.set("passkeyModalClosed", "true", { expires: 1 / 5, path: "/" })
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
      setErrorMessage("Please enter either the gatekeeper code or your email.")
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
        await handlePasskeySubmit(passkey)
      }

      if (emailId) {
        await handleEmailSubmit(emailId)
      }
    } catch {
      setErrorMessage("Oops! An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasskeySubmit = async (passkey: string) => {
    const data = await verifyPasskey(passkey)
    if (data.valid) {
      const { data } = await createNewAccessedUser(AccessedUserTypes.PASSKEY_CODE, passkey)
      if (data.success) {
        closeModal()
      } else {
        setErrorMessage("Oops! Failed to access the site for the email. Sorry Please try later.")
      }
    } else {
      setErrorMessage("Incorrect code. Please try again.")
    }
  }

  const handleEmailSubmit = async (emailId: string) => {
    const { data } = await createUser(emailId)
    if (data.success) {
      const { data } = await createNewAccessedUser(AccessedUserTypes.EMAIL_ID, emailId)
      if (data.success) {
        closeModal()
      } else {
        setErrorMessage("Oops! Failed to access the site for the email. Sorry Please try later.")
      }
    } else {
      setErrorMessage("Oops! Failed to register email. Sorry Please try later.")
    }
  }

  const closeModal = () => {
    setModalClosed()
    setIsOpen(false)
    onClose()
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
        <ModalHeader textAlign={'center'}>Welcome! Ask Johnny Where To Eat</ModalHeader>
        <ModalBody minWidth={300} alignContent={'center'}>
            <Box
              w={{ base: "120px", md: "160px" }}
              mx="auto"
              mb={12}
              position={{ base: "absolute", md: "static" }}
              top={{ base: 24, md: "auto" }}
              left={0}
              right={0}
            >
              <img
                src="/compassLogo.png"
                alt="Compass Logo"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  borderRadius: "50%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Text fontSize="lg" textAlign="center" mb={4}
            sx={{
              animation: "fadeIn 2s",
              "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
              },
            }}
            >
              Please provide an e-mail or the code
            </Text>
            <VStack
            spacing={6}
            w="100%"
            maxW="400px"
            mx="auto"
            sx={{
              animation: "fadeIn 5s",
              "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
              },
            }}
            >
            <form onSubmit={handleSubmitAndClose} style={{ width: "100%" }}>
              <VStack spacing={4}>
            <FormControl isInvalid={!!emailError}>
            <Input
              value={emailId}
              onChange={handleEmailChange}
              placeholder="Provide Your Best Email"
              animation={!!emailError ? shakeAnimation : ''}
            />
            <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>
            <HStack w="100%" alignItems="center" justifyContent="center">
            <Divider />
            <Box px={3} color="gray.500" fontWeight="medium">
              OR
            </Box>
            <Divider />
            </HStack>
            <FormControl isInvalid={!!errorMessage}>
            <Input
              value={passkey}
              onChange={handlePasskeyChange}
              placeholder="Enter the Pass Code"
              type="password"
              animation={!!errorMessage ? shakeAnimation : ''}
            />
            </FormControl>
            {errorMessage && <Text color="red">{errorMessage}</Text>}
            <Button
            display="flex"
            justifyContent="center"
            minW={300}
            isLoading={isLoading}
            color={'orange.700'}
            type="submit"
            >
            Open Gate
            </Button>
              </VStack>
            </form>
            </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PassKeyModal

