'use client'
import { useEffect, useState } from 'react'
import MainChatContainer from './components/MainChatContainer'
import PassKeyModal from './components/PassKeyModal'
import { SHOW_PASSKEY } from './constants/configConstants'
import Cookies from 'js-cookie'

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [isModalClosedSuccessfully, setIsModalClosedSuccessfully] = useState(false);

  useEffect(() => {
    // Ensure cookies are read only on the client side
    const shouldOpenModal = Cookies.get("passkeyModalClosed") !== "true";
    if (SHOW_PASSKEY && shouldOpenModal) {
      setOpenModal(true);
    } else {
      setIsModalClosedSuccessfully(true);
    }
  }, []);

  const handleModalClose = () => {
    setOpenModal(false);
    setIsModalClosedSuccessfully(true);
  };

  return (
    <main className="flex flex-col font-sans content-center">
      {openModal && <PassKeyModal onClose={handleModalClose} />}
      {isModalClosedSuccessfully && <MainChatContainer />}
    </main>
  )
}
