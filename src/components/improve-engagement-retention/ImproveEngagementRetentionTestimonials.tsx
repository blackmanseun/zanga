import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'Our annual survey told us engagement was fine. Pulse showed us which teams were quietly losing trust in their managers, and we were able to act before it showed up in resignations.',
        name: 'Halima Sule',
        location: 'Head of People · Abuja',
    },
    {
        quote:
            'The results gave each manager a clear view of their own team. Conversations with employees became more specific and far more useful than a company-wide score ever was.',
        name: 'Samuel Owusu',
        location: 'Operations Director · Kumasi',
    },
    {
        quote:
            'Because employees could see we acted on their feedback, participation in our next pulse went up, and so did trust in leadership.',
        name: 'Thandiwe Dlamini',
        location: 'Employee Experience Lead · Cape Town',
    },
]

export default function ImproveEngagementRetentionTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
