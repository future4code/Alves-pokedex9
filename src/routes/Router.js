import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import Pokedex from '../pages/Pokedex/Pokedex'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='details/:id' element={<DetailsPage />} />
            <Route path='pokedex' element={<Pokedex />} />
        </Routes>
    </BrowserRouter>
  );
};
