import React from 'react';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LMenu from './Components/LMenu';

function App() {
  return (
    <>
      <Header />
      <LMenu />
      <Content />
      <Footer />
    </>
  );
}

export default App;
