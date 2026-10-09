import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'Zanga has elevated my practice. Becoming a Zanga Certified Coach has been a transformative experience. The Zanga African Metrics tool, anchored in the high-context culture framework, has truly resonated with me. The tool has elevated my practice by enabling me to provide culturally resonant insights that guide my clients toward authentic, sustainable growth.',
        name: 'Jedidah Karia',
        location: 'Certified Zanga Coach',
    },
    {
        quote:
            'What I value the most about the Zanga African Metrics assessment is the contextual grounded-ness and the valuing of the collective that aligns not just with the African value-systems of honouring the collective, but is relevant and applicable in any context that seeks to tap into collective wisdom.',
        name: 'Dr Dumi Magadlela',
        location: 'Executive and Team Coach, Certified Zanga Metrics Professional',
        initials: 'DM',
    },
    {
        quote:
            'The Zanga African Metrics Leadership Journey assessment truly delivers on its promise of providing individuals with an understanding of their preferred work styles which takes into consideration personality, behaviour and culture. I love that my clients are able to deepen their self-awareness and are equipped with practical steps to build and strengthen professional competencies whilst navigating either and/or both high-context and low-context cultures.',
        name: 'Adeyanju Olomola',
        location: 'Certified Zanga Coach',
    },
    {
        quote:
            'When I deployed this tool in a training session a number of the participants were surprised about how their cultural and religious beliefs have influenced how they lead. For the first time I could give technical backing to this phenomenon which made it difficult to dismiss.',
        name: 'Mulalo Rambau',
        location: 'Certified Zanga Coach',
    },
]

export default function CoachesConsultantsTestimonials() {
    return (
        <HomeTestimonials
            testimonials={testimonials}
            heading="Trusted by coaches"
            highlight="& practitioners"
        />
    )
}
