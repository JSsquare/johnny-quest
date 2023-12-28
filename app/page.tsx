import Link from 'next/link'
import ChatContainer from './components/ChatContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { DESIGN_COLORS } from './constants'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex flex-col font-mono content-center">
        <div className="lg:flex text-xs">
          <Link
            href="/about"
            className="fixed top-5 left-5 flex justify-center font-bold items-center w-24 h-24  text-white rounded-full shadow-lg"
            style={{ backgroundColor: '#66CD7A' }}
          >
            About Johnny
          </Link>
        </div>

        <ChatContainer />
      </main>
    </ChakraProvider>
  )
}
