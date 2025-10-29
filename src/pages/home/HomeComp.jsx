import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeComp = () => {
  return (
    <div className="container">
      <div style={{ width: '100%', height: '200px' }} className="bg-info rounded mb-3">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="d-flex">Home1</SwiperSlide>
          <SwiperSlide className="d-flex">Home2</SwiperSlide>
          <SwiperSlide className="d-flex">Home3</SwiperSlide>
          <SwiperSlide className="d-flex">Home4</SwiperSlide>
          <SwiperSlide className="d-flex">Home5</SwiperSlide>
          <SwiperSlide className="d-flex">Home6</SwiperSlide>
          <SwiperSlide className="d-flex">Home7</SwiperSlide>
          <SwiperSlide className="d-flex">Home8</SwiperSlide>
          <SwiperSlide className="d-flex">Home9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeComp;
