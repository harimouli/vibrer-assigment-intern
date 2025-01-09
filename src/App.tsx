import React from 'react';

import Navbar  from './components/Navbar/index.tsx';

import Header from './components/Header/index.tsx';

import './App.css';

import "./components/ProductCategories/index.tsx";

import ProductCategories from './components/ProductCategories/index.tsx';



import Segments from './components/Segements/index.tsx';

import TrendingProducts from './components/TrendingProducts/index.tsx';

import Interior from './components/Interior/index.tsx';

import AboutSection from './components/AboutSection/index.tsx';

import Footer from './components/Footer/index.tsx';

import OurProcess from './components/OurProcess/index.tsx';

import StandOut from './components/StandOut/index.tsx';

const App = () => {
  return (
    <div className = "app-container">
      <Navbar />
      <Header />
      <ProductCategories/>
      <Segments/>
      <TrendingProducts/>
      <Interior/>
      <AboutSection/>
      <OurProcess/>
      <StandOut/>
      <Footer/>
    </div>
  
      
  );
};

export default App;