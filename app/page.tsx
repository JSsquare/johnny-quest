import { ChakraProvider } from '@chakra-ui/react'
import ChatContainer from './components/ChatContainer'
import PassKeyModal from './components/PassKeyModal'
import { SHOW_PASSKEY } from './constants/configConstants'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex flex-col font-mono content-center">
        {SHOW_PASSKEY && <PassKeyModal />}
        <ChatContainer />
      </main>
    </ChakraProvider>
  )
}
