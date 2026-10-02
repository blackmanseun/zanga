import React from 'react'
import Link from 'next/link'
import MakeBetterInvestmentLendingDecisionsHeroGrid from '@/components/make-better-investment-lending-decisions/MakeBetterInvestmentLendingDecisionsHeroGrid'
import SolutionsLogoMarquee from '@/components/solutions/SolutionsLogoMarquee'
import OpenModalButton from '@/components/modal/OpenModalButton'

export default function MakeBetterInvestmentLendingDecisionsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold text-gray-700 leading-[1.1] font-MonaSans mb-6">
                        Understand the people behind the capital decision.
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Financial and operational data can show how a business has performed. They do not always
                        reveal how well the founder or management team can lead, adapt and deliver through complexity.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> helps investors, lenders and financial institutions add structured
                        leadership and people insight to investment, credit and portfolio decisions.
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
                            Explore Diligence by Zanga
                        </Link>
                    </div>
                </div>

                <MakeBetterInvestmentLendingDecisionsHeroGrid/>
                <SolutionsLogoMarquee text="Trusted by organisations making better people and business decisions"/>
            </div>
        </section>
    )
}
