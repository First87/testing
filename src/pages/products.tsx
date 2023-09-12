import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CardProducts from './components/CardProduct';



const ProductsPage = () => {
  return (
    <div>
        <Header/>
        <CardProducts/>
        <Footer/>
    </div>
  );
};

export default ProductsPage;
