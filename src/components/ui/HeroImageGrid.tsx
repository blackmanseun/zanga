import React from 'react'

export default function HeroImageGrid() {
    return (
        <div className="hidden md:flex justify-end gap-10 overflow-hidden">
            <div className="space-y-8">
                <div
                    className="hidden md:block min-h-[180px] w-[250px] rounded-2xl bg-[url('https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/headshot/2-png')] object-[20%] bg-cover"/>
                <div
                    className="min-h-[280px] w-[250px] rounded-2xl bg-[url('https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/headshot/3')] bg-top bg-cover relative">
                    <div className="inset-0 bg-slate-800 absolute opacity-30 rounded-2xl"/>
                </div>
            </div>
            <div className="space-y-8 hidden md:block">
                <div
                    className="min-h-[220px] w-[250px] rounded-2xl bg-[url('https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/headshot/5')] object-[30%] bg-cover"/>
                <div className="min-h-[100px] w-[250px] rounded-2xl bg-[url('https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/1')] bg-top bg-cover"/>
                <div className="min-h-[100px] w-[250px] rounded-2xl bg-[url('https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/21')] bg-top bg-cover"/>
            </div>
        </div>
    )
}
