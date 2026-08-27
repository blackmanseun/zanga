import React from 'react'

const offices = [
  { city: 'Lagos', country: 'Nigeria', address: '14 Adeola Odeku Street, Victoria Island', email: 'lagos@zanga.com', phone: '+234 800 000 0000' },
  { city: 'Nairobi', country: 'Kenya', address: 'Delta Offices, Waiyaki Way, Westlands', email: 'nairobi@zanga.com', phone: '+254 700 000 000' },
  { city: 'Johannesburg', country: 'South Africa', address: 'Sandton City Office Tower, Level 5', email: 'jhb@zanga.com', phone: '+27 11 000 0000' },
]

const reasons = [
  'I want to explore coaching solutions for my organisation',
  "I'm interested in joining the Zanga coach network",
  "I'd like to request the Big Data Report briefing",
  'I want to explore a partnership opportunity',
  'I have a general enquiry',
]

const faqs = [
  {
    q: 'How quickly can we get started?',
    a: 'Once we understand your needs, we can typically present a shortlist of matched coaches within 5 business days and begin a programme within 2–3 weeks.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'We work with organisations of all sizes. Our smallest engagement is a single executive coaching programme; our largest span thousands of leaders across multiple countries.',
  },
  {
    q: 'Are your coaches ICF certified?',
    a: 'All coaches in our network hold recognised professional coaching credentials (ICF ACC, PCC, or MCC). We also verify sector experience and references.',
  },
  {
    q: 'Do you offer virtual coaching?',
    a: 'Yes. All our solutions are available fully virtually, in-person, or in hybrid format depending on your preference and location.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-2xl">
            Let's Build Something Together
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Whether you're ready to start a coaching programme or just exploring options,
            we'd love to have a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form + Book Demo */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-MonaSans">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8 font-Montserrat">We respond to all enquiries within 1 business day.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">First Name</label>
                  <input
                    type="text"
                    placeholder="Amara"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight font-Montserrat"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">Last Name</label>
                  <input
                    type="text"
                    placeholder="Osei"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight font-Montserrat"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">Work Email</label>
                <input
                  type="email"
                  placeholder="amara@yourcompany.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight font-Montserrat"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">Organisation</label>
                <input
                  type="text"
                  placeholder="Your Company Ltd"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight font-Montserrat"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">Reason for Contact</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight text-gray-500 font-Montserrat">
                  <option value="">Select a reason</option>
                  {reasons.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-Montserrat">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your organisation's coaching needs or questions..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-highlight resize-none font-Montserrat"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-highlight text-white py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Book Demo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-MonaSans">Book a Demo</h2>
            <p className="text-gray-500 text-sm mb-8 font-Montserrat">
              Schedule a 30-minute call with a <strong>Zanga</strong> advisor to see the platform in action and discuss your needs.
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-MonaSans">Calendar Booking</h3>
              <p className="text-gray-500 text-sm mb-6 font-Montserrat max-w-xs">
                Pick a time that works for you. Our advisors are available Monday–Friday, 8am–6pm WAT.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-secondary transition-colors font-Montserrat">
                Open Scheduling Calendar
              </button>
              <p className="text-gray-400 text-xs mt-4 font-Montserrat">Powered by Calendly</p>
            </div>

            {/* Offices */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-900 mb-5 font-MonaSans">Our Offices</h3>
              <div className="space-y-5">
                {offices.map((office) => (
                  <div key={office.city} className="flex gap-4">
                    <div className="w-10 h-10 bg-highlight/10 rounded-lg shrink-0 flex items-center justify-center text-lg">
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-MonaSans">
                        {office.city}, {office.country}
                      </p>
                      <p className="text-gray-500 text-sm font-Montserrat">{office.address}</p>
                      <p className="text-gray-400 text-sm font-Montserrat">{office.email} · {office.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 font-MonaSans">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-7 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 font-MonaSans">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-Montserrat">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
