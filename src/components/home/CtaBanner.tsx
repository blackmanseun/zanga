import React from 'react'
import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-MonaSans text-gray-900">
          Ready to elevate your leadership?
        </h2>
        <p className="text-gray-500 mb-8 text-lg font-Montserrat">
          Join hundreds of organisations already growing with Zanga.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-olive text-white px-8 py-4 rounded-md font-bold text-base hover:bg-olive/90 transition-colors font-Montserrat"
          >
            Book a Demo
          </Link>
          <Link
            href="/about"
            className="border border-terracotta text-terracotta px-8 py-4 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
