import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const benefits: string[] = [
    'Expand the solutions you offer clients',
    'Add evidence-based assessments and workforce intelligence to your services',
    'Access culturally relevant tools designed for African and high-context workplaces',
    'Create new commercial and recurring-revenue opportunities',
    'Enter new markets with Zanga products and support',
    'Build differentiated client offerings',
    'Participate in research, thought leadership and market development',
    'Join a growing network of practitioners and institutions',
]

export default function BecomePartnerWhyPartner() {
    return (
        <section
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                    Partners
                </span>

                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                        Why partner with Zanga?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-4">
                    <div>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-4">
                            <strong>Zanga</strong> is building a broader ecosystem around culturally intelligent
                            leadership, workforce and stakeholder intelligence.
                        </p>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            Our partners help extend that reach by bringing Zanga assessments, products, research
                            and implementation capability into new organisations, sectors and markets.
                        </p>

                        <p className="text-gray-700 font-semibold font-Montserrat mb-4">
                            A Zanga partnership can help you:
                        </p>

                        <ul className="space-y-3 mb-10">
                            {benefits.map((item) => (
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
                            Become a Partner
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>

                    <div className="relative mt-8 lg:mt-0 xl:h-[650px] md:h-auto h-[200px]">
                        <img
                            src="/images/34.jpg"
                            alt="A team of partners reviewing materials together"
                            className="w-full xl:w-auto h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
