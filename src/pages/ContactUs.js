import React from 'react';
import { FaOm, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaMap, FaBuilding, FaPrayingHands } from 'react-icons/fa';
import temple from '../assets/images/temple.jpg';

const ContactUs = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Contact Us</h1>
            <div className="text-center mb-5">
              <p className="lead hindi-decorative" style={{fontSize: '1.5rem', color: 'var(--primary)'}}>
                सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
              </p>
              <p style={{color: '#666', fontSize: '1.1rem'}}>We are here to serve you with devotion and dedication</p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-stretch mb-5">
          <div className="col-lg-6 mb-4">
            <div className="contact-info-card">
              <h2 className="mb-4" style={{color: 'var(--secondary)', fontWeight: '800'}}>
                <FaOm style={{marginRight: '10px', color: 'var(--primary)'}} /> Kailashpur Shiv Ram Sewa Sansthan Trust
              </h2>
              
              <div className="contact-info-item">
                <h5><FaMapMarkerAlt style={{marginRight: '8px', color: 'var(--primary)'}} /> Our Address</h5>
                <p><strong>Village Kailashpur (Dhani Jatusana)</strong></p>
                <p>Rewari, Haryana - 123401, India</p>
              </div>
              
              <div className="contact-info-item">
                <h5><FaPhone style={{marginRight: '8px', color: 'var(--primary)'}} /> Contact Information</h5>
                <p><strong>Mobile:</strong> <a href="tel:7290078318">+91 7290078318</a></p>
                <p><strong>Email:</strong> <a href="mailto:kpsrtrust@gmail.com">kpsrtrust@gmail.com</a></p>
                <p><strong>Website:</strong> <a href="http://shivramtrust.com" target="_blank" rel="noopener noreferrer">shivramtrust.com</a></p>
              </div>
              
              <div className="contact-info-item">
                <h5><FaClock style={{marginRight: '8px', color: 'var(--primary)'}} /> Temple Timings</h5>
                <p><strong>Morning Darshan:</strong> 6:00 AM - 12:00 PM</p>
                <p><strong>Evening Darshan:</strong> 4:00 PM - 9:00 PM</p>
                <p style={{fontSize: '0.9rem', color: '#888', marginTop: '10px'}}>
                  *Special ceremonies and festivals may have extended hours
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mb-4">
            <img 
              src={temple} 
              alt="Temple Contact" 
              className="img-fluid contact-hero-image w-100 h-100" 
              style={{objectFit: 'cover', minHeight: '400px'}}
            />
          </div>
        </div>
        
        {/* Google Map */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{color: 'var(--secondary)', fontWeight: '800'}}>
              <FaMap style={{marginRight: '10px', color: 'var(--primary)'}} /> Find Us Here
            </h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123456789!2d76.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKailashpur%2C%20Rewari%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kailashpur Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="contact-action-card">
              <div>
                <div className="contact-icon"><FaPhone size={24} color="var(--primary)" /></div>
                <h3>Quick Contact</h3>
                <p>For immediate assistance or emergency situations, call us directly. We are available during temple hours.</p>
              </div>
              <a href="tel:7290078318" className="btn btn-primary">Call Now</a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="contact-action-card">
              <div>
                <div className="contact-icon"><FaEnvelope size={24} color="var(--primary)" /></div>
                <h3>Email Support</h3>
                <p>Send us detailed inquiries about trust activities, donations, or religious programs via email.</p>
              </div>
              <a href="mailto:kpsrtrust@gmail.com" className="btn btn-primary">Send Email</a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="contact-action-card">
              <div>
                <div className="contact-icon"><FaBuilding size={24} color="var(--primary)" /></div>
                <h3>Visit Temple</h3>
                <p>Experience divine blessings by visiting our temple during darshan hours. All devotees are welcome.</p>
              </div>
              <div className="mt-3">
                <strong style={{color: 'var(--secondary)'}}>
                  6:00 AM - 12:00 PM<br/>
                  4:00 PM - 9:00 PM
                </strong>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="contact-cta-section">
              <h2><FaPrayingHands style={{marginRight: '10px', color: 'var(--primary)'}} /> Connect With Our Trust</h2>
              <p className="lead">
                Whether you seek spiritual guidance, wish to contribute to our social service activities, 
                or need assistance with religious ceremonies, we are here to serve you.
              </p>
              <p>
                Our trust is committed to promoting dharma, supporting the community, and preserving 
                our rich cultural heritage. Join us in our mission of service and devotion.
              </p>
              <div className="hindi-decorative">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः<br/>
                सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्"
              </div>
              <p style={{marginTop: '15px', fontSize: '0.9rem', color: '#666'}}>
                <em>May all beings be happy, may all beings be healthy, may all beings experience prosperity, may none suffer.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;