import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AllProduct from './pages/AllProduct';
import BeautyBlog from './pages/BeautyBlog';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='allproduct' element={<AllProduct />} />
              <Route path='beautyblog' element={<BeautyBlog />} />
          </Route>
        </Routes>
       </BrowserRouter>
 </>
  );
}

export default App;
