'use client'
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ChatContainer from './components/ChatContainer';
import PassKeyModal from './components/PassKeyModal';
import { SHOW_PASSKEY } from './constants/configConstants';
import Cookies from "js-cookie";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Ensure cookies are read only on the client side
    const shouldOpenModal = Cookies.get("passkeyModalClosed") !== "true";
    if (SHOW_PASSKEY && shouldOpenModal) {
      setShowModal(true);
    }
  }, []);

  return (
    <ChakraProvider>
      <main className="flex flex-col font-mono content-center">
        {showModal && <PassKeyModal onClose={() => setShowModal(false)} />}
        <ChatContainer />
      </main>
    </ChakraProvider>
  );
}