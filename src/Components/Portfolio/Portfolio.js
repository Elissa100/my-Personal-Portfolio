import './portifolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import  sidebar from '../../images/sidebar.png'
import musicapp from '../../images/musicapp (1).png'
import ecommerce from '../../images/ecommerce.png'
import hoc from '../../images/hoc.png'
import 'swiper/css'

import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper 
      spaceBetween={30}
      slidesPerView={20}
      grabCursor={true}
      className='portifolio-slider'
      >
        <SwiperSlide>
       <img src={sidebar} alt="sidebar" id='sidebar' />
        </SwiperSlide>
        <SwiperSlide>
       <img src={ecommerce} alt="ecomerce" id='sidebar' />
       <SwiperSlide>
    <img src={musicapp} alt="musicapp" id='sidebar' />
        </SwiperSlide>
        <SwiperSlide>
       <img src={hoc} alt="sidebar" id='sidebar' />
        </SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
