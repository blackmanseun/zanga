import React from 'react'
import OpenModalButton from '@/components/modal/OpenModalButton'
import InvestorsFundManagersHeroGrid from '@/components/investors-fund-managers/InvestorsFundManagersHeroGrid'
import OpenNavMenuButton from '@/components/ui/OpenNavMenuButton'

export default function InvestorsFundManagersHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Understand the people behind the investment
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Venture capital funds, private equity firms and other capital providers know that
                        founder and management capability can materially influence how a business scales
                        and executes.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> adds structured leadership, talent and workforce insight to
                        investment diligence and portfolio support, helping investors understand
                        people-related risks and development priorities more clearly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton
                            modal="book-a-demo"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Book a Demo
                        </OpenModalButton>
                        <OpenNavMenuButton
                            menu="Solutions"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
                        </OpenNavMenuButton>
                    </div>
                </div>

                <InvestorsFundManagersHeroGrid/>
            </div>
        </section>
    )
}
