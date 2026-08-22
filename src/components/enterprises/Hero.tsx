import React from 'react'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'

function Squiggle() {
    return (
        <svg width="110" height="18" viewBox="0 0 110 18" fill="none" aria-hidden="true" className="mb-6 absolute -top-10">
            <path
                d="M2 14C8 6 14 4 20 10C26 16 32 6 38 4C44 2 50 12 56 12C62 12 68 4 74 6C80 8 84 16 90 12C96 8 100 4 108 6"
                stroke="#c55e36"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    )
}

function Polaroid({
                      src,
                      className,
                      imgClassName,
                      positioned = true,
                  }: {
    src: string
    className: string
    imgClassName?: string
    positioned?: boolean
}) {
    return (
        <div className={`${positioned ? 'absolute' : ''} bg-white p-2 pb-5 rounded-sm shadow-xl ${className}`}>
            <img
                src={src}
                alt=""
                aria-hidden="true"
                className={`w-full object-cover object-top ${imgClassName ?? 'h-50'}`}
            />
        </div>
    )
}

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8"
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
        >
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <Squiggle/>
                    <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold leading-tight text-gray-700 font-MonaSans mb-6">
                        Understand your people. <br className="hidden xl:block"/>Strengthen your leadership.
                        <span className=" leading-[1.4] px-1">Make better workforce decisions.</span>
                    </h1>

                    <p className="text-gray-500 font-Montserrat leading-relaxed max-w-lg mb-8">
                        Large organisations need more than fragmented HR data and one-off assessments.
                        Zanga brings together culturally intelligent leadership, talent, workforce and
                        stakeholder insights to help enterprise teams make better decisions at scale.
                    </p>
                    <div className="hidden xl:flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="md:text-[16px] text-[14px] text-center bg-olive text-white px-8 py-3 rounded-md font-bold hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Book an Enterprise Demo
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold md:text-[16px] text-[14px]  hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Zanga Solutions
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

                <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] mx-auto  md:block">
                    <Polaroid
                        imgClassName="md:h-[250px] h-[200px]"
                        src="/images/14.jpg"
                        className="w-[250px] md:h-[280px] h-[250px] md:top-[-10%] top-0 left-0 md:-rotate-3 z-10"
                    />
                    <Polaroid
                        imgClassName="md:h-[200px] h-[180px]"
                        src="/images/13.jpg"
                        className="w-[60%] top-[14%] -right-10 rotate-[8deg] z-20"
                    />
                    <Polaroid
                        imgClassName="md:h-[220px] h-[180px]"
                        src="/images/12.jpg"
                        className="w-[60%] top-[46%] md:left-[-2%] left-2 rotate-[-10deg] z-30"
                    />
                    <span
                        className="animate-pulse absolute right-2 bottom-0 w-14 h-14 rounded-full bg-terracotta/10 border border-terracotta/20"
                        aria-hidden="true"
                    />
                </div>

                <div className="grid grid-cols-3 gap-3 hidden">
                    <Polaroid positioned={false} src="/images/12.jpg" className="w-full" imgClassName="h-24"/>
                    <Polaroid positioned={false} src="/images/10.jpg" className="w-full" imgClassName="h-24"/>
                    <Polaroid positioned={false} src="/images/15.jpg" className="w-full" imgClassName="h-24"/>
                </div>
            </div>
        </section>
    )
}
