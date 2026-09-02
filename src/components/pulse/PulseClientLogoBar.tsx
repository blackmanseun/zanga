import React from 'react'
import PulseLogoMarquee from '@/components/pulse/PulseLogoMarquee'

export default function PulseClientLogoBar() {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto md:text-center">
                <h2 className="text-gray-700 text-18px md:text-[24px] font-semibold font-Montserrat mb-8">
                    Trusted by organisations building stronger workplaces.
                </h2>

                <PulseLogoMarquee/>
            </div>
        </section>
    )
}
