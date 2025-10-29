import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import CompanyComp from './CompanyComp';
import HistoryComp from './HistoryComp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AboutComp = () => {
  return (
    <div className="container">
      <div style={{ width: '100%', height: '200px' }} className="bg-info rounded mb-3">
        <Swiper>
          <SwiperSlide className="d-flex">About1</SwiperSlide>
          <SwiperSlide className="d-flex">About2</SwiperSlide>
          <SwiperSlide className="d-flex">About3</SwiperSlide>
          <SwiperSlide className="d-flex">About4</SwiperSlide>
          <SwiperSlide className="d-flex">About5</SwiperSlide>
          <SwiperSlide className="d-flex">About6</SwiperSlide>
          <SwiperSlide className="d-flex">About7</SwiperSlide>
          <SwiperSlide className="d-flex">About8</SwiperSlide>
          <SwiperSlide className="d-flex">About9</SwiperSlide>
        </Swiper>
      </div>
      <div className="d-flex gap-3 justify-content-center">
        <NavLink to="../about/company" className="nav-link p-2 ">
          회사소개
        </NavLink>
        <NavLink to="../about/history" className="nav-link p-2 ">
          회사연혁
        </NavLink>
      </div>
      <Routes>
        <Route index element={<CompanyComp />} />
        <Route path="company" element={<CompanyComp />} />
        <Route path="history" element={<HistoryComp />} />
      </Routes>
    </div>
  );
};

export default AboutComp;
