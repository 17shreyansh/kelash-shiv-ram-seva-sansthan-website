import React from 'react';

const HowToReach = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">How to Reach</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                Find Your Way to Kailashpur Temple
              </p>
              <p style={{color: '#666'}}>
                Located in the peaceful village of Kailashpur, our temple is easily accessible 
                by various modes of transportation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>📍 Address</h2>
              <div className="address-info">
                <p className="lead mb-3">
                  <strong>Kailashpur Shiv Ram Sewa Sansthan Trust</strong>
                </p>
                <p className="mb-2">Village Kailashpur (Dhani Jatusana)</p>
                <p className="mb-2">Rewari District, Haryana - 123401</p>
                <p className="mb-4">India</p>
                
                <div className="contact-details">
                  <p className="mb-2">
                    <strong>📞 Phone:</strong> 
                    <a href="tel:7290078318" style={{color: 'var(--primary)', marginLeft: '10px'}}>+91 7290078318</a>
                  </p>
                  <p className="mb-2">
                    <strong>✉️ Email:</strong> 
                    <a href="mailto:kpsrtrust@gmail.com" style={{color: 'var(--primary)', marginLeft: '10px'}}>kpsrtrust@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://via.placeholder.com/500x400?text=Temple+Location" alt="Temple Location" className="img-fluid rounded shadow" />
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>🗺️ Interactive Map</h2>
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
            <div className="custom-card text-center p-4">
              <div className="transport-icon mb-3" style={{fontSize: '3rem'}}>🚗</div>
              <h3 style={{color: 'var(--secondary)'}}>By Car</h3>
              <p><strong>From Delhi:</strong> 80 km via NH-48</p>
              <p><strong>From Gurgaon:</strong> 45 km via Rewari Road</p>
              <p><strong>From Rewari:</strong> 15 km via village roads</p>
              <p className="text-muted small">Parking available at temple premises</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="transport-icon mb-3" style={{fontSize: '3rem'}}>🚌</div>
              <h3 style={{color: 'var(--secondary)'}}>By Bus</h3>
              <p><strong>From Delhi:</strong> Take bus to Rewari, then local transport</p>
              <p><strong>From Rewari:</strong> Local buses available to Kailashpur</p>
              <p><strong>Frequency:</strong> Every 30 minutes during day time</p>
              <p className="text-muted small">Bus stop 500m from temple</p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="transport-icon mb-3" style={{fontSize: '3rem'}}>🚂</div>
              <h3 style={{color: 'var(--secondary)'}}>By Train</h3>
              <p><strong>Nearest Station:</strong> Rewari Junction</p>
              <p><strong>Distance:</strong> 15 km from temple</p>
              <p><strong>Connectivity:</strong> Well connected to Delhi, Jaipur</p>
              <p className="text-muted small">Taxi/auto available from station</p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-5" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>🧭 Detailed Directions</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h4 style={{color: 'var(--primary)'}}>From Delhi (80 km)</h4>
                  <ol className="directions-list">
                    <li>Take NH-48 towards Jaipur</li>
                    <li>Exit at Rewari and head towards city center</li>
                    <li>Follow signs to Kailashpur village</li>
                    <li>Temple is located in Dhani Jatusana area</li>
                  </ol>
                  <p className="text-muted small">
                    <strong>Travel Time:</strong> Approximately 1.5-2 hours
                  </p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4 style={{color: 'var(--primary)'}}>From Gurgaon (45 km)</h4>
                  <ol className="directions-list">
                    <li>Take Gurgaon-Rewari Road</li>
                    <li>Continue straight towards Rewari</li>
                    <li>Turn right towards Kailashpur village</li>
                    <li>Follow local signs to reach temple</li>
                  </ol>
                  <p className="text-muted small">
                    <strong>Travel Time:</strong> Approximately 1-1.5 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>🏨 Nearby Accommodations</h3>
              <ul className="list-unstyled">
                <li className="mb-2">• Hotel Rewari Palace - 12 km</li>
                <li className="mb-2">• Dharamshala facilities at temple</li>
                <li className="mb-2">• Guest house bookings available</li>
                <li className="mb-2">• Local homestay options</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>🍽️ Nearby Facilities</h3>
              <ul className="list-unstyled">
                <li className="mb-2">• Temple prasadam available</li>
                <li className="mb-2">• Local restaurants in Rewari</li>
                <li className="mb-2">• Medical facilities nearby</li>
                <li className="mb-2">• Fuel stations on main road</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReach;