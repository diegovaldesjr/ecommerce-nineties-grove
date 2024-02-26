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
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper: null 
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                src={`/products/${image}`}
                alt={title}
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
            <SwiperSlide key={image}>
              <Image
                width= {304}
                height= {300}
                src={`/products/${image}`}
                alt={title}
                className='rounded-lg'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}