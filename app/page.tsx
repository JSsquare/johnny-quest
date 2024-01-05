import { ChakraProvider } from '@chakra-ui/react'
import ChatContainer from './components/ChatContainer'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex flex-col font-mono content-center">
        <ChatContainer />
      </main>
    </ChakraProvider>
  )
}
