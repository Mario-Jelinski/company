import React from 'react';
import Header from '../../components/header/Header';
import TopBanner from '../../components/topBanner/TopBanner';
import FancyBox from '../../components/fancyBox/FancyBox';
import About from '../../components/about/About';
//import './App.css';

function Home() {
  //const bab = new Babylon();
  return (
    <div className="container-fluid">
        <Header />
        <TopBanner />
        <FancyBox />  
        <About />
    </div>
  );
}

export default Home;