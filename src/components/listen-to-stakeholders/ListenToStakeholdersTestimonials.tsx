import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

// Placeholder testimonials written for this page's context. Replace with real client quotes before launch.
const testimonials: Testimonial[] = [
    {
        quote:
            'Grievances from the communities around our sites used to arrive through a dozen different people. Now every concern is logged, assigned and followed up, and community leaders can see that we respond.',
        name: 'Ifeoma Chukwu',
        location: 'Head of Community Relations · Port Harcourt',
    },
    {
        quote:
            'Hearing directly from our outgrowers showed us that late payments, not prices, were the real reason farmers were selling elsewhere. We fixed the process within a season.',
        name: 'Peter Mwansa',
        location: 'Supply Chain Director · Lusaka',
    },
    {
        quote:
            'Our ESG report now shows what stakeholders raised, how we responded and how long it took. That evidence trail has made our engagement far more credible with investors.',
        name: 'Akosua Boateng',
        location: 'Sustainability Manager · Accra',
    },
]

export default function ListenToStakeholdersTestimonials() {
    return (
        <HomeTestimonials
            testimonials={testimonials}
            heading="What better stakeholder"
            highlight="listening looks like"
        />
    )
}
