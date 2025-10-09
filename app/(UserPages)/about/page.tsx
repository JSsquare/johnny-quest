import Link from 'next/link'
import React from 'react'
import { DESIGN_COLORS } from '../../constants/commonConstants'

const palette = DESIGN_COLORS

const metrics = [
  { label: 'Design Experiments', detail: '25+ launches' },
  { label: 'Communities Impacted', detail: '70k+ people' },
  { label: 'Daily Ritual', detail: '7am creative sprint' },
  { label: 'Current Focus', detail: 'Habit-first wellness' },
]

const projects = [
    {
    href: 'https://jsengineer.substack.com',
    title: 'Engineering Articles',
    description:
      '',
  },
  {
    href: 'https://www.instagram.com/foodie.youall/#',
    title: 'Curated Instagram',
    description:
      '',
  },
  {
    href: 'https://calppuccino.vercel.app',
    title: 'Calpuccino App',
    description:
      '',
  },
]

const principles = [
  'Design for delight: every interaction should feel like a high-five for the user.',
  'Make healthy habits irresistible by pairing storytelling with measurable progress.',
  'Build with community: co-create rituals, gather feedback fast, iterate with care.',
]

const AboutPage: React.FC = () => {
  return (
    <main
      className="min-h-screen"
      style={
        {
          backgroundColor: palette.BACKGROUND,
          color: palette.TEXT_PRIMARY,
          '--primary-color': palette.PRIMARY,
          '--secondary-color': palette.SECONDARY,
          '--muted-color': palette.TEXT_MUTED,
          '--surface-color': palette.SURFACE,
          '--attention-color': palette.ATTENTION,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <nav className="flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--secondary-color)] bg-[var(--surface-color)] px-5 py-2 text-sm font-semibold shadow-[0_10px_30px_-20px_rgba(64,53,48,0.65)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            style={{
              color: palette.TEXT_PRIMARY,
            }}
          >
            <span aria-hidden>←</span>
            Back Home
          </Link>
        </nav>

        <header className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
          <div className="relative flex-shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: palette.SECONDARY,
                opacity: 0.32,
                filter: 'blur(28px)',
              }}
            />
            <img
              src="https://pbs.twimg.com/profile_images/1112475957103738880/qlB9fCjC_400x400.jpg"
              width={160}
              height={160}
              alt="Johnny smiling"
              className="relative h-40 w-40 rounded-full object-cover"
              style={{
                border: `4px solid ${palette.SURFACE}`,
                boxShadow: '0 28px 50px -28px rgba(64, 53, 48, 0.55)',
              }}
            />
          </div>
          <div className="space-y-6">
            <p
              className="text-xs uppercase tracking-[0.35em]"
              style={{ color: palette.TEXT_MUTED }}
            >
              Creator • Software Engineer • Food Explorer
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-3xl lg:text-6xl">
              Johnny Sebastian Panikulam
            </h1>
            <p
              className="text-sm leading-relaxed md:text-base"
              style={{ color: palette.TEXT_MUTED }}
            >
              Johnny is the creator of this site. Explore his projects and writings below.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="https://foodieyouall.substack.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                style={{
                  backgroundColor: palette.PRIMARY,
                  boxShadow: '0 20px 40px -18px rgba(193, 95, 60, 0.45)',
                }}
              >
                Explore his newsletter
              </Link>
            </div>
          </div>
        </header>

        {/* <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-[var(--secondary-color)] bg-[var(--surface-color)] px-5 py-6 shadow-[0_18px_35px_-24px_rgba(64,53,48,0.35)] transition hover:-translate-y-1"
            >
              <p
                className="text-xs uppercase tracking-[0.28em]"
                style={{ color: palette.TEXT_MUTED }}
              >
                {item.label}
              </p>
              <p className="mt-3 text-xl font-semibold" style={{ color: palette.PRIMARY }}>
                {item.detail}
              </p>
            </article>
          ))}
        </section> */}

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl md:text-3xl" style={{ color: DESIGN_COLORS.ATTENTION }}>Johnnys Featured Projects</h2>
            </div>
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: palette.SECONDARY }}
            >
              Selected Work
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--secondary-color)] bg-[var(--surface-color)] p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(193,95,60,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold">{project.title}</h3>
                  <span
                    className="text-sm transition group-hover:translate-x-1"
                    style={{ color: palette.PRIMARY }}
                  >
                    →
                  </span>
                </div>
                {/* <p className="text-sm leading-relaxed" style={{ color: palette.TEXT_MUTED }}>
                  {project.description}
                </p> */}
              </Link>
            ))}
          </div>
        </section>

        {/* <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <article
            className="rounded-3xl border border-[var(--secondary-color)] bg-[var(--surface-color)] p-8 shadow-[0_22px_45px_-28px_rgba(64,53,48,0.4)]"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(193,95,60,0.12), rgba(177,173,161,0.08))',
            }}
          >
            <h2 className="text-2xl font-semibold md:text-3xl">What guides my work</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
              {principles.map((principle) => (
                <li key={principle} style={{ color: palette.TEXT_MUTED }}>
                  • {principle}
                </li>
              ))}
            </ul>
          </article>
          <aside className="rounded-3xl border border-[var(--secondary-color)] bg-[var(--surface-color)] p-8 text-sm shadow-[0_20px_35px_-28px_rgba(64,53,48,0.35)] md:text-base">
            <h3 className="text-lg font-semibold">Currently exploring</h3>
            <p className="mt-3 leading-relaxed" style={{ color: palette.TEXT_MUTED }}>
              Designing groove-first wellness journeys, experimenting with AI-assisted
              storytelling, and filming kitchen studio sessions that make nutrition feel
              like a creative practice.
            </p>
          </aside>
        </section> */}

        <footer className="rounded-3xl border border-[var(--secondary-color)] bg-[var(--surface-color)] p-8 text-center shadow-[0_20px_35px_-30px_rgba(64,53,48,0.35)]">
          <p className="text-sm md:text-base" style={{ color: palette.TEXT_MUTED }}>
            Want to pick his brain or collaborate over a virtual cappuccino?
          </p>
          <Link
            href="https://calendar.app.google/J5GnYrUAzfGY8gMV8"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            style={{
              backgroundColor: palette.PRIMARY,
              boxShadow: '0 20px 40px -18px rgba(193, 95, 60, 0.45)',
            }}
          >
            Set Time With Johnny
          </Link>
        </footer>
      </div>
    </main>
  )
}

export default AboutPage
