import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Detalhes from './pages/detalhes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/detalhes/:id" element={<Detalhes />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
