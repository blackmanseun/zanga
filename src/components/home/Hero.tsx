'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Cta = { label: string; href: string; variant: 'primary' | 'secondary' }
type Slide = {
  eyebrow: string
  headline: [string, string]
  body: string
  ctas: Cta[]
}

const slides: Slide[] = [
  // {
  //   eyebrow: 'Leadership Intelligence',
  //   headline: ['World-Class Leadership Intelligence.', 'Grounded in the African Context'],
  //   body: "Zanga helps organisations identify, develop, and retain exceptional leaders through culturally intelligent assessments, workforce analytics, and leadership development solutions built for Africa and other high-context markets.",
  //   ctas: [
  //     { label: 'Request a Demo', href: '/contact', variant: 'primary' },
  //     { label: 'Explore Solutions', href: '/solutions', variant: 'secondary' },
  //   ],
  // },
  {
    eyebrow: 'Assessments',
    headline: ['See Your People Clearly.', 'Then Act on What You See'],
    body: "Make better hiring, promotion and succession decisions with culturally grounded leadership assessments designed for high-context workplaces. Zanga turns leadership data into practical decisions your managers and boards can act on.",
    ctas: [
      { label: 'Request a Demo', href: '/contact', variant: 'primary' },
      { label: 'Learn More', href: '/solutions', variant: 'secondary' },
    ],
  },
  {
    eyebrow: 'Coaching & Development',
    headline: ["Leaders Aren't Born Ready.", "They're Built"],
    body: "Great leadership rarely happens by promotion alone. Our coaching and leadership development programmes equip managers with the practical capabilities needed to lead people, navigate complexity and deliver performance.",
    ctas: [
      { label: 'Learn More', href: '/solutions', variant: 'primary' },
      { label: 'Take an Assessment', href: '/contact', variant: 'secondary' },
    ],
  },
  // {
  //   eyebrow: 'Employee Surveys',
  //   headline: ['Stop Guessing Why People Leave.', 'Start Knowing'],
  //   body: "Understand what drives engagement, performance and retention through employee surveys designed around the realities of African workplaces. Every survey ends with practical recommendations, and not just another dashboard.",
  //   ctas: [
  //     { label: 'Learn More', href: '/solutions', variant: 'primary' },
  //     { label: 'Request a Demo', href: '/contact', variant: 'secondary' },
  //   ],
  // },
  {
    eyebrow: 'Succession Planning',
    headline: ['If Your CEO Left Tomorrow,', "Do You Know Who's Next?"],
    body: "Boards cannot afford a succession built on instinct. Zanga helps organisations identify leadership readiness, succession risks and future leadership potential using evidence-based assessments and workforce analytics.",
    ctas: [
      { label: 'Request a Demo', href: '/contact', variant: 'primary' },
      { label: 'Take an Assessment', href: '/contact', variant: 'secondary' },
    ],
  },
  {
    eyebrow: 'Insights Report',
    headline: ['943 Leaders. One Report.', "Africa's Future of Work"],
    body: "Built from leadership data across African organisations, the Zanga Human Capital Insights Report reveals emerging leadership trends, workforce patterns and the capabilities shaping the continent's future of work. It is designed for executives, HR leaders, investors and policymakers looking beyond opinion to evidence.",
    ctas: [{ label: 'Download Report', href: '/big-data-report', variant: 'primary' }],
  },
]

const AUTO_ROTATE_MS = 7000

const ctaClasses: Record<Cta['variant'], string> = {
  primary:
    'bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat',
  secondary:
    'border border-terracotta text-terracotta px-8 py-4 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat',
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    intervalRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, AUTO_ROTATE_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, reducedMotion])

  const goTo = useCallback((index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goTo(current + 1)
    if (e.key === 'ArrowLeft') goTo(current - 1)
  }

  const slide = slides[current]

  return (
    <section
      className="relative text-gray-900 overflow-hidden"
      style={{
        backgroundColor: 'rgb(250, 248, 246)',
        backgroundImage:
          'linear-gradient(rgba(16, 24, 58, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 58, 0.05) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="Zanga leadership solutions"
    >
      <div className="opacity-50 hidden md:block absolute inset-y-0 right-0 w-1/2 lg:w-2/5 scale-[0.7]" aria-hidden="true">
        <img src="/images/1.svg" alt="" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div key={current} className="max-w-3xl animate-fade-in-up" aria-live="polite">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            {slide.eyebrow}
          </span>
          <h1 className="text-3xl md:text-[3.5rem] font-bold mt-4 mb-6 font-MonaSans leading-tight">
            {slide.headline[0]}
            <br />
            <span className="text-olive">{slide.headline[1]}</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-10 font-Montserrat leading-relaxed">
            {slide.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {slide.ctas.map((cta) => (
              <Link key={cta.label} href={cta.href} className={ctaClasses[cta.variant]}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-olive hover:text-olive transition-colors"
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === current}
                className={`relative h-2.5 rounded-full overflow-hidden transition-all ${
                  i === current ? 'w-7 bg-gray-200' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {i === current && (
                  <span
                    className="absolute inset-y-0 left-0 bg-terracotta rounded-full animate-progress-fill"
                    style={{
                      animationDuration: `${AUTO_ROTATE_MS}ms`,
                      animationPlayState: paused || reducedMotion ? 'paused' : 'running',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Next slide"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-olive hover:text-olive transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
