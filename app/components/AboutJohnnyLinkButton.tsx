'use client'
import Link from 'next/link'

export const AboutJohnnyLinkButton = () => {
  return (
    <div>
      <Link href="/about" className="bg-orange-700 heading-nav-pill">
        About Johnny
      </Link>
    </div>
  )
}
