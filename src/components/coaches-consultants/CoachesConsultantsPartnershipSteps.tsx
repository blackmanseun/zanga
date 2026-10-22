import React from 'react'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Explore',
        text: 'Learn about the Zanga tools, partner models and opportunities relevant to your practice.',
    },
    {
        number: '02',
        title: 'Qualify',
        text: 'Complete the partner application so Zanga can understand your background, client base and intended use of the solutions.',
    },
    {
        number: '03',
        title: 'Onboard',
        text: 'Agree the appropriate partnership model, complete required documentation and undertake Zanga Certification Training or other required practitioner training where applicable.',
    },
    {
        number: '04',
        title: 'Deliver & Grow',
        text: 'Access the relevant tools and resources, bring Zanga into client work and explore opportunities to build your practice further.',
    },
]

export default function CoachesConsultantsPartnershipSteps() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    How the Partnership Works
                </span>

                <div className="grid md:grid-cols-2 md:gap-16 items-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        From interest to <br/> active practice
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="order-1 rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 bg-white">
                        <div className="space-y-8">
                            {steps.map((s) => (
                                <div key={s.title} className="flex items-start gap-5">
                                    <span
                                        className="text-5xl sm:text-6xl font-bold text-olive/30 font-MonaSans leading-none shrink-0 w-14 sm:w-16">
                                        {s.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-2">{s.title}</h3>
                                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed">{s.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-2 md:order-3">
                        <Link
                            href="/partners/become-a-partner"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore the Business Partner Opportunity
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="order-3 md:order-2 relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 min-h-[16rem] sm:min-h-[22rem] md:min-h-0">
                        <img src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/205" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
