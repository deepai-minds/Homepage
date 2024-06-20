// src/App.js
import React from 'react';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <HeroSection />
    <AboutUs />
    <Services />
    <CaseStudies />
    <Testimonials />
    <Blog />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
