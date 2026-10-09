import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'The impact of their programs and expertise has been profound ... Of particular note is their Women in Leadership program, which has empowered our female leaders with the skills, confidence, and knowledge to excel in their roles.',
        name: 'Kizito Nsarhaza, PhD',
        location: 'Strategic Adviser, Management & Transformation, Office of the Regional Director, World Health Organization – Regional Office for Africa',
        initials: 'KN',
    },
    {
        quote:
            'What I value the most about the Zanga African Metrics assessment is the contextual grounded-ness and the valuing of the collective that aligns not just with the African value-systems of honouring the collective, but is relevant and applicable in any context that seeks to tap into collective wisdom.',
        name: 'Dr Dumi Magadlela',
        location: 'Executive & Team Coach, Certified Zanga Metrics Professional',
        initials: 'DM',
    },
]

export default function ListenToStakeholdersTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
