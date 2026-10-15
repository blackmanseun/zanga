import React from 'react'
import DiligenceLogoMarquee from '@/components/diligence/DiligenceLogoMarquee'

export default function DiligenceClientLogoBar() {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto md:text-center">
                <h2 className="text-gray-700 text-18px md:text-[24px] font-semibold font-Montserrat mb-8">
                    Now in early access with selected investors and lenders.
                </h2>

                <DiligenceLogoMarquee/>
            </div>
        </section>
    )
}
