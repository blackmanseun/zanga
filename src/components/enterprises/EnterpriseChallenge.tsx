import React from 'react'
import Reveal from '@/components/ui/Reveal'
import ParallaxVinyl from '@/components/enterprises/ParallaxVinyl'

const challenges: string[] = [
    'Uneven leadership capability across teams',
    'Weak succession and high-potential pipelines',
    'Inconsistent people decisions across business units',
    'Employee engagement and retention risks',
    'Organisational culture gaps',
    'Limited workforce visibility for executives and boards',
]

export default function EnterpriseChallenge() {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="hidden lg:block absolute -top-10 right-0">
                    <ParallaxVinyl
                        leftImages={['/images/13.jpg']}
                        rightImages={['/images/6.jpg','/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/9.jpg']}
                    />
                </div>

                <Reveal>
                    <div className="max-w-xl">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           Enterprise Challenge
          </span>

                        <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
                            <span className="text-gray-700">The enterprise</span> <br/>
                            <span className="text-olive">challenge</span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-gray-500 font-Montserrat leading-relaxed">
                                As organisations grow, people decisions become more complex.
                            </p>
                            <p className="text-gray-500 font-Montserrat leading-relaxed">
                                Leadership capability varies across teams and business units. Succession
                                decisions become harder. Employee engagement shifts. Culture becomes more
                                difficult to manage consistently. And executives often lack a clear,
                                consolidated view of the people factors affecting performance.
                            </p>
                            <p className="text-gray-500 font-Montserrat leading-relaxed">
                                Zanga helps enterprise organisations bring greater structure, consistency
                                and intelligence to these decisions.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <p className="mt-16 md:mt-16 text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-6">
                        Common challenges we help address
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                        {challenges.map((challenge, i) => (
                            <div key={challenge}>
                                <p className="text-terracotta/70 text-[18px]">0{i + 1}</p>
                                <span className="block w-8 h-[2px] bg-terracotta mb-3" aria-hidden="true"/>
                                <p className="text-gray-900 font-semibold font-Montserrat leading-snug md:w-[80%]">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
