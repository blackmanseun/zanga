import React from 'react'
import Link from 'next/link'
import OpenModalButton from '@/components/modal/OpenModalButton'
import type {ModalKey} from '@/components/modal/ModalProvider'

// Drops hover/transition styles and greys the action out.
const disabledClasses = (className: string) =>
    className
        .split(/\s+/)
        .filter((c) => c && !/^(hover:|focus:|transition|duration-)/.test(c))
        .concat('opacity-50', 'cursor-not-allowed')
        .join(' ')

// Renders a card action as a modal trigger or a link, keeping the same look.
// With neither a modal nor a real href it shows as disabled ("Coming soon") until the page exists;
// `wholeCard` keeps a whole-card link looking normal instead of greying the entire card.
export default function CardAction({href, modal, className, style, ariaLabel, wholeCard, children}: {
    href?: string
    modal?: ModalKey
    className: string
    style?: React.CSSProperties
    ariaLabel?: string
    wholeCard?: boolean
    children: React.ReactNode
}) {
    if (modal) {
        return (
            <OpenModalButton modal={modal} aria-label={ariaLabel} className={className} style={style}>
                {children}
            </OpenModalButton>
        )
    }
    if (!href || href === '#') {
        return (
            <span
                aria-disabled="true"
                title="Coming soon"
                aria-label={ariaLabel}
                className={wholeCard ? className.replace(/\bhover:\S+/g, '') : disabledClasses(className)}
                style={style}
            >
                {children}
            </span>
        )
    }
    return (
        <Link href={href} aria-label={ariaLabel} className={className} style={style}>
            {children}
        </Link>
    )
}
