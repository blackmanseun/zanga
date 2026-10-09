import React from 'react'
import Link from 'next/link'
import DevelopmentOrganisationsHeroGrid from '@/components/development-organisations/DevelopmentOrganisationsHeroGrid'

export default function DevelopmentOrganisationsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Strengthen programme delivery by listening better to the people who matter
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Development finance institutions, NGOs, and implementing partners depend on strong
                        local leadership, engaged teams and credible stakeholder feedback.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> combines stakeholder listening, workforce sentiment, and
                        leadership intelligence to help development organisations strengthen delivery,
                        understand emerging risks and build a clearer evidence base around the people and
                        communities their programmes serve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Take a Free Assessment
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
                        </Link>
                    </div>
                </div>

                <DevelopmentOrganisationsHeroGrid/>
            </div>
        </section>
    )
}
