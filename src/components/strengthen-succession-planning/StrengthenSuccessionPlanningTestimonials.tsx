import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'Our succession plan used to be a list of names. Zanga showed us who was genuinely ready now and who needed another two years, and that changed how we prepared for our most critical roles.',
        name: 'Bola Adebayo',
        location: 'Group Head of Talent · Lagos',
    },
    {
        quote:
            'The assessment surfaced two high-potential managers our talent reviews had overlooked. Both are now on accelerated development plans for senior roles.',
        name: 'Wanjiru Kamau',
        location: 'HR Business Partner · Nairobi',
    },
    {
        quote:
            'For the first time, our board discussed succession with real evidence in front of them rather than reputation and tenure. The conversation was far more balanced.',
        name: 'Yaw Asante',
        location: 'Chief Executive Officer · Accra',
    },
]

export default function StrengthenSuccessionPlanningTestimonials() {
    return (
        <HomeTestimonials
            testimonials={testimonials}
            heading="What stronger succession"
            highlight="planning looks like"
        />
    )
}
