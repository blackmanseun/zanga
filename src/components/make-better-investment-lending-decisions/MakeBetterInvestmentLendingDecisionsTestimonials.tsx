import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'For founder-led SMEs, the numbers only tell half the story. The leadership insight gave our credit committee a structured view of the person we were really lending to.',
        name: 'Tunde Adewale',
        location: 'Head of SME Banking · Lagos',
    },
    {
        quote:
            'Our diligence on market and financials was always rigorous, but management quality came down to gut feel. Now it sits in the investment memo alongside everything else.',
        name: 'Njeri Odhiambo',
        location: 'Investment Director · Nairobi',
    },
    {
        quote:
            'After investment, the assessment showed exactly where one portfolio company was over-reliant on its founder. A COO appointment and coaching plan followed within six months.',
        name: 'Kwabena Owusu',
        location: 'Portfolio Manager · Accra',
    },
]

export default function MakeBetterInvestmentLendingDecisionsTestimonials() {
    return (
        <HomeTestimonials
            testimonials={testimonials}
            heading="What better investment and"
            highlight="lending decisions look like"
        />
    )
}
