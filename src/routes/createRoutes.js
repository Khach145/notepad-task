import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Pages, Sessions, Notepad, NotFound} from '../pages/Pages'


const createRoutes = () => (
    <Routes>
      <Route path='/' element={<Sessions />} />
      <Route path='/session/:sesId' element={<Pages />} />
      <Route path='/session/:sesId/page/:pageId' element={<Notepad />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
);

export default createRoutes