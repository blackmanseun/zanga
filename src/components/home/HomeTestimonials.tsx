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
      'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    name: 'Jane Cooper',
    location: 'Los Angeles, CA',
    avatar: '/images/headshot/3.jpg',
  },
  {
    quote:
      'The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold.',
    name: 'Robert Fox',
    location: 'New York City, NY',
    avatar: '/images/headshot/6.jpg',
  },
  {
    quote:
      'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.',
    name: 'Leslie Alexander',
    location: 'Buffalo, NJ',
    avatar: '/images/headshot/7.jpg',
  },
  {
    quote:
      'Am rejoiced no perceive prospect quitting mistress. Bringing yet promise nothing did mrs. Sending oh no you highest boy parties.',
    name: 'Courtney Henry',
    location: 'Chicago, IL',
    avatar: '/images/headshot/1.jpg',
  },
  {
    quote:
      'Household in the affronting incommode so an. Sight house has never for.',
    name: 'Guy Hawkins',
    location: 'Austin, TX',
    avatar: '/images/headshot/8.jpg',
  },
  {
    quote:
      'Ye on properly handsome returned throwing am no whatever. In music match if young.',
    name: 'Darlene Robertson',
    location: 'Seattle, WA',
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
