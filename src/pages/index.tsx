import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import  MainSlide from './components/MainSlide';


type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Header />
      <Banner />
      <MainContent />
      <MainSlide/>
      <br /><br />
      
      <Footer />
    </>
  );
}
