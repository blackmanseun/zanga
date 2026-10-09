import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'Their services have supported personal effectiveness, effective communication, team engagement, management and leadership development and strategic alignment. The positive impact on our performance and working relationships internally and externally is evident.',
        name: 'Mwamba Peni',
        location: 'Interim Director General, Emoluments Commission of Zambia',
    },
    {
        quote:
            'The Zanga Heat Map with Succession Readiness and Nine Box Grid together delivered ... a simple visual segmentation of performance and potential that made strengths, gaps, and development priorities easy to see and explain.',
        name: 'HR Team',
        location: 'FQM Kansanshi Mining Plc',
        initials: 'FK',
    },
    {
        quote:
            'We have found the tools to be informative, reliable, and eye-opening for our client managers and leaders. They have become more receptive to making a change in their leadership practice as a result of the increased awareness that the reports from the Zanga tools have created.',
        name: 'Modupe Taylor-Pearce, PhD',
        location: 'CEO, BCA Leadership',
        initials: 'MT',
    },
]

export default function BuildHighPerformingTeamsTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
