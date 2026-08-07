'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SimpleLink = { label: string; href: string }

type MegaColumn = {
  heading: string
  /** Used when the column has no sub-links yet — the heading itself becomes the link. */
  headingHref?: string
  links?: SimpleLink[]
  variant?: 'default' | 'promo'
}

type MegaMenu = {
  columns: MegaColumn[]
  /** A shared strip of links rendered below the columns (used by Products for platform-wide links). */
  extraLinks?: { heading: string; links: SimpleLink[] }
}

type NavItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'mega'; label: string; menu: MegaMenu }

const navItems: NavItem[] = [
  {
    type: 'mega',
    label: 'Solutions',
    menu: {
      columns: [
        {
          heading: 'By Business Need',
          links: [
            { label: 'Hire Better People', href: '#' },
            { label: 'Develop Stronger Leaders', href: '#' },
            { label: 'Build High-Performing Teams', href: '#' },
            { label: 'Improve Engagement & Retention', href: '#' },
            { label: 'Strengthen Succession Planning', href: '#' },
            { label: 'Listen to Stakeholders', href: '#' },
            { label: 'Make Better Investment & Lending Decisions', href: '#' },
          ],
        },
        {
          heading: 'By Organisation Type',
          links: [
            { label: 'Enterprises', href: '#' },
            { label: 'SMEs & Growth Businesses', href: '#' },
            { label: 'Financial Institutions', href: '#' },
            { label: 'Development Organisations', href: '#' },
            { label: 'Public-Sector Institutions', href: '#' },
            { label: 'Coaches & Consultants', href: '#' },
            { label: 'Investors & Fund Managers', href: '#' },
          ],
        },
        {
          heading: 'Featured Paths',
          variant: 'promo',
          links: [
            { label: 'Find the Right Assessment', href: '#' },
            { label: 'Explore Zanga 2.0', href: '#' },
            { label: 'Download the Africa Workforce Report', href: '#' },
            { label: 'Book a Demo', href: '#' },
          ],
        },
      ],
    },
  },
  {
    type: 'mega',
    label: 'Products',
    menu: {
      columns: [
        {
          heading: 'Pulse by Zanga',
          links: [
            { label: 'Employee engagement', href: '#' },
            { label: 'Culture & values', href: '#' },
            { label: 'Retention intelligence', href: '#' },
            { label: 'Performance sentiment', href: '#' },
            { label: 'Pulse surveys', href: '#' },
            { label: 'Workforce dashboards', href: '#' },
          ],
        },
        {
          heading: 'Fit by Zanga',
          links: [
            { label: 'Recruitment psychometrics', href: '#' },
            { label: 'Candidate fit', href: '#' },
            { label: 'Leadership potential', href: '#' },
            { label: 'Executive assessment', href: '#' },
            { label: 'Role fit', href: '#' },
            { label: 'Hiring analytics', href: '#' },
          ],
        },
        {
          heading: 'Voice by Zanga',
          links: [
            { label: 'Customer feedback', href: '#' },
            { label: 'Supplier feedback', href: '#' },
            { label: 'Farmer & community voice', href: '#' },
            { label: 'Grievance management', href: '#' },
            { label: 'Case tracking & escalation', href: '#' },
            { label: 'ESG evidence', href: '#' },
          ],
        },
        {
          heading: 'Diligence by Zanga',
          links: [
            { label: 'Founder assessment', href: '#' },
            { label: 'Leadership-risk intelligence', href: '#' },
            { label: 'Borrower assessment', href: '#' },
            { label: 'Investment due diligence', href: '#' },
            { label: 'Portfolio monitoring', href: '#' },
            { label: 'Custom intelligence', href: '#' },
          ],
        },
      ],
      extraLinks: {
        heading: 'Platform',
        links: [
          { label: 'Organisational Dashboards', href: '#' },
          { label: 'Reporting and Benchmarking', href: '#' },
          { label: 'White-Label Solutions', href: '#' },
          { label: 'Integrations', href: '#' },
          { label: 'Data Security and Privacy', href: '#' },
          { label: 'Customisation and Enterprise Solutions', href: '#' },
        ],
      },
    },
  },
  {
    type: 'mega',
    label: 'Assessments',
    menu: {
      columns: [
        {
          heading: 'Leadership Assessments',
          links: [
            { label: 'Leadership Competency Assessment', href: '#' },
            { label: '360 Leadership Assessment', href: '#' },
            { label: 'Leadership Potential Assessment', href: '#' },
            { label: 'Executive Leadership Assessment', href: '#' },
          ],
        },
        {
          heading: 'Psychometric Assessments',
          links: [
            { label: 'Personality Assessment', href: '#' },
            { label: 'Behavioural Assessment', href: '#' },
            { label: 'Cognitive Ability Assessment', href: '#' },
            { label: 'Emotional Intelligence Assessment', href: '#' },
            { label: 'Career & Role-Fit Assessment', href: '#' },
          ],
        },
        {
          heading: 'Workforce Assessments',
          links: [
            { label: 'Employee Engagement Survey', href: '#' },
            { label: 'Organisational Culture Assessment', href: '#' },
            { label: 'Team Effectiveness Assessment', href: '#' },
            { label: 'Custom Workforce Survey', href: '#' },
          ],
        },
        {
          heading: 'Explore',
          variant: 'promo',
          links: [
            { label: 'Compare Assessments', href: '#' },
            { label: 'Find the Right Assessment', href: '#' },
            { label: 'View Sample Reports', href: '#' },
            { label: 'Take a Free Assessment', href: '#' },
            { label: 'Assessment FAQs', href: '#' },
          ],
        },
      ],
    },
  },
  { type: 'link', label: 'Pricing', href: '#' },
  {
    type: 'mega',
    label: 'Partners',
    menu: {
      columns: [
        {
          heading: 'Become a Partner',
          links: [
            { label: 'Coach / Practitioner', href: '#' },
            { label: 'Referral Partner', href: '#' },
            { label: 'Reseller / Franchise', href: '#' },
            { label: 'White Label', href: '#' },
            { label: 'Technology Partner', href: '#' },
            { label: 'Research Partner', href: '#' },
          ],
        },
        {
          heading: 'Partner Models',
          links: [
            { label: 'Benefits', href: '#' },
            { label: 'Commercial Models', href: '#' },
            { label: 'Certification', href: '#' },
            { label: 'Implementation Support', href: '#' },
            { label: 'Market Rights', href: '#' },
          ],
        },
        {
          heading: 'Partner Resources',
          links: [
            { label: 'Partner FAQs', href: '#' },
            { label: 'Sales Materials', href: '#' },
            { label: 'Certification Information', href: '#' },
            { label: 'Support', href: '#' },
          ],
        },
        {
          heading: 'Existing Partners',
          links: [
            { label: 'Coach Login', href: '#' },
            { label: 'Partner Login (future)', href: '#' },
            { label: 'Contact Partner Team', href: '#' },
          ],
        },
      ],
    },
  },
  {
    type: 'mega',
    label: 'Resources',
    menu: {
      columns: [
        {
          heading: 'Insights',
          links: [
            { label: 'Articles', href: '#' },
            { label: 'Guides', href: '#' },
            { label: 'Reports', href: '#' },
            { label: 'Webinars', href: '#' },
            { label: 'Videos', href: '#' },
            { label: 'Case Studies', href: '#' },
          ],
        },
        {
          heading: 'Research',
          links: [
            { label: 'Africa Workforce Report', href: '#' },
            { label: 'African Leadership Research', href: '#' },
            { label: 'Cultural Intelligence', href: '#' },
            { label: 'Employee Engagement', href: '#' },
            { label: 'Stakeholder Sentiment', href: '#' },
            { label: 'Benchmarks', href: '#' },
          ],
        },
        {
          heading: 'Help and Education',
          links: [
            { label: 'Assessment FAQs', href: '#' },
            { label: 'Product FAQs', href: '#' },
            { label: 'Buyer Guides', href: '#' },
            { label: 'Coach Resources', href: '#' },
            { label: 'Platform Support', href: '#' },
          ],
        },
        {
          heading: 'Featured',
          variant: 'promo',
          links: [
            { label: 'Latest Report', href: '#' },
            { label: 'Upcoming Webinar', href: '#' },
            { label: 'Featured Case Study', href: '#' },
            { label: 'Subscribe', href: '#' },
          ],
        },
      ],
    },
  },
  { type: 'link', label: 'About', href: '#' },
]

const navButtons: (SimpleLink & { variant: 'text' | 'outline' | 'solid' })[] = [
  { label: 'Coach Login', href: '#', variant: 'solid' },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function navButtonClasses(variant: 'text' | 'outline' | 'solid') {
  switch (variant) {
    case 'solid':
      return 'bg-terracotta text-white px-5 py-2.5 rounded-full hover:bg-terracotta/90'
    case 'outline':
      return 'border border-terracotta text-terracotta px-5 py-2.5 rounded-full hover:bg-terracotta/10'
    case 'text':
    default:
      return 'text-gray-700 px-3 py-2.5 hover:text-terracotta'
  }
}

function menuHasPathname(menu: MegaMenu, pathname: string) {
  return menu.columns.some(
    (col) =>
      col.headingHref === pathname || (col.links?.some((link) => link.href === pathname) ?? false),
  )
}

function MegaColumnView({ column, onNavigate }: { column: MegaColumn; onNavigate: () => void }) {
  const isPromo = column.variant === 'promo'
  const hasLinks = (column.links?.length ?? 0) > 0

  return (
    <div className={isPromo ? 'bg-terracotta/5 border border-terracotta/10 rounded-xl p-5' : ''}>
      {hasLinks ? (
        <>
          <h4 className="text-sm font-semibold text-gray-900 font-Montserrat mb-3">{column.heading}</h4>
          <ul className="space-y-2">
            {column.links!.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block text-sm text-gray-600 hover:text-terracotta font-Montserrat transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={column.headingHref ?? '#'}
          onClick={onNavigate}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold font-Montserrat transition-colors ${
            isPromo ? 'text-terracotta' : 'text-gray-900 hover:text-terracotta'
          }`}
        >
          {column.heading}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [isFixed, setIsFixed] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setOpenMobileGroup(null)
  }, [pathname])

  useEffect(() => {
    function handleScroll() {
      setIsFixed(window.scrollY > 100)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (item: NavItem) =>
    item.type === 'link' ? item.href === pathname : menuHasPathname(item.menu, pathname)

  const activeMegaItem = navItems.find(
    (item): item is Extract<NavItem, { type: 'mega' }> =>
      item.type === 'mega' && item.label === openDropdown,
  )

  return (
    <>
      {isFixed && <div className="h-24" aria-hidden="true" />}
      <header
        ref={headerRef}
        className={`${isFixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4 transition-shadow duration-200 ${isFixed ? 'shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 font-MonaSans tracking-tight">
              <img className="w-[60px]" src="/images/zanga-logo.svg" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item)

                if (item.type === 'mega') {
                  const isOpen = openDropdown === item.label
                  return (
                    <button
                      key={item.label}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-Montserrat transition-colors ${
                        active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      <ChevronIcon open={isOpen} />
                    </button>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-Montserrat transition-colors ${
                      active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              {navButtons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={`text-xs font-semibold font-Montserrat transition-colors ${navButtonClasses(button.variant)}`}
                >
                  {button.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="lg:hidden text-gray-900 p-2"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden my-4 pt-2 border-t border-gray-200">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = isActive(item)

                  if (item.type === 'mega') {
                    const isOpen = openMobileGroup === item.label
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setOpenMobileGroup(isOpen ? null : item.label)}
                          className={`flex items-center justify-between w-full py-2 text-sm font-Montserrat transition-colors ${
                            active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          {item.label}
                          <ChevronIcon open={isOpen} />
                        </button>
                        {isOpen && (
                          <div className="pl-4 flex flex-col gap-5 pb-4">
                            {item.menu.columns.map((column) => (
                              <div key={column.heading}>
                                {column.links?.length ? (
                                  <>
                                    <p className="text-sm font-semibold text-gray-900 font-Montserrat mb-2">
                                      {column.heading}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                      {column.links.map((link) => (
                                        <Link
                                          key={link.label}
                                          href={link.href}
                                          onClick={() => setMenuOpen(false)}
                                          className="py-1 text-sm text-gray-600 hover:text-terracotta font-Montserrat transition-colors"
                                        >
                                          {link.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={column.headingHref ?? '#'}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold text-gray-900 hover:text-terracotta font-Montserrat transition-colors"
                                  >
                                    {column.heading}
                                  </Link>
                                )}
                              </div>
                            ))}
                            {item.menu.extraLinks && (
                              <div>
                                <p className="text-sm font-semibold text-gray-900 font-Montserrat mb-2">
                                  {item.menu.extraLinks.heading}
                                </p>
                                <div className="flex flex-col gap-1">
                                  {item.menu.extraLinks.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      onClick={() => setMenuOpen(false)}
                                      className="py-1 text-sm text-gray-600 hover:text-terracotta font-Montserrat transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-2 text-sm font-Montserrat transition-colors ${
                        active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="flex flex-col gap-2 mt-3">
                  {navButtons.map((button) => (
                    <Link
                      key={button.label}
                      href={button.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm font-semibold font-Montserrat text-center transition-colors ${navButtonClasses(button.variant)}`}
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>

        {activeMegaItem && (
          <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div
                className="grid gap-10"
                style={{ gridTemplateColumns: `repeat(${activeMegaItem.menu.columns.length}, minmax(0, 1fr))` }}
              >
                {activeMegaItem.menu.columns.map((column) => (
                  <MegaColumnView
                    key={column.heading}
                    column={column}
                    onNavigate={() => setOpenDropdown(null)}
                  />
                ))}
              </div>
              {activeMegaItem.menu.extraLinks && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 font-Montserrat mb-3">
                    {activeMegaItem.menu.extraLinks.heading}
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {activeMegaItem.menu.extraLinks.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        className="text-sm text-gray-600 hover:text-terracotta font-Montserrat transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
