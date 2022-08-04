import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import './App.scss';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer';
import About from './routes/About';
import Gallery from './routes/Gallery';
function App() {
  document.body.style.overflowY = 'hidden';
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflowY = 'visible';
    }, 2000);
  }, []);

  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div
          className="loader"
          style={isLoading ? { display: 'flex' } : { display: 'none' }}
        >
          <BarLoader color="#93c191" height={3} loading={isLoading} />
        </div>
        <Navbar />
        <Social />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
