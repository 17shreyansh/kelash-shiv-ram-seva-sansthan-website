import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="hindi-heading">Kailashpur Shiv Ram Trust</h5>
            <p>Village Kailashpur (Dhani Jatusana)<br />
               Rewari, Haryana - 123401</p>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about-trust">About Trust</Link></li>
              <li><Link to="/temple">Temple</Link></li>
              <li><Link to="/trust-members">Trust Members</Link></li>
              <li><Link to="/donation">Donation</Link></li>
              <li><Link to="/gallery/kalash-yatra">Gallery</Link></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5>Contact Info</h5>
            <p><strong>Email:</strong> <a href="mailto:kpsrtrust@gmail.com">kpsrtrust@gmail.com</a></p>
            <p><strong>Mobile:</strong> <a href="tel:7290078318">+91 7290078318</a></p>
            <p><strong>Temple Timings:</strong><br/>6:00 AM - 12:00 PM<br/>4:00 PM - 9:00 PM</p>
          </div>
        </div>
        
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 Kailashpur Shiv Ram Sewa Sansthan Trust. All rights reserved.</p>
          <p className="hindi-decorative">सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;