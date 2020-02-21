import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

const Home = () => {
  // Initiate WOW animations library
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
