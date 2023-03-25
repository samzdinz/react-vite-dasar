import React from 'react';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='gallery' element={<Gallery />} />
        </Routes>
    );
}
