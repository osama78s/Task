import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero from '../../assets/hero4.png'
import hero2 from '../../assets/home-img.png';

const SwiperCom = () => {
  return (
    <Swiper
    modules={[Pagination, Navigation, Parallax, Autoplay]}
    speed={600}
    parallax={true}
    pagination={{ clickable: true }}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false, 
    }}
    loop={true}
    className="swiper-container xl:h-[100vh] pt-[77px] flex items-center justify-center"
>
    <SwiperSlide data-swiper-parallax="-50%">
        <div className="slide-content">
            <img className='w-full h-full object-contain' src={hero} alt="Hero Image" />
        </div>
    </SwiperSlide>
    <SwiperSlide data-swiper-parallax="-50%">
        <div className="slide-content">
            <img className='w-full h-full object-contain' src={hero2} alt="Hero2 Image" />
        </div>
    </SwiperSlide>
</Swiper>
  )
}

export default SwiperCom;