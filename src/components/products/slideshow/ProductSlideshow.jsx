'use client'

import { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';

export const ProductSlideshow = ({ images, title, className}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#dc2626',
          '--swiper-pagination-color': '#dc2626',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper: null 
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {
          images.map(image => (
            <SwiperSlide key={image.name}>
              <Image
                src={image.src}
                alt={image.alt}
                className='rounded-lg'
                priority
                layout='fill'
                objectFit='contain'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(image => (
            <SwiperSlide key={image.name}>
              <Image
                width= {304}
                height= {300}
                src={image.src}
                alt={image.alt}
                className='rounded-lg cursor-pointer'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
