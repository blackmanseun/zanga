'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useModal, type ModalKey } from '@/components/modal/ModalProvider'

type SimpleLink = { label: string; href: string; hidden?: boolean }

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
  | { type: 'link'; label: string; href: string; hidden?: boolean }
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
            { label: 'Hire Better People', href: '/solutions/hire-better-people' },
            { label: 'Develop Stronger Leaders', href: '/solutions/develop-stronger-leaders' },
            { label: 'Build High-Performing Teams', href: '/solutions/build-high-performing-teams' },
            { label: 'Improve Engagement & Retention', href: '/solutions/improve-engagement-retention' },
            { label: 'Strengthen Succession Planning', href: '/solutions/strengthen-succession-planning' },
            { label: 'Listen to Stakeholders', href: '/solutions/listen-to-stakeholders' },
            { label: 'Make Better Investment & Lending Decisions', href: '/solutions/make-better-investment-lending-decisions' },
          ],
        },
        {
          heading: 'By Organisation Type',
          links: [
            { label: 'Enterprises', href: '/solutions/enterprises' },
            { label: 'SMEs & Growth Businesses', href: '/solutions/sme' },
            { label: 'Financial Institutions', href: '/solutions/financial-institutions' },
            { label: 'Development Organisations', href: '/solutions/development-organisations' },
            { label: 'Public-Sector Institutions', href: '/solutions/public-sector-institutions' },
            { label: 'Coaches & Consultants', href: '/solutions/coaches-consultants' },
            { label: 'Investors & Fund Managers', href: '/solutions/investors-fund-managers' },
          ],
        },
        {
          heading: 'Start Here',
          variant: 'promo',
          links: [
            { label: 'Not sure which Zanga tool you need?', href: '#' },
            { label: 'Discover the wider intelligence ecosystem', href: '#' },
            { label: 'Explore our latest research', href: '#' },
            { label: 'Talk to us about your organisation', href: '/contact', hidden: true },
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
          headingHref: '/products/pulse-by-zanga',
          links: [
            { label: 'Employee engagement', href: '/products/pulse-by-zanga#employee-engagement' },
            { label: 'Culture & values', href: '/products/pulse-by-zanga#culture-values' },
            { label: 'Retention intelligence', href: '/products/pulse-by-zanga#retention-intelligence' },
            { label: 'Performance sentiment', href: '/products/pulse-by-zanga#performance-sentiment' },
            { label: 'Pulse surveys', href: '/products/pulse-by-zanga#pulse-surveys' },
            { label: 'Workforce dashboards', href: '/products/pulse-by-zanga#workforce-dashboards' },
          ],
        },
        {
          heading: 'Fit by Zanga',
          headingHref: '/products/fit-by-zanga',
          links: [
            { label: 'Recruitment psychometrics', href: '/products/fit-by-zanga#recruitment-psychometrics' },
            { label: 'Candidate fit', href: '/products/fit-by-zanga#candidate-fit' },
            { label: 'Leadership potential', href: '/products/fit-by-zanga#leadership-potential' },
            { label: 'Executive assessment', href: '/products/fit-by-zanga#executive-assessment' },
            { label: 'Role fit', href: '/products/fit-by-zanga#role-fit' },
            { label: 'Hiring analytics', href: '/products/fit-by-zanga#hiring-analytics' },
          ],
        },
        {
          heading: 'Voice by Zanga',
          headingHref: '/products/voice-by-zanga',
          links: [
            { label: 'Customer feedback', href: '/products/voice-by-zanga#customer-feedback' },
            { label: 'Supplier feedback', href: '/products/voice-by-zanga#supplier-feedback' },
            { label: 'Farmer & community voice', href: '/products/voice-by-zanga#farmer-community-voice' },
            { label: 'Grievance management', href: '/products/voice-by-zanga#how-it-works' },
            { label: 'Case tracking & escalation', href: '/products/voice-by-zanga#case-tracking-escalation' },
            { label: 'ESG evidence', href: '/products/voice-by-zanga#esg-evidence' },
          ],
        },
        {
          heading: 'Diligence by Zanga',
          headingHref: '/products/diligence-by-zanga',
          links: [
            { label: 'Founder assessment', href: '/products/diligence-by-zanga#founder-assessment' },
            { label: 'Leadership-risk intelligence', href: '/products/diligence-by-zanga#leadership-risk-intelligence' },
            { label: 'Borrower assessment', href: '/products/diligence-by-zanga#borrower-assessment' },
            { label: 'Investment due diligence', href: '/products/diligence-by-zanga#investment-due-diligence' },
            { label: 'Portfolio monitoring', href: '/products/diligence-by-zanga#portfolio-monitoring' },
            { label: 'Custom intelligence', href: '/products/diligence-by-zanga#custom-intelligence' },
          ],
        },
      ],
    },
  },
  // The Assessments dropdown (Leadership, Psychometric, Workforce, Explore) is parked in git history
  // while Leadership Assessments is the only one live — the nav item links straight to it for now.
  { type: 'link', label: 'Assessments', href: '/assessments/leadership-assessments' },
  { type: 'link', label: 'Pricing', href: '#' },
  // The Partners dropdown is parked in git history while Become a Partner is the only live page.
  { type: 'link', label: 'Partners', href: '/partners/become-a-partner' },
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
            { label: 'FAQs', href: '#' },
            { label: 'Coach Resources', href: '#' },
          ],
        },
        {
          heading: 'Featured',
          variant: 'promo',
          links: [
            { label: 'Latest Report', href: '#' },
            { label: 'Upcoming Webinar', href: '#' },
            { label: 'Featured Case Study', href: '#' },
          ],
        },
      ],
    },
  },
  { type: 'link', label: 'About', href: '/about', hidden: true },
]

type NavButton = SimpleLink & {
  variant: 'text' | 'outline' | 'solid'
  /** Opens a modal instead of navigating — used while the destination doesn't exist yet. */
  modal?: ModalKey
}

const allNavButtons: NavButton[] = [
  { label: 'Business Partner Login', href: '#', variant: 'solid', modal: 'partner-login-unavailable' },
]

/** Links still on '#' have no page yet, so they're hidden until one exists. */
const hasPage = (href?: string) => !!href && href !== '#'

const visibleNavItems: NavItem[] = navItems.flatMap((item): NavItem[] => {
  if (item.type === 'link') return !item.hidden && hasPage(item.href) ? [item] : []

  const columns = item.menu.columns.flatMap((column): MegaColumn[] => {
    const links = column.links?.filter((link) => !link.hidden && hasPage(link.href))
    return links?.length || hasPage(column.headingHref) ? [{ ...column, links }] : []
  })
  return columns.length ? [{ ...item, menu: { ...item.menu, columns } }] : []
})

const navButtons = allNavButtons.filter((button) => button.modal || hasPage(button.href))

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
          {column.headingHref ? (
            <Link
              href={column.headingHref}
              onClick={onNavigate}
              className="inline-block text-sm font-semibold text-gray-900 hover:text-terracotta font-Montserrat mb-3 transition-colors"
            >
              {column.heading}
            </Link>
          ) : (
            <h4 className="text-sm font-semibold text-gray-900 font-Montserrat mb-3">{column.heading}</h4>
          )}
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

const OPEN_NAV_MENU_EVENT = 'zanga:open-nav-menu'

/** Opens a header mega menu (e.g. 'Solutions') from elsewhere on the page. */
export function openNavMenu(label: string) {
  window.dispatchEvent(new CustomEvent<string>(OPEN_NAV_MENU_EVENT, { detail: label }))
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [isFixed, setIsFixed] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const { openModal } = useModal()

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
    function handleOpenNavMenu(event: Event) {
      const label = (event as CustomEvent<string>).detail
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setOpenDropdown(label)
      } else {
        setMenuOpen(true)
        setOpenMobileGroup(label)
      }
    }
    window.addEventListener(OPEN_NAV_MENU_EVENT, handleOpenNavMenu)
    return () => window.removeEventListener(OPEN_NAV_MENU_EVENT, handleOpenNavMenu)
  }, [])

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

  const activeMegaItem = visibleNavItems.find(
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 font-MonaSans tracking-tight">
              <img className="w-[60px]" src="/images/zanga-logo.svg" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {visibleNavItems.map((item) => {
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
              {navButtons.map((button) => {
                const className = `text-xs font-semibold font-Montserrat transition-colors ${navButtonClasses(button.variant)}`
                return button.modal ? (
                  <button key={button.label} type="button" onClick={() => openModal(button.modal!)} className={className}>
                    {button.label}
                  </button>
                ) : (
                  <Link key={button.label} href={button.href} className={className}>
                    {button.label}
                  </Link>
                )
              })}
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
                {visibleNavItems.map((item) => {
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
                                    {column.headingHref ? (
                                      <Link
                                        href={column.headingHref}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-sm font-semibold text-gray-900 hover:text-terracotta font-Montserrat mb-2 transition-colors"
                                      >
                                        {column.heading}
                                      </Link>
                                    ) : (
                                      <p className="text-sm font-semibold text-gray-900 font-Montserrat mb-2">
                                        {column.heading}
                                      </p>
                                    )}
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
                  {navButtons.map((button) => {
                    const className = `text-sm font-semibold font-Montserrat text-center transition-colors ${navButtonClasses(button.variant)}`
                    return button.modal ? (
                      <button
                        key={button.label}
                        type="button"
                        onClick={() => {
                          setMenuOpen(false)
                          openModal(button.modal!)
                        }}
                        className={className}
                      >
                        {button.label}
                      </button>
                    ) : (
                      <Link key={button.label} href={button.href} onClick={() => setMenuOpen(false)} className={className}>
                        {button.label}
                      </Link>
                    )
                  })}
                </div>
              </nav>
            </div>
          )}
        </div>

        {activeMegaItem && (
          <div className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 py-8">
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
