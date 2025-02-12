'use client'
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MainChatContainer from './components/MainChatContainer';
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
      <main className="flex flex-col font-sans content-center">
        {showModal && <PassKeyModal onClose={() => setShowModal(false)} />}
        <MainChatContainer />
      </main>
    </ChakraProvider>
  );
}