'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Cta = { label: string; href: string; variant: 'white' | 'primary' | 'secondary' }
type Slide = {
  eyebrow: string
  headline: [string, string]
  body: string
  ctas: Cta[]
  image: string
}

const slides: Slide[] = [
  {
    eyebrow: 'Leadership Intelligence',
    headline: ['Leadership Intelligence.', 'Grounded in the African Context'],
    body: "Zanga helps organisations identify, develop, and retain exceptional leaders through culturally intelligent assessments, workforce analytics, and leadership development solutions built for Africa and other high-context markets.",
    ctas: [
      { label: 'Request a Demo', href: '/contact', variant: 'primary' },
      { label: 'Explore Solutions', href: '/solutions', variant: 'white' },
    ],
    image: '/images/7.jpg',
  },
  {
    eyebrow: 'Assessments',
    headline: ['See Your People Clearly.', 'Then Act on What You See'],
    body: "Make better hiring, promotion and succession decisions with culturally grounded leadership assessments designed for high-context workplaces. Zanga turns leadership data into practical decisions your managers and boards can act on.",
    ctas: [
      { label: 'Request a Demo', href: '/contact', variant: 'primary' },
      { label: 'Learn More', href: '/solutions', variant: 'white' },
    ],
    image: '/images/8.jpg',
  },
  {
    eyebrow: 'Coaching & Development',
    headline: ["Leaders Aren't Born Ready.", "They're Built"],
    body: "Great leadership rarely happens by promotion alone. Our coaching and leadership development programmes equip managers with the practical capabilities needed to lead people, navigate complexity and deliver performance.",
    ctas: [
      { label: 'Learn More', href: '/solutions', variant: 'primary' },
      { label: 'Take an Assessment', href: '/contact', variant: 'white' },
    ],
    image: '/images/12.jpg',
  },
  {
    eyebrow: 'Employee Surveys',
    headline: ['Stop Guessing Why People Leave.', 'Start Knowing'],
    body: "Understand what drives engagement, performance and retention through employee surveys designed around the realities of African workplaces. Every survey ends with practical recommendations, and not just another dashboard.",
    ctas: [
      { label: 'Learn More', href: '/solutions', variant: 'primary' },
      { label: 'Request a Demo', href: '/contact', variant: 'white' },
    ],
    image: '/images/4.jpg',
  },
  {
    eyebrow: 'Succession Planning',
    headline: ['If Your CEO Left Tomorrow,', "Do You Know Who's Next?"],
    body: "Boards cannot afford a succession built on instinct. Zanga helps organisations identify leadership readiness, succession risks and future leadership potential using evidence-based assessments and workforce analytics.",
    ctas: [
      { label: 'Request a Demo', href: '/contact', variant: 'primary' },
      { label: 'Take an Assessment', href: '/contact', variant: 'white' },
    ],
    image: '/images/11.jpg',
  },
  {
    eyebrow: 'Insights Report',
    headline: ['943 Leaders. One Report.', "Africa's Future of Work"],
    body: "Built from leadership data across African organisations, the Zanga Human Capital Insights Report reveals emerging leadership trends, workforce patterns and the capabilities shaping the continent's future of work. It is designed for executives, HR leaders, investors and policymakers looking beyond opinion to evidence.",
    ctas: [{ label: 'Download Report', href: '/big-data-report', variant: 'primary' }],
    image: '/images/6.jpg',
  },
]

const AUTO_ROTATE_MS = 20000

const ctaClasses: Record<Cta['variant'], string> = {
  white:
      'text-center border border-white text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/90 hover:text-primary transition-colors font-Montserrat',
  primary:
    'text-center bg-olive text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat',
  secondary:
    'text-center border border-terracotta text-terracotta px-8 py-4 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat',
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
      className="relative text-gray-100 overflow-hidden"
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="Zanga leadership solutions"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(16,24,58,0.85) 0%, rgba(16,24,58,0.72) 45%, rgba(16,24,58,0.48) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div key={current} className="max-w-5xl animate-fade-in-up" aria-live="polite">
          <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            {slide.eyebrow}
          </span>
          <h1 className="text-[2rem] md:text-[3.8rem] font-bold mt-4 mb-6 font-MonaSans leading-tight text-white">
            {slide.headline[0]}
            <br />
            <span className="text-olive">{slide.headline[1]}</span>
          </h1>
          <p className="max-w-4xl text-gray-200 text-base md:text-lg mb-10 font-Montserrat leading-relaxed">
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

        <div className="flex justify-center md:justify-start items-center gap-4 mt-12">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:border-olive hover:text-olive transition-colors"
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
                  i === current ? 'w-7 bg-white/30' : 'w-2.5 bg-white/20 hover:bg-white/40'
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
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:border-olive hover:text-olive transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
