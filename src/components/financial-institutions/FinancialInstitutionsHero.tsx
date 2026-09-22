import React from 'react'
import Link from 'next/link'
import FinancialInstitutionsHeroGrid from '@/components/financial-institutions/FinancialInstitutionsHeroGrid'

export default function FinancialInstitutionsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Strengthen leadership, culture and people-risk decisions across the institution
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Banks, insurers and financial-services groups depend on the quality of their
                        people as much as the strength of their financial systems.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> brings leadership, talent, workforce and stakeholder
                        intelligence together to help financial institutions strengthen capability,
                        improve visibility and make better people-related decisions across the
                        organisation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
                        </Link>
                    </div>
                </div>

                <FinancialInstitutionsHeroGrid/>
            </div>
        </section>
    )
}
