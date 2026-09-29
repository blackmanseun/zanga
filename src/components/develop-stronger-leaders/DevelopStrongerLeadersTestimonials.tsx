import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'The training emphasised the importance of emotional intelligence for leaders. Being self-aware, understanding one’s personality type, and leveraging it effectively to collaborate with individuals with different personalities is crucial.',
        name: 'Acting Head of Human Resources',
        location: 'Ecobank Zambia',
        initials: 'EZ',
    },
    {
        quote:
            'The workplace competency assessment has helped me to identify areas that I need to work on as a leader. The training opened up new areas for me, such as building my resilience as a leader and coaching as an effective means of leading my team.',
        name: 'Mphangela Nkonge',
        location: 'Founder & CEO (Standard Chartered Women in Technology Incubator participant)',
    },
    {
        quote:
            'When I deployed Zanga tools in a training session, a number of the participants were surprised about how their cultural and religious beliefs have influenced how they lead. For the first time, I could give technical backing to this phenomenon, which made it difficult to dismiss.',
        name: 'Mulalo Rambau',
        location: 'Certified Zanga Coach',
    },
]

export default function DevelopStrongerLeadersTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
