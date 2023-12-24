import Link from 'next/link'
import ChatContainer from './components/ChatContainer'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center font-bold justify-between font-mono lg:flex text-xs">
          <Link
            href="/about"
            className="fixed top-5 left-5 flex justify-center items-center w-24 h-24 bg-orange-500 text-white rounded-full shadow-lg"
          >
            About Johnny
          </Link>
        </div>

        <ChatContainer />
      </main>
    </ChakraProvider>
  )
}
