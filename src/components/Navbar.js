import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarClass = () => {
    if (!isHomePage) return 'navbar navbar-expand-lg';
    if (scrolled) return 'navbar navbar-expand-lg scrolled';
    return 'navbar navbar-expand-lg transparent';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveDropdown(null);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className={getNavbarClass()}>
      <div className="container">
        <Link className="navbar-brand" to="/">
           Kailashpur Shiv Ram Trust
        </Link>
        
        <button 
          className="navbar-toggler d-lg-none" 
          type="button" 
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                About
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about-trust">About Trust</Link></li>
                <li><Link className="dropdown-item" to="/temple">Temple</Link></li>
                <li><Link className="dropdown-item" to="/trust-members">Trust Members</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Kailashpur
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/how-to-reach">How to Reach</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donation">Donation</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Gallery
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/gallery/kalash-yatra">Kalash Yatra</Link></li>
                <li><Link className="dropdown-item" to="/gallery/pran-pratistha">Pran Pratistha</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h5>Menu</h5>
            <button className="close-btn" onClick={closeSidebar}>&times;</button>
          </div>
          <div className="sidebar-content">
            <Link className="sidebar-link" to="/" onClick={closeSidebar}>Home</Link>
            
            <div className="sidebar-dropdown">
              <button 
                className={`sidebar-dropdown-btn ${activeDropdown === 'about' ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
              >
                About <span className="arrow">▼</span>
              </button>
              {activeDropdown === 'about' && (
                <div className="sidebar-dropdown-content">
                  <Link to="/about-trust" onClick={closeSidebar}>About Trust</Link>
                  <Link to="/temple" onClick={closeSidebar}>Temple</Link>
                  <Link to="/trust-members" onClick={closeSidebar}>Trust Members</Link>
                </div>
              )}
            </div>
            
            <div className="sidebar-dropdown">
              <button 
                className={`sidebar-dropdown-btn ${activeDropdown === 'kailashpur' ? 'active' : ''}`}
                onClick={() => toggleDropdown('kailashpur')}
              >
                Kailashpur <span className="arrow">▼</span>
              </button>
              {activeDropdown === 'kailashpur' && (
                <div className="sidebar-dropdown-content">
                  <Link to="/how-to-reach" onClick={closeSidebar}>How to Reach</Link>
                </div>
              )}
            </div>
            
            <Link className="sidebar-link" to="/donation" onClick={closeSidebar}>Donation</Link>
            
            <div className="sidebar-dropdown">
              <button 
                className={`sidebar-dropdown-btn ${activeDropdown === 'gallery' ? 'active' : ''}`}
                onClick={() => toggleDropdown('gallery')}
              >
                Gallery <span className="arrow">▼</span>
              </button>
              {activeDropdown === 'gallery' && (
                <div className="sidebar-dropdown-content">
                  <Link to="/gallery/kalash-yatra" onClick={closeSidebar}>Kalash Yatra</Link>
                  <Link to="/gallery/pran-pratistha" onClick={closeSidebar}>Pran Pratistha</Link>
                </div>
              )}
            </div>
            
            <Link className="sidebar-link" to="/contact" onClick={closeSidebar}>Contact Us</Link>
          </div>
        </div>
        
        {/* Sidebar Overlay */}
        {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      </div>
    </nav>
  );
};

export default Navbar;