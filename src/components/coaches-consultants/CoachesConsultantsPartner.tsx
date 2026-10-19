import React from 'react'
import Link from 'next/link'
import {FiArrowRight, FiCheckCircle} from 'react-icons/fi'

const inclusions: string[] = [
    'Assessment tools and reports',
    'Zanga Certification Training',
    'Coach Portal access',
    'Product guides and delivery resources',
    'Client-ready collateral',
    'Co-branded or white-labelled reporting',
    'Commercial partner arrangements',
    'Ongoing learning, refresher training and certification renewal',
    'Partner community, peer learning and knowledge sharing',
    'Joint client or business-development opportunities',
]

export default function CoachesConsultantsPartner() {
    return (
        <section
            style={{backgroundColor: 'rgb(250, 248, 246)'}}
            className="md:py-20 py-14 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_550px] gap-10 lg:gap-16 items-stretch">
                    <div className="relative order-2 lg:order-1 min-h-[16rem] sm:min-h-[22rem] lg:min-h-0">
                        <img
                            src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/200"
                            alt="A coach and a Zanga partner working together"
                            className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
                            Partner With Zanga
                        </span>
                        <h2 className="text-3xl md:text-[2.8rem] font-bold mt-3 mb-6 font-MonaSans leading-tight text-gray-700">
                            Extend your practice <br/>with Zanga
                        </h2>
                        <p className="text-gray-500 font-Montserrat leading-relaxed mb-8">
                            For coaches and consultants who want to use <strong>Zanga</strong> tools regularly
                            with clients, a formal partnership can provide access to the relevant assessments,
                            resources, commercial structures and support.
                        </p>

                        <p className="text-xs font-semibold text-olive uppercase tracking-wide font-Montserrat mb-4">
                            Depending on the partnership model, this may include
                        </p>
                        <ul className="space-y-3 mb-10">
                            {inclusions.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-md text-gray-600 font-Montserrat leading-relaxed"
                                >
                                    <FiCheckCircle className="text-olive shrink-0 mt-0.5" size={16} aria-hidden="true"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-md font-semibold text-sm hover:bg-olive/90 transition-colors font-Montserrat"
                        >
                            Become a Zanga Partner
                            <FiArrowRight size={16} aria-hidden="true"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
