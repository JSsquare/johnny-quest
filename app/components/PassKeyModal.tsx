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

  // Function to set cookie when modal is closed
  const setModalClosed = () => {  
    Cookies.set("passkeyModalClosed", "true", { expires: 1 / 3, path: "/" }); // Expires in 1 day
  };

  const handleClose = () => {
    if (passkey === 'JSPFRIEND') {
      setModalClosed();
      setIsOpen(false);
      onClose(); // Notify Home component to remove modal
    } else {
      setErrorMessage('Incorrect passkey');
    }
  };

  return (
    <Modal isOpen={isOpen} size="full" onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent alignItems="center">
        <ModalHeader>Enter Passkey</ModalHeader>
        <ModalBody>
          <Input
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleClose();
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
  );
};

export default PassKeyModal;