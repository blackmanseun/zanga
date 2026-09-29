import React from 'react'
import Link from 'next/link'
import BuildHighPerformingTeamsHeroGrid from '@/components/build-high-performing-teams/BuildHighPerformingTeamsHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'

export default function BuildHighPerformingTeamsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Build teams that communicate, work, <br className="hidden xl:block"/>and perform better
                        together.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        High-performing teams are not created by talent alone. They depend on how people communicate,
                        collaborate, handle pressure and work through differences.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps organisations understand the people dynamics shaping team
                        performance so they can strengthen collaboration, reduce friction and build more effective
                        ways of working.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Team Assessments
                        </Link>
                    </div>
                </div>

                <BuildHighPerformingTeamsHeroGrid/>
                <SolutionsLogoMarquee/>
            </div>
        </section>
    )
}
