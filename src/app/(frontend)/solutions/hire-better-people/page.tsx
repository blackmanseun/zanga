import React from 'react'
import Hero from '@/components/solutions/Hero'
import FeaturesBenefits from '@/components/solutions/FeaturesBenefits'
import Methodology from '@/components/solutions/Methodology'
import Outcomes from '@/components/solutions/Outcomes'
import UseCases from '@/components/solutions/UseCases'
import Cta from '@/components/solutions/Cta'
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";

export default function HireBetterPeoplePage() {
    return (
        <>
            <Hero/>
            <FeaturesBenefits/>
            <Methodology/>
            <Outcomes/>
            <UseCases/>
            <Testimonials/>
            <Faq/>
            <Cta/>
        </>
    )
}
