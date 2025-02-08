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

  useEffect(() => {
    setIsOpen(true); // Ensure modal opens properly when rendered
  }, []);

  
  const setModalClosed = () => {  
    Cookies.set("passkeyModalClosed", "true", { expires: 1 / 3, path: "/" }); // Expires in 8 hours
  };

  const handleSubmitAndClose = () => {
    if (passkey === 'JSPFRIEND') {
      setModalClosed();
      setIsOpen(false);
      onClose();
    } else {
      setErrorMessage('Incorrect Please Try Again');
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
        <ModalHeader>Enter Your Passkey Johnny Provided</ModalHeader>
        <ModalBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitAndClose();
            }}
            >
            <Input
              value={passkey}
              onChange={handleOnChange}
              placeholder="Type Your Passkey"
              type='password'
              mb={4}
            />
            {errorMessage && <Text color="red" mb={4}>{errorMessage}</Text>}
            <Button colorScheme="blue" type="submit" display="block" mx="auto">
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