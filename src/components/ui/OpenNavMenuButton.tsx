'use client'

import React from 'react'
import { openNavMenu } from '@/components/Header'

// Lets server components open a navbar dropdown without becoming client components themselves.
export default function OpenNavMenuButton({ menu, className, style, children }: {
  /** The navbar item's label, e.g. 'Products'. */
  menu: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <button type="button" onClick={() => openNavMenu(menu)} aria-haspopup="menu" className={className} style={style}>
      {children}
    </button>
  )
}
