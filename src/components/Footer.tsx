import React from 'react'
import Link from 'next/link'

const footerColumns: { heading: string; links: { label: string; href: string; hidden?: boolean }[] }[] = [
    {
        heading: 'Navigate',
        links: [
            {label: 'Solutions', href: '#'},
            {label: 'Products', href: '#'},
            {label: 'Assessments', href: '#'},
            {label: 'Pricing', href: '#'},
            {label: 'Partners', href: '#'},
            {label: 'Resources', href: '#'},
            {label: 'About', href: '/about', hidden: true},
        ],
    },
    {
        heading: 'Company',
        links: [
            {label: 'Coach Login', href: '#'},
            {label: 'Insights', href: '#'},
            {label: 'Big Data Report', href: '#'},
            {label: 'Contact', href: '/contact', hidden: true},
        ],
    },
    {
        heading: 'Legal',
        links: [
            {label: 'Privacy Policy', href: '#'},
            {label: 'Terms of Service', href: '#'},
        ],
    },
]

const socialLinks = [
    {
        label: 'LinkedIn',
        color: '#0A66C2',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
        ),
    },
    {
        label: 'YouTube',
        color: '#FF0000',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>
            </svg>
        ),
    },
]

/** Links still on '#' have no page yet, so they're hidden until one exists. */
const hasPage = (href: string) => href !== '#'

const visibleFooterColumns = footerColumns
    .map((column) => ({...column, links: column.links.filter((link) => !link.hidden && hasPage(link.href))}))
    .filter((column) => column.links.length > 0)

const visibleSocialLinks = socialLinks.filter((social) => hasPage(social.href))

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto md:py-16 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
                    <div>
                        <Link href="/" className="block mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-[60px]" src="/images/zanga-logo.svg" alt="Zanga"/>
                        </Link>
                    </div>
                    <div className="hidden lg:block" aria-hidden="true"/>
                    <div className="hidden lg:block" aria-hidden="true"/>
                    <div className="hidden lg:block" aria-hidden="true"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
                    <div>
                        <p className="text-gray-500 text-md leading-relaxed font-Montserrat max-w-xs mb-6">
                            Identify, develop, and retain exceptional leaders with culturally intelligent leadership
                            assessments, workforce analytics, employee engagement surveys, and leadership development
                            solutions built for Africa and other high-context markets.
                        </p>
                        <p className="text-gray-500 text-md font-Montserrat">
                            <span className="font-semibold text-gray-700">Email:</span>{' '}
                            <a href="mailto:commercial@zangametrics.com"
                               className="text-terracotta hover:text-terracotta-dark transition-colors">commercial@zangametrics.com</a>
                        </p>
                        <p className="text-gray-500 text-md font-Montserrat">
                            <span className="font-semibold text-gray-700">Tel:</span>{' '}
                            <a href="tel:+260764104552"
                               className="text-terracotta hover:text-terracotta-dark transition-colors">+260 764 104 552</a>
                        </p>
                        <p className="text-gray-500 text-md font-Montserrat mb-6">AfricaWorks, 4 Bishops Rd, Lusaka</p>
                        <div className="flex gap-3">
                            {visibleSocialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    style={{color: social.color}}
                                    className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {visibleFooterColumns.map((column) => (
                        <div key={column.heading}>
                            <h3 className="text-gray-700 font-semibold text-md mb-4 font-MonaSans">{column.heading}</h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-500 hover:text-gray-900 text-md transition-colors font-Montserrat"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div
                    className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between md:gap-4">
                    <p className="text-gray-500 text-md font-Montserrat">
                        © {new Date().getFullYear()} <strong>Zanga</strong>. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-md font-Montserrat">Lusaka, Zambia</p>
                </div>
            </div>
        </footer>
    )
}
