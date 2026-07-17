import React from 'react'
import Link from 'next/link'

const values = [
  {
    title: 'Integrity',
    description: 'We hold ourselves and our coaches to the highest ethical standards in every engagement.',
  },
  {
    title: 'Excellence',
    description: 'We accept nothing less than the best—from our coach selection to programme delivery.',
  },
  {
    title: 'Inclusion',
    description: 'We champion diverse voices and ensure coaching is accessible to leaders at every level.',
  },
  {
    title: 'Impact',
    description: 'Every service we deliver is measured against the transformation it creates in people and organisations.',
  },
  {
    title: 'Collaboration',
    description: 'Our coaches, clients, and partners grow together through a culture of shared learning.',
  },
  {
    title: 'Innovation',
    description: 'We use data and technology to continuously improve how coaching is experienced and measured.',
  },
]

const team = [
  { name: 'Amara Osei', role: 'CEO & Co-Founder', location: 'Accra, Ghana' },
  { name: 'Dr. Fatima Nkosi', role: 'Chief Coaching Officer', location: 'Johannesburg, South Africa' },
  { name: 'Emmanuel Adeyemi', role: 'Head of Data & Insights', location: 'Lagos, Nigeria' },
  { name: 'Claire Müller', role: 'Director of Partnerships', location: 'Nairobi, Kenya' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            About Zanga
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            We Exist to Grow the Leaders Africa Needs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Zanga was founded on the belief that Africa's most pressing challenges demand its most capable leaders.
            We bridge the gap between untapped human potential and world-class coaching expertise.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-l-4 border-highlight pl-8">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Mission
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4 font-MonaSans">
              Democratising Access to World-Class Coaching
            </h2>
            <p className="text-gray-600 font-Montserrat leading-relaxed">
              We make exceptional coaching accessible to organisations of all sizes across Africa and beyond.
              By curating a network of elite coaches and pairing them with the right clients, we ensure every
              engagement drives measurable, lasting change.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-8">
            <span className="text-gray-400 text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Vision
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4 font-MonaSans">
              A Continent of Transformational Leaders
            </h2>
            <p className="text-gray-600 font-Montserrat leading-relaxed">
              We envision a future where every organisation in Africa has access to coaching that develops
              leaders who inspire, innovate, and create sustainable impact in their industries and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-8 font-MonaSans">
            Born Out of Necessity
          </h2>
          <div className="text-gray-600 font-Montserrat leading-relaxed space-y-5 text-left">
            <p>
              Zanga was founded in 2019 by a group of seasoned executives and coaching professionals who saw
              a critical gap: African organisations were struggling to find coaches who truly understood their
              markets, cultures, and growth challenges.
            </p>
            <p>
              Most coaching platforms were built for Western markets. They lacked the cultural intelligence,
              sector depth, and regional networks needed to serve Africa's fast-evolving business landscape.
            </p>
            <p>
              So we built Zanga — a platform designed from the ground up to serve African enterprises with
              precision, depth, and data. Today, we operate across 15+ countries, partner with 200+ certified
              coaches, and have helped over 1,000 leaders unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              The Principles We Live By
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-MonaSans">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-Montserrat">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-MonaSans">
              Meet the Team Behind Zanga
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-primary rounded-xl p-7 border border-accent/30 text-center">
                <div className="w-16 h-16 bg-highlight/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <h3 className="font-semibold text-white font-MonaSans">{member.name}</h3>
                <p className="text-highlight text-sm mt-1 font-Montserrat">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1 font-Montserrat">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-highlight text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-MonaSans">
            Partner with Zanga Today
          </h2>
          <p className="text-white/80 mb-8 font-Montserrat text-lg">
            Whether you're a coach looking to join our network or an organisation ready to invest in leadership, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-highlight px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors font-Montserrat"
            >
              Get in Touch
            </Link>
            <Link
              href="/coaches-partners"
              className="border border-white/60 text-white px-8 py-4 rounded-md font-semibold hover:border-white transition-colors font-Montserrat"
            >
              Join Our Network
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
