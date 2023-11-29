import React from 'react';
import {Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome'
import MyNavbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import SecurityUpdate from './components/SecurityUpdate';
import About from './components/About';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
   
      <div>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />

          </Routes>

        <Footer />
      </div>
  );
}

export default App;
