import React from 'react'
import Link from 'next/link'
import ListenToStakeholdersHeroGrid from '@/components/listen-to-stakeholders/ListenToStakeholdersHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'
import OpenModalButton from '@/components/modal/OpenModalButton'

export default function ListenToStakeholdersHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Listen to what your stakeholders tell you, and act on it.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        People affected by your organisation often see risks, frustrations, and opportunities before
                        leadership does.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps organisations collect, structure and interpret stakeholder feedback
                        across customers, employees, suppliers, communities and other groups, turning dispersed voices
                        into insight that can support better decisions, stronger relationships and more credible
                        responses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton
                            modal="book-a-demo"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </OpenModalButton>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Voice by Zanga
                        </Link>
                    </div>
                </div>

                <ListenToStakeholdersHeroGrid/>
                <SolutionsLogoMarquee text="Trusted by organisations strengthening stakeholder engagement and accountability"/>
            </div>
        </section>
    )
}
