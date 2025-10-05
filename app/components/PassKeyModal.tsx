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
  chakra,
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
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
      setErrorMessage("Please enter either the passcode or your email.")
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
      <ModalOverlay backdropFilter="blur(6px)" bg="rgba(244, 243, 238, 0.85)" />
      <ModalContent
        alignItems="center"
        bg={DESIGN_COLORS.SURFACE}
        color={DESIGN_COLORS.TEXT_PRIMARY}
        borderRadius="2xl"
        mx={{ base: 4, md: 10 }}
        my={{ base: 6, md: 12 }}
        px={{ base: 5, md: 10 }}
        py={{ base: 8, md: 10 }}
        borderWidth="1px"
        borderColor="rgba(177, 173, 161, 0.6)"
        boxShadow="0 18px 48px rgba(64, 53, 48, 0.2)"
      >
        <ModalHeader textAlign={'center'} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold">
          Welcome to Ask Johnny
        </ModalHeader>
        <ModalBody minWidth={300} alignContent={'center'} px={0} w="full">
            <VStack spacing={8} w="100%" maxW="420px" mx="auto">
              <Box
                w={{ base: '96px', md: '120px' }}
                h={{ base: '96px', md: '120px' }}
                borderRadius="full"
                overflow="hidden"
                border="1px solid rgba(177, 173, 161, 0.6)"
                boxShadow="0 8px 20px rgba(64, 53, 48, 0.18)"
              >
                <img
                  src="/compassLogo.png"
                  alt="Compass mark"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Text fontSize="md" textAlign="center" color={DESIGN_COLORS.TEXT_MUTED}>
                Enter your email to unlock recommendations, or drop in a passcode if you have one.
              </Text>
              <chakra.form
                onSubmit={handleSubmitAndClose}
                w="100%"
                animation={`${fadeIn} 2s ease`}
              >
                <VStack spacing={5}>
              <FormControl isInvalid={!!emailError}>
              <Input
                value={emailId}
                onChange={handleEmailChange}
                placeholder="you@example.com"
                bg={DESIGN_COLORS.SURFACE}
                borderColor="rgba(177, 173, 161, 0.7)"
                _focus={{ borderColor: DESIGN_COLORS.PRIMARY, boxShadow: '0 0 0 1px #C15F3C' }}
                _placeholder={{ color: DESIGN_COLORS.TEXT_MUTED }}
                animation={!!emailError ? shakeAnimation : ''}
              />
              <FormErrorMessage>{emailError}</FormErrorMessage>
              </FormControl>
              <HStack w="100%" alignItems="center" justifyContent="center">
              <Divider borderColor="rgba(177, 173, 161, 0.6)" />
              <Box px={3} color={DESIGN_COLORS.TEXT_MUTED} fontWeight="medium">
                OR
              </Box>
              <Divider borderColor="rgba(177, 173, 161, 0.6)" />
              </HStack>
              <FormControl isInvalid={!!errorMessage}>
              <Input
                value={passkey}
                onChange={handlePasskeyChange}
                placeholder="Enter the passcode"
                type="password"
                bg={DESIGN_COLORS.SURFACE}
                borderColor="rgba(177, 173, 161, 0.7)"
                _focus={{ borderColor: DESIGN_COLORS.PRIMARY, boxShadow: '0 0 0 1px #C15F3C' }}
                _placeholder={{ color: DESIGN_COLORS.TEXT_MUTED }}
                animation={!!errorMessage ? shakeAnimation : ''}
              />
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
              </FormControl>
              <Button
              display="flex"
              justifyContent="center"
              minW={{ base: '100%', md: 300 }}
              minH="48px"
              isLoading={isLoading}
              backgroundColor={DESIGN_COLORS.PRIMARY}
              _hover={{ backgroundColor: '#a64f32' }}
              color={DESIGN_COLORS.WHITE}
              type="submit"
              >
              Unlock me
              </Button>
                </VStack>
              </chakra.form>
            </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PassKeyModal
