import React from 'react'
import Link from 'next/link'
import { FiTag, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import BoldZanga from '@/components/ui/BoldZanga'

const idealFor: string[] = [
    'Consulting firms',
    'Financial institutions',
    'HR platforms',
    'Professional associations',
    'Development organisations',
    'Large institutional partners',
]

const opportunities: string[] = [
    'White-labelled assessment reports',
    'Custom-branded dashboards',
    'Embedded survey or assessment programmes',
    'Institution-specific reporting',
    'Custom implementation support',
    'Volume and enterprise licensing',
]

export default function BecomePartnerWhiteLabel() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    White-Label Partners
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Bring Zanga <br className="hidden md:block"/>intelligence into your <br className="hidden md:block"/> own client proposition
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-[550px_1fr] gap-10 lg:gap-16 items-start mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            <BoldZanga text="White-label partnerships allow organisations to incorporate selected Zanga capabilities into their existing service or product experience."/>
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            <BoldZanga text="Depending on the solution, this may include customised branding, reports, dashboards or delivery models."/>
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
                        className="mt-8 lg:mt-0 rounded-2xl border border-gray-100 p-8 lg:p-10"
                        style={{ backgroundColor: 'rgb(250, 248, 246)' }}
                    >
                        <span className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-olive mb-6">
                            <FiTag size={20} aria-hidden="true"/>
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 font-MonaSans mb-6">
                            Partnership Opportunities
                        </h3>
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

                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <Link
                                href="#"
                                className="w-full inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                            >
                                Explore White-Label Solutions
                                <FiArrowRight size={16} aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
