import React from 'react'
import Link from 'next/link'
import SmesHeroGrid from '@/components/smes/SmesHeroGrid'

export default function SmesHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[3rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Build the team <br className="hidden md:block"/>your growth requires.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        As businesses grow, every people decision carries more weight. The wrong hire, an
                        unprepared manager or rising disengagement can quickly affect performance.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> gives SMEs and growth businesses practical assessment, engagement
                        and development tools to make better people decisions, without needing a large HR or
                        talent function.
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

                <SmesHeroGrid/>
            </div>
        </section>
    )
}
