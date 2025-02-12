import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { 
  Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalBody, ModalFooter, Input, Button, Text 
} from '@chakra-ui/react';

interface PassKeyModalProps {
  onClose: () => void;
}

const PassKeyModal = ({ onClose }: PassKeyModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [passkey, setPasskey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsOpen(true); // Ensure modal opens properly when rendered
  }, []);

  
  const setModalClosed = () => {  
    Cookies.set("passkeyModalClosed", "true", { expires: 1 / 3, path: "/" }); // Expires in 8 hours
  };

  const handleSubmitAndClose = async () => {
    setIsLoading(true)
    setErrorMessage("")

    try {
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
    } catch {
      setErrorMessage("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    setPasskey(e.target.value)
  }

  return (
    <Modal isOpen={isOpen} size="full" onClose={() => setIsOpen(false)} closeOnEsc={false}>
      <ModalOverlay />
      <ModalContent alignItems="center">
        <ModalHeader>Enter Password Johnny Provided</ModalHeader>
        <ModalBody minWidth={300}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitAndClose();
            }}
            >
            <Input
              value={passkey}
              onChange={handleOnChange}
              placeholder="Type Your Password"
              type='password'              
            />
            {errorMessage && <Text color="red" mb={4}>{errorMessage}</Text>}
            <Button display="flex" justifyContent="center" mt={6} minW={300} isLoading={isLoading} colorScheme="blue" type="submit">
              Open Gate
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PassKeyModal;