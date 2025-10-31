import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import supabase from '../../utils/supabase';

const BoardComp = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('posts').select();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

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
          <SwiperSlide className="d-flex">Board1</SwiperSlide>
          <SwiperSlide className="d-flex">Board2</SwiperSlide>
          <SwiperSlide className="d-flex">Board3</SwiperSlide>
          <SwiperSlide className="d-flex">Board4</SwiperSlide>
          <SwiperSlide className="d-flex">Board5</SwiperSlide>
          <SwiperSlide className="d-flex">Board6</SwiperSlide>
          <SwiperSlide className="d-flex">Board7</SwiperSlide>
          <SwiperSlide className="d-flex">Board8</SwiperSlide>
          <SwiperSlide className="d-flex">Board9</SwiperSlide>
        </Swiper>
      </div>
      <div className="d-flex gap-3 justify-content-center">
        <NavLink to="../board/list" className="nav-link p-2">
          List
        </NavLink>
        <NavLink to="../board/write" className="nav-link p-2">
          Write
        </NavLink>
      </div>
      <Routes>
        <Route index element={<ListComp posts={posts} />} />
        <Route path="/list" element={<ListComp posts={posts} />} />
        <Route path="/write" element={<WriteComp />} />
        <Route path="/view/:id" element={<ViewComp />} />
        <Route path="/modify/:id" element={<ModifyComp />} />
      </Routes>
    </div>
  );
};

export default BoardComp;
