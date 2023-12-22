import Link from 'next/link'
import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-0 left-0 m-4 text-yellow-500 font-bold"
      >
        Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">About Johnny</h1>
      <p className="text-lg mb-8">Welcome to the About Page!</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Background</h2>
        <p>
          Johnny is a passionate creator in the tech industry. He has been
          coding for over 10 years and loves building innovative solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Experience</h2>
        <p>
          Johnny has worked with various startups and tech companies, gaining
          valuable experience in different domains.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="rounded-full w-16 h-16 mr-4"
        />
        <div>
          <p className="text-lg font-bold">Contact Info:</p>
          <p>Email: johnny@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
