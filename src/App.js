import React from 'react'
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <>
    <Header />
    <About />
    <Routes>
      <Route path="/shop" element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App