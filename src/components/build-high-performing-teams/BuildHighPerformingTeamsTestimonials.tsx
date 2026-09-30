import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'Our leadership team had worked together for years without really understanding how differently we each make decisions. The team assessment gave us a shared language, and our meetings are noticeably more productive.',
        name: 'Kofi Boateng',
        location: 'Managing Director · Accra',
    },
    {
        quote:
            'After merging two departments, tension kept surfacing in small ways. Seeing our working styles side by side helped us agree how we would communicate and make decisions together.',
        name: 'Nomvula Khumalo',
        location: 'Head of Operations · Johannesburg',
    },
    {
        quote:
            'We used the insight at our offsite and it changed the conversation. Instead of debating personalities, we talked about patterns, and left with clear agreements on how the team will work.',
        name: 'Grace Mwangi',
        location: 'HR Business Partner · Nairobi',
    },
]

export default function BuildHighPerformingTeamsTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
