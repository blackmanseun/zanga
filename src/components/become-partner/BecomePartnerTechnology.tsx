import React from 'react'
import Link from 'next/link'
import { FiCpu, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import BoldZanga from '@/components/ui/BoldZanga'

const idealFor: string[] = [
    'HR technology platforms',
    'Recruitment platforms',
    'Learning platforms',
    'Financial-services technology companies',
    'Employee-experience platforms',
    'Enterprise software providers',
]

const opportunities: string[] = [
    'Embedded assessment experiences',
    'Platform integrations',
    'Data exchange',
    'API-enabled functionality',
    'Joint product development',
    'White-labelled or co-branded solutions',
]

export default function BecomePartnerTechnology() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Technology &amp; Embedded Partners
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Embed culturally <br className="hidden md:block"/>intelligent people insight <br className="hidden md:block"/>into your platform
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            <BoldZanga text="Technology partnerships create opportunities to integrate Zanga assessments, sentiment intelligence or reporting into complementary digital platforms."/>
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            <BoldZanga text="This can help partners enhance their own product experience while giving users access to deeper people and workforce insight."/>
                        </p>

                        <p className="font-bold text-gray-900 font-MonaSans mb-4">
                            Ideal for
                        </p>

                        <ul className="space-y-5">
                            {idealFor.map((role) => (
                                <li key={role} className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-terracotta shrink-0" aria-hidden="true"/>
                                    <span className="text-gray-700 font-Montserrat text-[17px]">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="mt-8 lg:mt-0 rounded-2xl border border-gray-100 p-8 lg:p-10 bg-white"
                    >
                        <span className="w-12 h-12 rounded-full bg-[#FAF8F6] border border-gray-200 shadow-sm flex items-center justify-center text-olive mb-6">
                            <FiCpu size={20} aria-hidden="true"/>
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 font-MonaSans mb-2">
                            Partnership Opportunities
                        </h3>
                        <p className="text-gray-500 text-sm font-Montserrat leading-relaxed mb-6">
                            Depending on product readiness, partnerships may include:
                        </p>
                        <ul className="space-y-4">
                            {opportunities.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-gray-600 font-Montserrat leading-relaxed"
                                >
                                    <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={18} aria-hidden="true"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link
                                href="#"
                                className="w-full inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Talk to Zanga About Technology Partnerships
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
