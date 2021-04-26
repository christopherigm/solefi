import React from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import 'src/modules/examples/swiper/swiper.scss';

const SwiperSample = (): React.ReactElement => {
  return (
    <>
      <Swiper
        className='Swiper'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='Swiper__slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='Swiper__slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='Swiper__slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='Swiper__slide'>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSample;
