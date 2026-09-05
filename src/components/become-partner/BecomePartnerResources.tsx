import React from 'react'
import Link from 'next/link'
import { FiLogIn, FiHelpCircle, FiAward, FiBriefcase, FiArrowRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'

type Resource = {
    title: string
    description: string
    cta?: string
    color: string
    Icon: IconType
}

const resources: Resource[] = [
    {
        title: 'Coach Portal',
        description: 'Access assessments, reports and practitioner resources.',
        cta: 'Business Partner Login',
        color: '#a3a748',
        Icon: FiLogIn,
    },
    {
        title: 'Partner FAQs',
        description:
            "Answers to common questions about Zanga's partner models, certification and commercial arrangements.",
        cta: 'View Partner FAQs',
        color: '#c55e36',
        Icon: FiHelpCircle,
    },
    {
        title: 'Practitioner Training & Certification',
        description: 'Learn what is required to use selected Zanga assessments professionally.',
        cta: 'Explore Certification',
        color: '#16213E',
        Icon: FiAward,
    },
    {
        title: 'Sales & Product Resources',
        description:
            'Approved partners can access relevant product and commercial materials through their agreed partner channels.',
        color: '#0F3460',
        Icon: FiBriefcase,
    },
]

export default function BecomePartnerResources() {
    return (
        <section
            className="relative bg-white md:py-28 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="col-span-2">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Partner Resources
                        </span>
                        <h2 className="text-3xl md:text-[2.75rem] font-bold text-gray-700 mt-3 mb-4 font-MonaSans leading-[1.1]">
                            Already working with Zanga or exploring a partnership?
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed max-w-sm">
                            Access the information and tools relevant to your relationship with us.
                        </p>
                    </div>

                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                        {resources.map((resource) => (
                            <div key={resource.title} className="h-full flex flex-col">
                                <span
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${resource.color}1F`, color: resource.color }}
                                >
                                    <resource.Icon size={20} aria-hidden="true"/>
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 font-MonaSans mb-1.5">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-Montserrat leading-relaxed mb-3">
                                    {resource.description}
                                </p>
                                {resource.cta && (
                                    <Link
                                        href="#"
                                        className="mt-auto inline-flex items-center gap-1.5 font-semibold text-sm font-Montserrat hover:gap-2.5 transition-all"
                                        style={{ color: resource.color }}
                                    >
                                        {resource.cta}
                                        <FiArrowRight size={14} aria-hidden="true"/>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
