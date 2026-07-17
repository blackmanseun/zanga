import React from 'react'
import Link from 'next/link'

const coaches = [
  {
    name: 'Dr. Ngozi Adesanya',
    title: 'Executive & Leadership Coach',
    specialisms: ['Financial Services', 'Board Dynamics', 'Crisis Leadership'],
    bio: 'Former Group MD with 20 years in financial services across West Africa. ICF PCC certified with 500+ coaching hours.',
    countries: 'Nigeria · Ghana · UK',
  },
  {
    name: 'Sipho Dlamini',
    title: 'Organisational Development Coach',
    specialisms: ['Manufacturing', 'Culture Transformation', 'Change Management'],
    bio: 'Ex-Unilever HR Director. Specialises in large-scale organisational transformation and capability building.',
    countries: 'South Africa · Botswana · Zambia',
  },
  {
    name: 'Wanjiru Kamau',
    title: 'Executive Coach & Facilitator',
    specialisms: ['Technology', 'Women in Leadership', 'High-Growth Companies'],
    bio: 'Tech founder and coach. Has helped 80+ leaders at companies ranging from startups to Fortune 500s.',
    countries: 'Kenya · Rwanda · Ethiopia',
  },
  {
    name: 'Hassan Al-Rashid',
    title: 'Strategic Leadership Coach',
    specialisms: ['Government', 'Energy', 'Cross-Cultural Leadership'],
    bio: 'Former government advisor with expertise in public sector reform. Coaches in Arabic, French, and English.',
    countries: 'Egypt · Morocco · Senegal',
  },
  {
    name: 'Adaeze Umeh',
    title: 'Performance & Wellbeing Coach',
    specialisms: ['Healthcare', 'Resilience', 'Team Performance'],
    bio: 'Clinical psychologist turned leadership coach. Brings evidence-based behavioural science to every session.',
    countries: 'Nigeria · Cameroon · DRC',
  },
  {
    name: 'Thierry Ouédraogo',
    title: 'Executive Coach',
    specialisms: ['FMCG', 'Francophone Africa', 'Emerging Leaders'],
    bio: 'Former Nestlé Regional Director with a passion for developing the next generation of African business leaders.',
    countries: 'Côte d\'Ivoire · Burkina Faso · Mali',
  },
]

const partners = [
  { name: 'Pan-African Business School', type: 'Academic Partner' },
  { name: 'African Leadership Institute', type: 'Programme Partner' },
  { name: 'ICF Africa Chapter', type: 'Professional Body' },
  { name: 'Lagos Business School', type: 'Academic Partner' },
  { name: 'Strathmore Business School', type: 'Academic Partner' },
  { name: 'Gordon Institute of Business Science', type: 'Academic Partner' },
]

const joinSteps = [
  { step: '01', title: 'Apply Online', description: 'Submit your coaching profile, credentials, and areas of specialisation.' },
  { step: '02', title: 'Vetting & Interview', description: 'Our team reviews your application and conducts a structured competency interview.' },
  { step: '03', title: 'Onboarding', description: 'Successful coaches complete our onboarding programme and platform orientation.' },
  { step: '04', title: 'Start Coaching', description: 'Get matched with clients aligned to your expertise and begin earning through the platform.' },
]

export default function CoachesPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Coaches & Partners
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-MonaSans leading-tight max-w-3xl">
            Africa's Most Trusted Coaching Network
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl font-Montserrat leading-relaxed">
            Our coaches are carefully vetted practitioners with deep sector experience across the continent.
            Meet the people behind the transformation.
          </p>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Featured Coaches
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              Elite Coaches. Real Experience.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {coaches.map((coach) => (
              <div key={coach.name} className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-highlight/15 rounded-full flex items-center justify-center text-2xl mb-5">
                  👤
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-MonaSans">{coach.name}</h3>
                <p className="text-highlight text-sm font-semibold mt-1 mb-3 font-Montserrat">{coach.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-Montserrat">{coach.bio}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {coach.specialisms.map((s) => (
                    <span key={s} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full font-Montserrat">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-Montserrat">📍 {coach.countries}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 font-Montserrat">
            Showing 6 of 200+ coaches. Matches are curated for each client engagement.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-MonaSans">
              Backed by Leading Institutions
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {partners.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-highlight transition-colors">
                <p className="font-semibold text-gray-900 font-MonaSans">{p.name}</p>
                <p className="text-gray-400 text-sm mt-1 font-Montserrat">{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Network */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-highlight text-sm uppercase tracking-widest font-Montserrat font-semibold">
              Join Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-MonaSans">
              Are You a Coach? Apply to Join Zanga.
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-Montserrat">
              We accept the top 5% of applicants. If you have deep sector experience, recognised credentials,
              and a track record of impact, we'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {joinSteps.map((s) => (
              <div key={s.step} className="bg-primary rounded-xl p-7 border border-accent/30">
                <div className="text-4xl font-bold text-highlight/30 font-MonaSans mb-3">{s.step}</div>
                <h3 className="font-semibold mb-2 font-MonaSans">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-Montserrat">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-highlight text-white px-8 py-4 rounded-md font-bold hover:bg-highlight/85 transition-colors font-Montserrat inline-block"
            >
              Apply to Join the Network
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
