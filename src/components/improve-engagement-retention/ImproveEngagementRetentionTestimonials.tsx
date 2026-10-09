import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'Their adept facilitation of team and group processes has notably enhanced engagement and productivity across our teams.',
        name: 'Kizito Nsarhaza, PhD',
        location: 'Strategic Adviser, Management & Transformation, Office of the Regional Director, World Health Organization – Regional Office for Africa',
        initials: 'KN',
    },
    {
        quote:
            'Their services have supported personal effectiveness, effective communication, team engagement, management and leadership development and strategic alignment. The positive impact on our performance and working relationships internally and externally is evident.',
        name: 'Mwamba Peni',
        location: 'Interim Director General, Emoluments Commission of Zambia',
    },
]

export default function ImproveEngagementRetentionTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
