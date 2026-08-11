import React from 'react'
import Link from 'next/link'
import { FiActivity, FiTarget, FiMic, FiShield, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import classNames from "classnames";

type Product = {
  name: string
  description: string
  cta: string
  color: string
  Icon: IconType
}

const products: Product[] = [
  {
    name: 'Pulse by Zanga',
    description: 'Understand employee engagement, culture, retention and performance sentiment.',
    cta: 'Explore Pulse',
    color: '#a3a748',
    Icon: FiActivity,
  },
  {
    name: 'Fit by Zanga',
    description: 'Improve recruitment, role-fit and leadership-selection decisions.',
    cta: 'Explore Fit',
    color: '#ba8908',
    Icon: FiTarget,
  },
  {
    name: 'Voice by Zanga',
    description: 'Listen to customers, suppliers, farmers and communities, and manage issues through to resolution.',
    cta: 'Explore Voice',
    color: '#c55e36',
    Icon: FiMic,
  },
  {
    name: 'Diligence by Zanga',
    description: 'Strengthen founder, borrower, investment and portfolio intelligence.',
    cta: 'Explore Diligence',
    color: '#0F3460',
    Icon: FiShield,
  },
]

export default function Products() {
  return (
    <section className="md:py-28 py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div
            className="relative border border-slate-100 overflow-hidden md:rounded-[2rem] rounded-xl p-8 sm:p-12 lg:p-16"
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
          >
            <div className="pointer-events-none absolute -left-24 -bottom-20 sm:left-1/3 sm:-bottom-32" aria-hidden="true">
              <div className="w-[30rem] h-[30rem] rounded-[50%] border-2 border-gray-200/70" />
              <div className="absolute w-[22rem] h-[22rem] left-8 bottom-5 rounded-[50%] border-2 border-gray-200/70" />
              <div className="absolute w-[15rem] h-[13rem] left-14 bottom-2 rounded-[80%] border-2 border-gray-200/70" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                  Our Products
                </span>
                <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-tight">
                    One intelligence ecosystem. Four ways to understand what matters.
                </h2>
                <p className="text-gray-600 text-[16px] font-Montserrat leading-relaxed max-w-sm mb-10">
                  Four purpose-built products working together to give you a complete view of your
                  people and stakeholders.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-olive text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                >
                  Explore all products
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href="#"
                    aria-label={product.cta}
                    className="group block"
                    style={{ '--product-color': product.color } as React.CSSProperties}
                  >
                    <span
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${product.color}1F`, color: product.color }}
                    >
                      <product.Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="flex items-center gap-1.5 text-lg font-bold text-gray-900 group-hover:text-[var(--product-color)] font-MonaSans mb-1.5 transition-colors duration-300">
                      {product.name}
                      <FiArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: product.color }}
                      />
                    </h3>
                    <p className="text-gray-600 text-sm font-Montserrat leading-relaxed">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
