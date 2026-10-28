import React from 'react'
import Link from 'next/link'
import {FiArrowRight, FiCheckCircle} from 'react-icons/fi'

const capabilities: string[] = [
    'Leadership, 360 and psychometric assessments',
    'Team and workforce assessment tools',
    'Individual and client-ready reports',
    'Assessment debrief resources',
    'Zanga Certification Training',
    'Coach Portal access',
    'Assessment credits or bundles',
    'Product and methodology support',
]

export default function CoachesConsultantsBuiltForPractice() {
    return (
        <section style={{backgroundColor: 'rgb(250, 248, 246)'}} className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Built for Practice
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-5 font-MonaSans leading-tight text-gray-700">
                        Tools you can use within <br/>the work you already do
                    </h2>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed">
                        <strong>Zanga</strong> provides coaches and consultants with assessment tools, reporting
                        resources and practitioner support that can be integrated into existing client engagements.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-stretch mt-4">
                    <div>
                        <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-5">
                            Depending on the solution and partnership model, this may include:
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
                            href="/partners/become-a-partner#commercial-models"
                            className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore the Zanga Partner Model
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                        <Link
                            href="/partners/become-a-partner#commercial-models"
                            className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore Partner Model
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="relative mt-8 lg:mt-0 min-h-[16rem] sm:min-h-[22rem] lg:min-h-0">
                        <img
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/168"
                            alt="A coach working through an assessment report with a client"
                            className="absolute inset-0 w-full h-full object-cover object-[50%_65%] rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
