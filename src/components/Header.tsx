'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = { label: string; href: string }
type NavItem = { label: string; href?: string; dropdown?: NavLink[] }

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Solutions',
    dropdown: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
    ],
  },
  { label: 'Coaches & Partners', href: '/coaches-partners' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Resources', href: '/resources' },
      { label: 'Insights', href: '/insights' },
      { label: 'Big Data Report', href: '/big-data-report' },
    ],
  },
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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

  const isActive = (item: NavItem) =>
    item.href === pathname || (item.dropdown?.some((child) => child.href === pathname) ?? false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 font-MonaSans tracking-tight">
           <img className="w-[60px]" src="/images/zanga-logo.svg"/>
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item)

              if (item.dropdown) {
                const isOpen = openDropdown === item.label
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-Montserrat transition-colors ${
                        active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      <ChevronIcon open={isOpen} />
                    </button>
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                        {item.dropdown.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm font-Montserrat transition-colors ${
                              pathname === child.href
                                ? 'text-terracotta font-semibold'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href as string}
                  className={`px-3 py-2 text-sm font-Montserrat transition-colors ${
                    active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-terracotta text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-terracotta/90 transition-colors font-Montserrat"
            >
              Book Demo
            </Link>
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
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item)

                if (item.dropdown) {
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
                        <div className="pl-4 flex flex-col gap-1 pb-2">
                          {item.dropdown.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className={`py-1.5 text-sm font-Montserrat transition-colors ${
                                pathname === child.href
                                  ? 'text-terracotta font-semibold'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href as string}
                    onClick={() => setMenuOpen(false)}
                    className={`py-2 text-sm font-Montserrat transition-colors ${
                      active ? 'text-terracotta font-semibold' : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-terracotta text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-3 hover:bg-terracotta/90 transition-colors font-Montserrat"
              >
                Book Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
