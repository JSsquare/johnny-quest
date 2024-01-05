'use client'
import Link from 'next/link'

export const AboutJohnny = () => {
  return (
    <div className="lg:flex">
      <Link href="/about" className="bg-green-500 heading-nav-pill">
        About Johnny
      </Link>
    </div>
  )
}
