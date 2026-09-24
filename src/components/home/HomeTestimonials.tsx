'use client'

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Testimonial = {
  quote: string
  name: string
  location: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The Zanga reports gave our panel a far richer picture than interviews alone. We now go into final rounds knowing exactly what to explore with each candidate.',
    name: 'Adaeze Nwosu',
    location: 'Head of Talent Acquisition · Lagos',
    avatar: '/images/headshot/3.jpg',
  },
  {
    quote:
      'The 360 feedback was the first time several of our senior leaders heard how they were really experienced by their teams. It changed the coaching conversations completely.',
    name: 'Kwame Mensah',
    location: 'Group HR Director · Accra',
    avatar: '/images/headshot/6.jpg',
  },
  {
    quote:
      'What sets Zanga apart is the cultural context. The insights reflect how leadership actually works in our organisation, not a model imported from elsewhere.',
    name: 'Amina Yusuf',
    location: 'Chief People Officer · Nairobi',
    avatar: '/images/headshot/7.jpg',
  },
  {
    quote:
      'We used to send every new manager on the same programme. Now each development plan starts from their assessment results, and the difference in engagement is clear.',
    name: 'Thandiwe Dlamini',
    location: 'Learning & Development Lead · Johannesburg',
    avatar: '/images/headshot/1.jpg',
  },
  {
    quote:
      'Zanga helped us spot high-potential people we might otherwise have overlooked. Our succession pipeline is stronger and far better prepared for promotion.',
    name: 'Chipo Mwale',
    location: 'Talent Management Manager · Lusaka',
    avatar: '/images/headshot/8.jpg',
  },
  {
    quote:
      'For senior appointments, the leadership assessment added a level of evidence our board had been missing. We made the final decision with real confidence.',
    name: 'Emmanuel Okafor',
    location: 'Managing Director · Abuja',
    avatar: '/images/headshot/2.jpg',
  },
]

export default function HomeTestimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
           <span className="text-olive text-sm uppercase tracking-widest font-Montserrat font-semibold">
           Testimonials
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold mt-3 mb-6 font-MonaSans leading-tight">
            <span className="text-gray-700">What better talent</span><br/>
            <span className="text-olive">decisions look like</span>
          </h2>
        </div>

       <div>
         <Swiper
             modules={[Autoplay, Pagination]}
             slidesPerView={1}
             spaceBetween={24}
             loop
             autoplay={{ delay: 3500, disableOnInteraction: false }}
             pagination={{ clickable: true }}
             breakpoints={{
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 3 },
             }}
             className="!pb-14 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-terracotta"
         >
           {testimonials.map((testimonial) => (
               <SwiperSlide key={testimonial.name} className="!h-auto pb-2">
                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col">
                   <div className="flex gap-1 mb-5">
                     {Array.from({ length: 5 }).map((_, i) => (
                         <AiFillStar key={i} className="text-amber-400 w-4 h-4" />
                     ))}
                   </div>
                   <p className="text-gray-500 font-Montserrat leading-relaxed mb-8 flex-1">
                     {testimonial.quote}
                   </p>
                   <div className="flex items-center gap-3">
                     <img
                         src={testimonial.avatar}
                         alt={testimonial.name}
                         className="w-11 h-11 rounded-full object-cover object-top shrink-0"
                     />
                     <div>
                       <p className="text-sm font-bold text-gray-900 font-Montserrat">{testimonial.name}</p>
                       <p className="text-sm text-gray-400 font-Montserrat">{testimonial.location}</p>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
           ))}
         </Swiper>
       </div>
      </div>
    </section>
  )
}
