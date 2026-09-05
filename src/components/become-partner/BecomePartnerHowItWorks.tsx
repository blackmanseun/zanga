import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const steps: { number: string; title: string; text: string }[] = [
    {
        number: '01',
        title: 'Choose Your Partnership Route',
        text: 'Identify the model that best matches your organisation, expertise or market opportunity.',
    },
    {
        number: '02',
        title: 'Tell Us About Yourself',
        text: 'Complete a short partner enquiry outlining your background, market, client base and areas of interest.',
    },
    {
        number: '03',
        title: 'Explore the Fit',
        text: 'Zanga will review the opportunity and discuss the most appropriate partnership model.',
    },
    {
        number: '04',
        title: 'Agree the Model',
        text: 'Where there is a strong fit, we agree commercial terms, responsibilities, territory or delivery rights where relevant.',
    },
    {
        number: '05',
        title: 'Onboard and Activate',
        text: 'Partners receive the training, tools and support required to begin working with Zanga.',
    },
]

export default function BecomePartnerHowItWorks() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
        >
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Getting Started
                </span>

                <div className="grid md:grid-cols-2 md:gap-16 items-center">
                    <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        How to become a <br/> Zanga partner
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <div className="rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 bg-white">
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

                        <Link
                            href="#"
                            className="mt-8 inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request to Become a Partner
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="h-full">
                        <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 xl:h-[600px] md:h-[89%]">
                            <img src="/images/33.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
