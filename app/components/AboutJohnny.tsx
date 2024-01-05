'use client'
import Link from 'next/link'

export const AboutJohnny = () => {
  return (
    <div className="lg:flex text-xs">
      <Link
        href="/about"
        className="fixed bg-green-500 top-5 left-5 flex justify-center font-bold items-center w-24 h-8  text-white rounded-full shadow-xl"
      >
        About Johnny
      </Link>
    </div>
  )
}
