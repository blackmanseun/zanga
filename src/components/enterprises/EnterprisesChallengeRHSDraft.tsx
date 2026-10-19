import React from 'react'
import EnterprisesParallaxVinyl from '@/components/enterprises/EnterprisesParallaxVinyl'

export default function EnterprisesChallengeRHSDraft() {
    return (
        <div className="hidden lg:block absolute -top-10 right-0">
            <EnterprisesParallaxVinyl
                leftImages={['https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/13']}
                rightImages={['https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/6', 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/12', 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/13', 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/14', 'https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/9']}
            />
        </div>
    )
}
