import React from 'react'
import Link from 'next/link'

const footerColumns = [
    {
        heading: 'Navigate',
        links: [
            {label: 'Home', href: '/'},
            {label: 'Solutions', href: '/solutions'},
            {label: 'Industries', href: '/industries'},
            {label: 'Resources', href: '/resources'},
        ],
    },
    {
        heading: 'Company',
        links: [
            {label: 'About', href: '/about'},
            {label: 'Coaches & Partners', href: '/coaches-partners'},
            {label: 'Insights', href: '/insights'},
            {label: 'Big Data Report', href: '/big-data-report'},
        ],
    },
    {
        heading: 'Legal',
        links: [
            {label: 'Privacy Policy', href: '/contact'},
            {label: 'Terms of Service', href: '/contact'},
        ],
    },
]

const socialLinks = [
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
        ),
    },
    {
        label: 'Facebook',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/>
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.76A4.9 4.9 0 0 1 5.44.54C6.08.29 6.81.12 7.87.07 8.94.02 9.28 0 12 0zm0 5.35A6.65 6.65 0 1 0 12 18.65 6.65 6.65 0 0 0 12 5.35zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.85-10.4a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0z"/>
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
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

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
                    <div>
                        <p className="text-gray-500 text-md leading-relaxed font-Montserrat max-w-xs mb-6">
                            Identify, develop, and retain exceptional leaders with culturally intelligent leadership
                            assessments, workforce analytics, employee engagement surveys, and leadership development
                            solutions built for Africa and other high-context markets.
                        </p>
                        <p className="text-gray-500 text-md font-Montserrat">123 Example Street, Victoria Island,
                            Lagos</p>
                        <p className="text-gray-500 text-md font-Montserrat mb-6">+234 000 000 0000</p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerColumns.map((column) => (
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
                    className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-md font-Montserrat">
                        © {new Date().getFullYear()} Zanga. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-md font-Montserrat">Kenya, Africa</p>
                </div>
            </div>
        </footer>
    )
}
