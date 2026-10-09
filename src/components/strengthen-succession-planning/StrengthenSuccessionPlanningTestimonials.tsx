import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'The succession readiness HR analytic report was spot on. This was a major deliverable for us.',
        name: 'HR Team',
        location: 'FQM Kansanshi Mining Plc',
        initials: 'FK',
    },
    {
        quote:
            'The HR analytics (Heat Map) provided a visual representation of our leadership pipeline, highlighting talent gaps and succession readiness — instrumental in shaping our succession planning and leadership development strategies.',
        name: 'Chileshe Chelemu Chisambo',
        location: 'Human Resources Operations Manager, Sanlam Life Insurance Zambia Limited',
        initials: 'CC',
    },
]

export default function StrengthenSuccessionPlanningTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
