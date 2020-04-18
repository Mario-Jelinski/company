import React from 'react';
import Header from '../../components/header/Header';
import TopBanner from '../../components/topBanner/TopBanner';
import FancyBox from '../../components/fancyBox/FancyBox';
import About from '../../components/about/About';
import CoreBox from '../../components/core/CoreBox';
import ContactForm from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './App.scss';

function Contact() {
  //const bab = new Babylon();
  return (
    <div className="container-fluid">
        <Header />        
        <div className="construction">
            <div className="container">
                <div className="center">Under Construction</div> 
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;