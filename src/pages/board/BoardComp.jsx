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
      const { data, error } = await supabase.from('posts').select().order('id', { ascending: false });
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
      {loading ? (
        <div className="spinner-border text-primary load" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
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
        <NavLink to="../board/list" className="nav-link p-2 list">
          List
        </NavLink>
        <NavLink to="../board/write" className="nav-link p-2">
          Write
        </NavLink>
      </div>
      <Routes>
        <Route index element={<ListComp posts={posts} />} />
        <Route path="/list" element={<ListComp posts={posts} />} />
        <Route path="/write" element={<WriteComp refresh={fetch} />} />
        <Route path="/view/:id" element={<ViewComp refresh={fetch} />} />
        <Route path="/modify/:id" element={<ModifyComp refresh={fetch} />} />
      </Routes>
    </div>
  );
};

export default BoardComp;
