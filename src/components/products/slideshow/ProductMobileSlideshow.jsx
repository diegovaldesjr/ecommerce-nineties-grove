'use client'

import { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';
import Image from 'next/image';

export const ProductMobileSlideshow = ({ images, title, className}) => {  
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        modules={[FreeMode, Navigation, Pagination]}
      >
        {
          images.map(image => (
            <SwiperSlide key={image.name}>
              <Image
                src={image.src}
                alt={image.alt}
                priority
                layout='fill'
                objectFit='contain'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
