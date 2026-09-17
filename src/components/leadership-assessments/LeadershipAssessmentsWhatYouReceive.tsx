import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import BoldZanga from '@/components/ui/BoldZanga'

const deliverables: string[] = [
    'Individual leadership reports',
    'Competency profiles',
    'Strengths and development priorities',
    '360° feedback reports',
    'Potential and readiness insights',
    'Leadership-development recommendations',
    'Cohort and organisational reporting',
    'Leadership capability heat maps',
    'Comparative insights across teams or levels',
    'Executive or board summaries',
    'Facilitated assessment debriefs',
    'Coaching and leadership-development support',
]

export default function LeadershipAssessmentsWhatYouReceive() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Leadership Assessments
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        The output
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-8 md:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            <BoldZanga text="Depending on the assessment and scope of engagement, Zanga can provide:"/>
                        </p>

                        <ul className="space-y-3 mb-10">
                            {deliverables.map((item) => (
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
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <img
                            src="/images/55.jpg"
                            alt="A leadership team reviewing an assessment report together"
                            className="w-full h-64 md:h-80 xl:h-[650px] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
