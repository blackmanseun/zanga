import React from 'react'
import Link from 'next/link'
import HeroImageGrid from '@/components/ui/HeroImageGrid'

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden py-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                <div className="md:pt-24">
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
                        Understand your people. <br className="hidden xl:block"/>Strengthen your leadership.
                        <span className=" leading-[1.4] px-1"> Make better workforce decisions</span>
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        Large organisations need more than fragmented HR data and one-off assessments.
                        <strong> Zanga</strong> brings together culturally intelligent leadership, talent, workforce and
                        stakeholder insights to help enterprise teams make better decisions at scale.
                    </p>
                    <div className="hidden xl:flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Book a free assessment
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Book an enterprise demo
                        </Link>
                    </div>
                    <div className="xl:hidden flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
                        </Link>
                    </div>
                </div>

                <HeroImageGrid/>
            </div>
        </section>
    )
}
