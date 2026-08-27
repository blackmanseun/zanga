import React from 'react'

export default function HeroImageGrid() {
  return (
    <div className="hidden md:flex justify-end gap-10 overflow-hidden">
      <div className="space-y-8">
        <div className="hidden md:block min-h-[180px] w-[250px] rounded-2xl bg-[url('/images/headshot/6.jpg')] object-[20%] bg-cover" />
        <div className="min-h-[280px] w-[250px] rounded-2xl bg-[url('/images/headshot/3.jpg')] bg-top bg-cover relative">
          <div className="inset-0 bg-slate-800 absolute opacity-30 rounded-2xl" />
        </div>
        <div className="min-h-[250px] w-[250px] rounded-2xl bg-[url('/images/headshot/8.jpg')] bg-top bg-cover relative">
          <div className="inset-0 bg-slate-800 absolute opacity-30 rounded-2xl" />
        </div>
      </div>
      <div className="space-y-8 hidden md:block">
        <div className="min-h-[220px] w-[250px] rounded-2xl bg-[url('/images/headshot/5.jpg')] bg-center bg-cover" />
        <div className="min-h-[100px] w-[250px] rounded-2xl bg-[url('/images/20.jpg')] bg-center bg-cover" />
        <div className="min-h-[100px] w-[250px] rounded-2xl bg-[url('/images/21.jpg')] bg-top bg-cover" />
        <div className="min-h-[260px] w-[250px] rounded-2xl bg-[url('/images/headshot/4.png')] bg-top bg-cover" />
      </div>
    </div>
  )
}
