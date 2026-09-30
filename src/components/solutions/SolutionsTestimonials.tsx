import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'Our interviews kept rewarding the most confident candidates. The Zanga reports gave our panel a structured view of behaviour and role fit, so we now go into final rounds knowing exactly what to explore with each person.',
        name: 'Adaeze Nwosu',
        location: 'Head of Talent Acquisition · Lagos',
    },
    {
        quote:
            'As a growing business, we could not afford a wrong hire. Assessing candidates against what the role actually required helped us choose people who have stayed and grown with us.',
        name: 'Tobi Adewale',
        location: 'Founder & CEO · Kigali',
    },
    {
        quote:
            'For senior appointments, the leadership assessment added a level of evidence our board had been missing. We made the final decision with far more confidence than a CV and interviews alone could give us.',
        name: 'Emmanuel Okafor',
        location: 'Managing Director · Abuja',
    },
]

export default function SolutionsTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
