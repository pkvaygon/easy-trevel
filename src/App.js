import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Activities from './pages/Activities/Activities';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contacts from './pages/Contacts/Contacts';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;