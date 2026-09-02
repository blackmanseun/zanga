import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    FiArrowRight,
    FiBarChart2,
    FiBookOpen,
    FiClipboard,
    FiGlobe,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiUsers,
} from 'react-icons/fi'
import type {IconType} from 'react-icons'
import Reveal from '@/components/ui/Reveal'
import BoldZanga from '@/components/ui/BoldZanga'

type Category = {
    title: string
    subtitle: string
    Icon: IconType
    color: string
}

const categories: Category[] = [
    {title: 'Leadership', subtitle: "Building tomorrow's leaders", Icon: FiUsers, color: '#A3A748'},
    {title: 'Workforce Analytics', subtitle: 'Data-driven talent decisions', Icon: FiBarChart2, color: '#0F3460'},
    {title: 'Organisational Culture', subtitle: 'Values in action', Icon: FiGlobe, color: '#C55E36'},
    {title: 'Talent Development', subtitle: 'Growth at every level', Icon: FiTrendingUp, color: '#D9A441'},
    ]

type Article = {
    title: string
    description: string
    author: string
    category: string
    image: string
}

const articles: Article[] = [
    {
        title: 'What Makes African Leaders Resilient in Uncertain Markets',
        description: 'A look at the traits and habits shaping resilient leadership across African markets.',
        author: 'Zanga Research Team',
        category: 'Leadership',
        image: '/images/10.jpg',
    },
    {
        title: 'Turning Workforce Data Into Boardroom-Ready Insights',
        description: 'How aggregated assessment data becomes a strategic asset for HR and the board.',
        author: 'Amara Okafor',
        category: 'Workforce Analytics',
        image: '/images/6.jpg',
    },
    {
        title: 'Why Organisational Culture Audits Matter More Than Ever',
        description: 'A practical framework for measuring and strengthening organisational culture.',
        author: 'Zanga Research Team',
        category: 'Organisational Culture',
        image: '/images/3.jpg',
    },
    {
        title: 'Designing Coaching Programmes That Actually Stick',
        description: 'Lessons from coaching engagements that lead to lasting behaviour change.',
        author: 'David Mwangi',
        category: 'Coaching & Development',
        image: '/images/8.jpg',
    },
]

export default function HomeInsightsTeaser() {
    return (
        <section className="md:py-20 py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-10 md:mb-16 md:max-w-2xl">
                       <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
            Insights
          </span>
                        <h2 className="text-3xl md:text-[2.75rem] mt-3 font-bold font-MonaSans leading-[1.1] text-gray-700">
                            Ideas and evidence for better people decisions.
                        </h2>
                    </div>
                </Reveal>

                <Reveal delayMs={10}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                        <h3 className="text-xl font-bold text-gray-700 font-MonaSans">Latest Releases</h3>
                        <Link
                            href="#"
                            className="text-[14px] md:text-[16px] font-semibold text-gray-500 hover:text-olive font-Montserrat inline-flex items-center gap-1 transition-colors"
                        >
                            Explore insights
                            <FiArrowRight size={14} aria-hidden="true"/>
                        </Link>
                    </div>
                    <div className="h-px bg-gray-200 mb-6" aria-hidden="true"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                        {articles.map((article) => (
                            <div key={article.title} className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div
                                    className="relative w-full h-44 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(min-width: 640px) 128px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-base font-bold text-gray-900 font-MonaSans leading-snug mb-1.5">
                                        {article.title}
                                    </p>
                                    <p className="text-md text-gray-500 font-Montserrat leading-relaxed mb-2">
                                        {article.description}
                                    </p>
                                    <p className="text-xs text-gray-400 font-Montserrat">
                                        by <span className="font-semibold text-gray-600"><BoldZanga text={article.author}/></span> in{' '}
                                        <span className="font-semibold text-gray-600">{article.category}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
