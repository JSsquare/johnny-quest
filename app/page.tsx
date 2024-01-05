import Link from 'next/link'
import ChatContainer from './components/ChatContainer'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex flex-col font-mono content-center">
        <ChatContainer />
      </main>
    </ChakraProvider>
  )
}
