import React from 'react'
import Link from 'next/link'
import StrengthenSuccessionPlanningHeroGrid from '@/components/strengthen-succession-planning/StrengthenSuccessionPlanningHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'
import OpenModalButton from '@/components/modal/OpenModalButton'

export default function StrengthenSuccessionPlanningHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Build a stronger leadership pipeline before you need it.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Succession planning works best when organisations know who is ready now, who could be ready
                        next and where leadership gaps may put continuity at risk.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps organisations assess leadership capability and future potential so
                        succession decisions are based on evidence, not familiarity or tenure alone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton
                            modal="book-a-demo"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </OpenModalButton>
                        <Link
                            href="/assessments/leadership-assessments"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Leadership Assessments
                        </Link>
                    </div>
                </div>

                <StrengthenSuccessionPlanningHeroGrid/>
                <SolutionsLogoMarquee text="Trusted by organisations strengthening succession planning"/>
            </div>
        </section>
    )
}
