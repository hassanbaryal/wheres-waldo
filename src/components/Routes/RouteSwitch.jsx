import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home';
import LevelSelect from '../LevelSelect/LevelSelect';
import MapOne from '../Maps/MapOne/MapOne';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levelselect" element={<LevelSelect />} />
        <Route path="/mapone" element={<MapOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
