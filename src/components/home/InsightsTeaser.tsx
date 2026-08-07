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

export default function InsightsTeaser() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-10 md:mb-16 md:max-w-2xl">
                        <span
                            className="inline-block text-md font-semibold text-gray-900 bg-white border border-gray-200 rounded-full px-4 py-2 font-Montserrat whitespace-nowrap mb-6">
                Insights
              </span>
                        <h2 className="text-3xl md:text-[2.75rem] font-bold font-MonaSans leading-tight text-gray-700">
                            Insights That Turn Data Into Better Leadership Decisions
                        </h2>
                    </div>
                </Reveal>

                <Reveal delayMs={80}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                        <h3 className="text-xl font-bold text-gray-700 font-MonaSans">Top Categories</h3>
                        <Link
                            href="#"
                            className="text-md font-semibold text-gray-500 hover:text-olive font-Montserrat inline-flex items-center gap-1 transition-colors"
                        >
                            See all categories
                            <FiArrowRight size={14} aria-hidden="true"/>
                        </Link>
                    </div>
                    <div className="h-px bg-gray-200 mb-6" aria-hidden="true"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        {categories.map((category) => (
                            <div
                                key={category.title}
                                className="flex items-center gap-3 rounded-xl border p-3 border-slate-200 hover:shadow-sm transition-all bg-white/60"
                            >
                <span
                    className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                    style={{backgroundColor: `${category.color}26`, color: category.color}}
                >
                  <category.Icon size={18} aria-hidden="true"/>
                </span>
                                <div className="min-w-0">
                                    <p className="text-md font-bold text-gray-900 font-MonaSans truncate">{category.title}</p>
                                    <p className="text-xs text-gray-500 font-Montserrat truncate">{category.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delayMs={140}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                        <h3 className="text-xl font-bold text-gray-700 font-MonaSans">Latest Releases</h3>
                        <Link
                            href="#"
                            className="text-md font-semibold text-gray-500 hover:text-olive font-Montserrat inline-flex items-center gap-1 transition-colors"
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
                                        by <span className="font-semibold text-gray-600">{article.author}</span> in{' '}
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
