import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutTrust from './pages/AboutTrust';
import AboutKailashpur from './pages/AboutKailashpur';
import AboutTemple from './pages/AboutTemple';
import TrustMembers from './pages/TrustMembers';
import HowToReach from './pages/HowToReach';
import Donation from './pages/Donation';
import GalleryKalashYatra from './pages/GalleryKalashYatra';
import GalleryPranPratistha from './pages/GalleryPranPratistha';
import GalleryOther from './pages/GalleryOther';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-trust" element={<AboutTrust />} />
            <Route path="/about-kailashpur" element={<AboutKailashpur />} />
            <Route path="/about-temple" element={<AboutTemple />} />
            <Route path="/trust-members" element={<TrustMembers />} />
            <Route path="/how-to-reach" element={<HowToReach />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/gallery/kalash-yatra" element={<GalleryKalashYatra />} />
            <Route path="/gallery/pran-pratistha" element={<GalleryPranPratistha />} />
            <Route path="/gallery/other" element={<GalleryOther />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;