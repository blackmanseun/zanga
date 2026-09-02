import React from 'react'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import SolutionsFeaturesBenefits from '@/components/solutions/SolutionsFeaturesBenefits'
import SolutionsMethodology from '@/components/solutions/SolutionsMethodology'
import SolutionsOutcomes from '@/components/solutions/SolutionsOutcomes'
import SolutionsUseCases from '@/components/solutions/SolutionsUseCases'
import SolutionsCta from '@/components/solutions/SolutionsCta'
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFaq from "@/components/home/HomeFaq";

export default function HireBetterPeoplePage() {
    return (
        <>
            <SolutionsHero/>
            <SolutionsFeaturesBenefits/>
            <SolutionsMethodology/>
            <SolutionsOutcomes/>
            <SolutionsUseCases/>
            <HomeTestimonials/>
            <HomeFaq/>
            <SolutionsCta/>
        </>
    )
}
