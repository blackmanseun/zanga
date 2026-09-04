import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const deliverables: string[] = [
    'Employee engagement surveys',
    'Pulse surveys',
    'Culture assessments',
    'Custom survey modules',
    'Participation tracking',
    'Organisational dashboards',
    'Engagement and sentiment analysis',
    'Team or business-unit comparisons',
    'Trend reporting over time',
    'Leadership and management insights',
    'Priority-action recommendations',
    'Organisational reports',
    'Executive or board-level summaries',
    'Facilitated results sessions',
    'Follow-up measurement',
]

export default function PulseWhatYouReceive() {
    return (
        <section
            style={{ backgroundColor: 'rgb(250, 248, 246)' }}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Pulse by Zanga
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        What you receive
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Depending on the scope of the engagement, <strong>Pulse by Zanga</strong> can provide:
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
                            className="hidden md:inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                        <Link
                            href="#"
                            className="md:hidden inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <img
                            src="/images/19.jpg"
                            alt="A team reviewing Pulse survey results together"
                            className="xl:w-[85%] xl:h-[80%] md:w-full md:h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
