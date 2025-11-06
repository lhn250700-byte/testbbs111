import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import HomeComp from './pages/home/HomeComp';

import BoardComp from './pages/board/BoardComp';
import './App.css';
import AboutComp from './pages/about/AboutComp';
import MemberComp from './pages/member/MemberComp';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container d-flex justify-content-between py-3">
        <h1>
          <Link to="/" className="nav-link">
            LOGO
          </Link>
        </h1>
        <ul className="d-flex gap-3 align-items-center">
          <li>
            <NavLink to="/" className="nav-link p-2">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link p-2">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/board" className="nav-link p-2">
              BOARD
            </NavLink>
          </li>
          <li>
            <NavLink to="/member" className="nav-link p-2">
              MEMBER
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about/*" element={<AboutComp />} />
        <Route path="/board/*" element={<BoardComp />} />
        <Route path="/member/*" element={<MemberComp />} />
      </Routes>
      <div className="container-fluid py-5 mt-5" style={{ background: '#ddd' }}>
        <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione?</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
