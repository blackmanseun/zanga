import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

const partnerFaces: { src: string; objectPosition?: string }[] = [
    { src: '/images/headshot/1.jpg' },
    { src: '/images/headshot/2.png' },
    { src: '/images/headshot/3.jpg', objectPosition: '50% 0%' },
    { src: '/images/headshot/4.png' },
    { src: '/images/headshot/5.jpg' },
    { src: '/images/headshot/6.jpg' },
    { src: '/images/headshot/7.jpg' },
    { src: '/images/headshot/8.jpg', objectPosition: '50% 8%' },
]

export default function BecomePartnerHero() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-28 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 xl:grid-cols-7 md:gap-16 space-y-10 md:space-y-0 items-center">
                <Reveal className="xl:col-span-3">
                    <h1 className="text-[2.2rem] md:text-[3rem] leading-[1.1] font-bold mb-6 font-MonaSans text-gray-700">
                        Build with Zanga. <br/>
                        <span className="text-olive">Grow with Zanga.</span>
                    </h1>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-4">
                        Partner with Zanga to bring culturally intelligent assessments, leadership tools and
                        people intelligence to more organisations, sectors and markets.
                    </p>
                    <p className="text-gray-500 text-[16px] font-Montserrat leading-relaxed mb-8">
                        Whether you are a coach, consultant, reseller, institution, technology company or
                        research partner, Zanga offers flexible ways to collaborate, deliver value to your
                        clients and grow alongside our platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="text-center bg-olive text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Become a Partner
                        </Link>
                        <Link
                            href="#"
                            className="text-center border border-terracotta text-terracotta px-8 py-3 rounded-md font-semibold text-base hover:bg-terracotta hover:text-white transition-colors font-Montserrat"
                        >
                            Explore Partner Models
                        </Link>
                    </div>
                </Reveal>

                <Reveal className="xl:col-span-4" delayMs={120}>
                    <div className="grid grid-cols-4 gap-3 sm:gap-4">
                        {partnerFaces.map((face, i) => (
                            <div
                                key={face.src}
                                className="relative aspect-square border-2 border-gray-900 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]"
                                style={{ backgroundColor: '#dcdcd8' }}
                            >
                                <div className="absolute inset-[15%] overflow-hidden">
                                    <Image
                                        src={face.src}
                                        alt={`Zanga partner ${i + 1}`}
                                        fill
                                        sizes="10vw"
                                        className="object-cover grayscale"
                                        style={{ objectPosition: face.objectPosition ?? '50% 22%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
