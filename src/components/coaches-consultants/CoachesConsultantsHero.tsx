import React from 'react'
import Link from 'next/link'
import CoachesConsultantsHeroGrid from '@/components/coaches-consultants/CoachesConsultantsHeroGrid'

export default function CoachesConsultantsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Bring more evidence into the work you already do
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Coaches and consultants already bring experience, judgement and perspective to
                        client engagements.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> adds culturally intelligent assessment tools, structured
                        reports and development insight that can help you understand clients more clearly,
                        focus interventions and strengthen the value you deliver.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Take a Free Assessment
                        </Link>
                    </div>
                </div>

                <CoachesConsultantsHeroGrid/>
            </div>
        </section>
    )
}
