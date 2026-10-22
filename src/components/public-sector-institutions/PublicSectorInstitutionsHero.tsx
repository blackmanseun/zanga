import React from 'react'
import PublicSectorInstitutionsHeroGrid from '@/components/public-sector-institutions/PublicSectorInstitutionsHeroGrid'
import OpenModalButton from '@/components/modal/OpenModalButton'
import OpenNavMenuButton from '@/components/ui/OpenNavMenuButton'

export default function PublicSectorInstitutionsHero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pt-8">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-[1.1] text-gray-700 font-MonaSans mb-6">
                        Strengthen public leadership and build more capable institutions
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-4">
                        Ministries, departments, agencies, and parastatals depend on capable leaders,
                        effective teams and credible people decisions to deliver on their mandates.
                    </p>
                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        <strong>Zanga</strong> combines leadership intelligence, talent assessment,
                        workforce insight and stakeholder listening to help public institutions
                        strengthen capability, plan succession, and improve institutional performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <OpenModalButton modal="book-a-demo" className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat">
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

                <PublicSectorInstitutionsHeroGrid/>
            </div>
        </section>
    )
}
