import Link from 'next/link'
import ChatContainer from './components/ChatContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-bold justify-between font-mono lg:flex text-xs">
        <Link
          href="/about"
          className="fixed top-5 left-5 flex justify-center items-center w-24 h-24 bg-yellow-500 text-white rounded-full shadow-lg"
        >
          About Johnny
        </Link>

        <p className="city-pill">
          <code className="font-mono font-bold">San Francisco</code>
        </p>
        <p className="city-pill">
          <code className="font-mono font-bold">New York City</code>
        </p>
        <p className="city-pill">
          <code className="font-mono font-bold">Arizona</code>
        </p>
        <p className="city-pill">
          <code className="font-mono font-bold">Kochi, Kerala</code>
        </p>
        <p className="city-pill">
          <code className="font-mono font-bold">Pune, India</code>
        </p>
      </div>

      <div className="">
        <ChatContainer />
      </div>
    </main>
  )
}
