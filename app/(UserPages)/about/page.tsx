import Link from 'next/link'
import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-green-500">
      <header>
        <Link href="/" className="bg-orange-700 heading-nav-pill">
        &#8592; Back Home
        </Link>
      </header>

<section className='flex items-center'>
      <img
          src="https://pbs.twimg.com/profile_images/1112475957103738880/qlB9fCjC_400x400.jpg"
          width={80}
          height={80}
          alt="Johnny's profile picture"
          className="rounded-full"
        />
</section>
      <section className="text-center">
        <h1 className="text-4xl font-bold m-4">About Johnny</h1>        
      </section>

      <section className="m-8">
        <h2 className="text-2xl font-bold mb-2">His Projects</h2>
        <ul>
          <li>
            <Link href="https://foodieyouall.substack.com">Johnny&apos;s Substack</Link>
          </li>
          <li>
            <Link href="https://calppuccino.vercel.app">Calpuccino App</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/foodie.youall/#">Insta Page</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default AboutPage