import React from 'react'
import Hero from '@/components/home/Hero'
import ClientLogoBar from '@/components/home/ClientLogoBar'
import WhatZangaDoes from '@/components/home/WhatZangaDoes'
import SolutionCards from '@/components/home/SolutionCards'
import StakeholderIntelligence from '@/components/home/StakeholderIntelligence'
import WhiteLabel from '@/components/home/WhiteLabel'
import Testimonials from '@/components/home/Testimonials'
import Stats from '@/components/home/Stats'
import Solutions from '@/components/home/Solutions'
import Industries from '@/components/home/Industries'
import WhyZanga from '@/components/home/WhyZanga'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogoBar />
      <WhatZangaDoes />
      <SolutionCards />
      <StakeholderIntelligence />
      <WhiteLabel />
      <Testimonials />
    </>
  )
}
