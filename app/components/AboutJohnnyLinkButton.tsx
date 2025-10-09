'use client'
import Link from 'next/link'
import { DESIGN_COLORS } from '../constants/commonConstants'

const palette = DESIGN_COLORS

export const AboutJohnnyLinkButton = () => {
  return (
    <div>
      <Link
        href="/about"
        className="m-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--outline-color)]"
        style={{
          backgroundColor: palette.PRIMARY,
          boxShadow: '0 16px 32px -20px rgba(193, 95, 60, 0.55)',          
        }}
      >
        About Johnny
      </Link>
    </div>
  )
}
