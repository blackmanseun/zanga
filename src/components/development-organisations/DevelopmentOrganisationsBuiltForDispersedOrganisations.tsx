import React from 'react'
import Link from 'next/link'
import {FiArrowRight, FiCheckCircle} from 'react-icons/fi'

const capabilities: string[] = [
    'Multi-country and multi-programme rollouts',
    'Stakeholder and beneficiary listening',
    'Confidential feedback pathways',
    'Leadership assessment across country teams',
    'Local partner and grantee capability assessment',
    'Workforce engagement across dispersed teams',
    'Comparative reporting across projects or locations',
    'Custom surveys and reporting',
    'Leadership and organisational development following assessment',
]

export default function DevelopmentOrganisationsBuiltForDispersedOrganisations() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Better Insight Across Programmes, Teams and Stakeholders
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Built for dispersed and <br/>accountable organisations
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-stretch mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Development organisations need solutions that can work across different locations,
                            stakeholder groups and operating environments.
                        </p>

                        <p className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-4">
                            Depending on the engagement, <strong>Zanga</strong> can support
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

                        <Link
                            href="#"
                            className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Talk to Zanga About Development Solutions
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                        <Link
                            href="#"
                            className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Talk to Zanga
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="relative mt-8 lg:mt-0 min-h-[12rem] xl:min-h-[35rem]">
                        <img
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/139"
                            alt="Programme teams coordinating across locations"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
