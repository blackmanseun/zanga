import React from 'react'
import Link from 'next/link'
import ImproveEngagementRetentionHeroGrid from '@/components/improve-engagement-retention/ImproveEngagementRetentionHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'

export default function ImproveEngagementRetentionHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Understand what keeps your people engaged, and what puts retention at risk.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Employee engagement and retention problems rarely begin with a resignation. They build over
                        time through changing sentiment, weak communication, poor management experiences and
                        unresolved workplace concerns.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps organisations listen more effectively, identify the factors
                        shaping employee experience and turn workforce insight into action.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/products/pulse-by-zanga"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Pulse by Zanga
                        </Link>
                    </div>
                </div>

                <ImproveEngagementRetentionHeroGrid/>
                <SolutionsLogoMarquee text="Trusted by organisations working to build stronger employee experiences."/>
            </div>
        </section>
    )
}
