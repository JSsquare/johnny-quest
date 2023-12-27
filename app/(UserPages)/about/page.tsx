import Link from 'next/link'
import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-0 left-0 m-4 text-yellow-500 font-bold"
      >
        Go Back Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">About Johnny</h1>

      <section className="mb-8">
        <p>Johnny is the creator of this website</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <ul>
          <li>
            <Link href="https://foodieyouall.substack.com">
              Johnny&apos;s Substack
            </Link>
          </li>
          <li>
            <Link href="https://calppuccino.vercel.app">Calpuccino App</Link>
          </li>
        </ul>
      </section>

      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="rounded-full w-16 h-16 mr-4"
        />
        <div>
          <p className="text-lg font-bold">Contact:</p>
          <p>Email: googling.johnny@gmail.com</p>
          <Link href="https://instagram.com/foodie.youall">
            Johnny&apos;s Insta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
