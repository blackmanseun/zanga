import React from 'react'
import {FiArrowRight, FiCheckCircle} from 'react-icons/fi'
import OpenModalButton from '@/components/modal/OpenModalButton'

const capabilities: string[] = [
    'Large participant cohorts',
    'Multi-team and multi-business-unit assessments',
    'Organisational dashboards',
    'Comparative reporting',
    'Custom competency frameworks',
    'Leadership and workforce analytics',
    'White-labelled reporting',
    'Executive and board-level insights',
    'Tailored development programmes',
]

export default function EnterprisesBuiltForComplexOrganisations() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Enterprise Readiness
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Built for complex <br/>organisations
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-stretch mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Enterprise organisations need solutions that can work across different teams,
                            locations and levels of leadership.
                        </p>

                        <p className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-4">
                            <strong>Zanga</strong> can support
                        </p>
                        <ul className="space-y-3 mb-10">
                            {capabilities.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed"
                                >
                                    <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <OpenModalButton
                            modal="book-a-demo"
                            className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Talk to Zanga About Enterprise Solutions
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                        <OpenModalButton
                            modal="book-a-demo"
                            className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Talk to Zanga
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </OpenModalButton>
                    </div>

                    <div className="relative mt-8 lg:mt-0 min-h-[12rem] sm:min-h-[26rem]">
                        <img
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/24"
                            alt="Enterprise team working across a shared workspace"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
