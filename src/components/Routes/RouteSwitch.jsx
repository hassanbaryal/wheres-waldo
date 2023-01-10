import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
