import React from 'react'
import EnterprisesParallaxVinyl from '@/components/enterprises/EnterprisesParallaxVinyl'

export default function EnterprisesChallengeRHSDraft() {
    return (
        <div className="hidden lg:block absolute -top-10 right-0">
            <EnterprisesParallaxVinyl
                leftImages={['/images/13.jpg']}
                rightImages={['/images/6.jpg', '/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/9.jpg']}
            />
        </div>
    )
}
