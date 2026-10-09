import React from 'react'
import HomeTestimonials, {type Testimonial} from '@/components/home/HomeTestimonials'

const testimonials: Testimonial[] = [
    {
        quote:
            'We have found the tools to be informative, reliable, and eye-opening for our client managers and leaders. They have become more receptive to making a change in their leadership practice as a result of the increased awareness that the reports from the Zanga tools have created.',
        name: 'Modupe Taylor-Pearce, PhD',
        location: 'CEO, BCA Leadership',
        initials: 'MT',
    },
]

export default function SolutionsTestimonials() {
    return <HomeTestimonials testimonials={testimonials}/>
}
