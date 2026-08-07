'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

const flipImages = ['/images/7.jpg', '/images/8.jpg', '/images/12.jpg']
const FLIP_INTERVAL_MS = 5000

function FlipImage() {
  const [faceA, setFaceA] = useState(flipImages[0])
  const [faceB, setFaceB] = useState(flipImages[1 % flipImages.length])
  const [rotation, setRotation] = useState(0)
  const stepRef = useRef(0)
  const nextIndexRef = useRef(2 % flipImages.length)

  useEffect(() => {
    if (flipImages.length < 2) return
    const id = setInterval(() => {
      const revealingFaceA = stepRef.current % 2 === 1
      const upcomingSrc = flipImages[nextIndexRef.current]
      if (revealingFaceA) {
        setFaceA(upcomingSrc)
      } else {
        setFaceB(upcomingSrc)
      }
      nextIndexRef.current = (nextIndexRef.current + 1) % flipImages.length
      stepRef.current += 1
      setRotation(stepRef.current * 180)
    }, FLIP_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full aspect-[4/3]" style={{ perspective: '1600px' }}>
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `rotateY(${rotation}deg)`, transformStyle: 'preserve-3d' }}
      >
        <img
          src={faceA}
          alt="Colleagues collaborating around a table"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
        />
        <img
          src={faceB}
          alt="Colleagues collaborating around a table"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        />
      </div>
    </div>
  )
}

function StatRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex justify-between text-[10px] text-gray-500 font-Montserrat mb-1">
        <span>{label}</span>
        <span className="font-semibold text-gray-700">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-100">
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0l2.3 8.1L22 12l-9.7 3.9L12 24l-2.3-8.1L2 12l9.7-3.9z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: 'rgb(250, 248, 246)' }}
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal x={-24} y={0}>
          <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
            Understand the people and stakeholders your organisation depends on.
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-Montserrat max-w-xl mb-10">
            Zanga combines culturally intelligent assessments, sentiment collection and workforce
            analytics to help organisations make better decisions about leadership, talent,
            engagement and stakeholder risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="text-center bg-olive text-white px-8 py-4 rounded-md font-bold text-base hover:bg-olive/90 transition-colors font-Montserrat"
            >
              Book a Demo
            </Link>
            <Link
              href="#"
              className="text-center border border-terracotta text-terracotta px-8 py-4 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
            >
              Explore Zanga Solutions
            </Link>
          </div>
        </Reveal>

        <Reveal x={24} y={0} delayMs={120}>
          <div className="relative md:w-[80%] w-[90%] mx-auto">
            <div className="absolute -inset-4 md:-inset-6 bg-olive/10 rounded-[2rem] -z-10" aria-hidden="true" />
            <FlipImage />

            <SparkleIcon
              className="hidden lg:block absolute -top-5 left-1/3 w-7 h-7 text-terracotta animate-pulse"
            />

            <div
              className="hidden lg:block absolute -top-6 -left-8 w-44 bg-white rounded-xl shadow-lg p-4 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <span
                className="inline-block text-[10px] font-semibold px-2 py-1 rounded-full text-white mb-3 font-Montserrat"
                style={{ backgroundColor: '#c55e36' }}
              >
                Personality
              </span>
              <StatRow label="Adaptability" value={78} color="#c55e36" />
              <StatRow label="Curiosity" value={64} color="#c55e36" />
              <StatRow label="Resilience" value={88} color="#c55e36" />
            </div>

            <div
              className="hidden lg:block absolute top-10 -right-8 w-40 bg-white rounded-xl shadow-lg p-4 animate-float"
              style={{ animationDelay: '0.7s' }}
            >
              <span
                className="inline-block text-[10px] font-semibold px-2 py-1 rounded-full mb-3 font-Montserrat"
                style={{ backgroundColor: '#FDBF12', color: '#1A1A2E' }}
              >
                Aptitude
              </span>
              <div className="relative h-1.5 rounded-full bg-gray-100">
                <div className="absolute inset-y-0 left-0 rounded-full bg-gray-200" style={{ width: '70%' }} />
                <div
                  className="absolute -top-1 w-3.5 h-3.5 rounded-full border-2 border-white shadow"
                  style={{ left: '70%', backgroundColor: '#FDBF12', transform: 'translateX(-50%)' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 font-Montserrat mt-1.5">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>

            <div
              className="hidden lg:block absolute -bottom-6 -right-6 w-44 bg-white rounded-xl shadow-lg p-4 animate-float"
              style={{ animationDelay: '1.4s' }}
            >
              <p className="text-xs font-semibold text-gray-900 font-MonaSans mb-3">Team Connection</p>
              <div className="flex items-center gap-3">
                <div
                  className="relative w-14 h-14 shrink-0 rounded-full"
                  style={{ background: 'conic-gradient(#a3a748 0% 87%, #eee 87% 100%)' }}
                >
                  <div className="absolute inset-1.5 rounded-full bg-white flex items-center justify-center text-[11px] font-bold text-gray-900">
                    87%
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 font-Montserrat leading-snug">
                  +5% vs last quarter
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
