import React from 'react'
import Link from 'next/link'
import DevelopStrongerLeadersHeroGrid from '@/components/develop-stronger-leaders/DevelopStrongerLeadersHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'

export default function DevelopStrongerLeadersHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Develop stronger leaders <br className="hidden xl:block"/>with insight that shows
                        <span className=" leading-[1.4] px-1"> where growth should begin.</span>
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Leadership development works best when it starts with a clear understanding of capability.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps organisations assess how leaders currently perform, identify
                        development priorities and connect those insights to targeted coaching, learning and
                        leadership development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/assessments/leadership-assessments"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Leadership Assessments
                        </Link>
                    </div>
                </div>

                <DevelopStrongerLeadersHeroGrid/>
                <SolutionsLogoMarquee/>
            </div>
        </section>
    )
}
