import React from 'react'
import Reveal from '@/components/ui/Reveal'

const outcomes: { title: string; text: string; id?: string }[] = [
    {
        title: 'Communities',
        text: 'Understand concerns from people living or working around your operations and identify issues requiring attention.',
    },
    {
        title: 'Employees & Contractors',
        text: 'Provide a confidential route for welfare concerns, speak-up issues and feedback that may be difficult to raise through normal management channels.',
    },
    {
        title: 'Farmers & Field Workers',
        id: 'farmer-community-voice',
        text: 'Capture recurring concerns around payments, inputs, contracts, support or other operational issues across dispersed networks.',
    },
    {
        title: 'Suppliers & Contractors',
        id: 'supplier-feedback',
        text: 'Understand the issues affecting supply-chain relationships and operational delivery.',
    },
    {
        title: 'Customers & Agents',
        id: 'customer-feedback',
        text: 'Bring structure to customer and intermediary feedback, including groups that may be difficult to reach through conventional surveys.',
    },
    {
        title: 'Beneficiaries',
        text: 'Give programme participants an accessible route to share feedback or raise concerns about the support they receive.',
    },
    {
        title: 'Citizens & Service Users',
        text: 'Help public institutions understand recurring service-delivery concerns and stakeholder experience.',
    },
]

export default function VoiceOutcomes() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-[#282A30] w-full md:h-[60%] h-[40%]"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mb-10">
                    <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                        Voice by Zanga
                    </span>
                    <h2 className="max-w-2xl text-white text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                        Who Voice helps you hear
                    </h2>
                </div>

                <div>
                    <div className="bg-white rounded-2xl shadow-sm px-6 py-10 sm:px-10 sm:py-12">
                        {outcomes.map((o, i) => (
                            <div
                                key={o.title}
                                id={o.id}
                                className={`relative flex items-start scroll-mt-28 ${i < outcomes.length - 1 ? 'pb-8' : ''} before:content-[''] before:h-full before:absolute before:top-0 before:left-[27.5px] before:w-px before:bg-terracotta/15 ${i === outcomes.length - 1 ? 'before:hidden' : ''}`}
                            >
                                <div
                                    className="step-number text-terracotta flex justify-center items-center min-h-[55px] min-w-[55px] rounded-full text-[18px] font-MonaSans shadow-lg bg-white shrink-0">
                                    {i + 1}
                                </div>
                                <div className="ml-6 mt-2 sm:ml-8 w-full">
                                    <div className="md:grid grid-cols-3 items-center gap-10">
                                        <h5 className="md:text-[17px] text-[16px] font-semibold text-gray-900 font-Montserrat">
                                            {o.title}
                                        </h5>
                                        <p className="col-span-2 text-[16px] text-gray-500 font-Montserrat leading-relaxed mt-2 md:mt-0">
                                            {o.text}
                                        </p>
                                    </div>
                                    {i < outcomes.length - 1 && (
                                        <hr className="md:mt-6 mt-4 border-gray-200"/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
