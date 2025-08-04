import React from 'react';

const Donation = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Donation</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                Support Our Noble Cause
              </p>
              <p style={{color: '#666'}}>
                Your generous contributions help us serve the community and maintain our sacred traditions. 
                Every donation, big or small, makes a meaningful difference.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>🏦 Bank Details</h2>
              <div className="bank-details">
                <div className="detail-item mb-3">
                  <strong>Account Name:</strong><br/>
                  <span>Kailashpur Shiv Ram Sewa Sansthan Trust</span>
                </div>
                <div className="detail-item mb-3">
                  <strong>Bank Name:</strong><br/>
                  <span>State Bank of India</span>
                </div>
                <div className="detail-item mb-3">
                  <strong>Account Number:</strong><br/>
                  <span style={{fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)'}}>1234567890123456</span>
                </div>
                <div className="detail-item mb-3">
                  <strong>IFSC Code:</strong><br/>
                  <span style={{fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)'}}>SBIN0001234</span>
                </div>
                <div className="detail-item mb-3">
                  <strong>Branch:</strong><br/>
                  <span>Rewari Main Branch, Haryana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="custom-card p-4 text-center">
              <h3 className="mb-4" style={{color: 'var(--secondary)'}}>📱 UPI Payment</h3>
              <div className="upi-section">
                <div className="qr-placeholder mb-3" style={{
                  width: '200px', 
                  height: '200px', 
                  border: '2px dashed var(--primary)', 
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>📱</div>
                    <p className="text-muted">QR Code for<br/>UPI Payment</p>
                  </div>
                </div>
                <p className="mb-2"><strong>UPI ID:</strong></p>
                <p style={{fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--primary)'}}>
                  kpsrtrust@paytm
                </p>
                <p className="text-muted small">Scan QR code or use UPI ID for instant payment</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>💝 Donation Categories</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="custom-card text-center p-4">
                  <div className="donation-icon mb-3" style={{fontSize: '3rem'}}>🏛️</div>
                  <h4 style={{color: 'var(--secondary)'}}>Temple Maintenance</h4>
                  <p>Support daily temple operations, maintenance, and infrastructure development.</p>
                  <div className="suggested-amounts">
                    <p className="mb-2"><strong>Suggested Amounts:</strong></p>
                    <div className="amount-tags">
                      <span className="badge bg-light text-dark me-2 mb-2">₹501</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹1,001</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹5,001</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="custom-card text-center p-4">
                  <div className="donation-icon mb-3" style={{fontSize: '3rem'}}>🍽️</div>
                  <h4 style={{color: 'var(--secondary)'}}>Prasadam & Langar</h4>
                  <p>Contribute to free meals and prasadam distribution for devotees and community.</p>
                  <div className="suggested-amounts">
                    <p className="mb-2"><strong>Suggested Amounts:</strong></p>
                    <div className="amount-tags">
                      <span className="badge bg-light text-dark me-2 mb-2">₹251</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹501</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹1,001</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="custom-card text-center p-4">
                  <div className="donation-icon mb-3" style={{fontSize: '3rem'}}>🎓</div>
                  <h4 style={{color: 'var(--secondary)'}}>Education & Welfare</h4>
                  <p>Support educational programs, healthcare initiatives, and social welfare activities.</p>
                  <div className="suggested-amounts">
                    <p className="mb-2"><strong>Suggested Amounts:</strong></p>
                    <div className="amount-tags">
                      <span className="badge bg-light text-dark me-2 mb-2">₹1,001</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹2,501</span>
                      <span className="badge bg-light text-dark me-2 mb-2">₹5,001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>📋 Important Information</h3>
              <ul className="list-unstyled">
                <li className="mb-2">✓ All donations are tax-exempt under 80G</li>
                <li className="mb-2">✓ Receipt will be provided for all donations</li>
                <li className="mb-2">✓ Donations can be made in Indian Rupees only</li>
                <li className="mb-2">✓ Foreign donations require prior approval</li>
                <li className="mb-2">✓ Minimum donation amount: ₹51</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>📞 Contact for Donations</h3>
              <div className="contact-info">
                <p className="mb-2">
                  <strong>Phone:</strong> 
                  <a href="tel:7290078318" style={{color: 'var(--primary)', marginLeft: '10px'}}>+91 7290078318</a>
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> 
                  <a href="mailto:kpsrtrust@gmail.com" style={{color: 'var(--primary)', marginLeft: '10px'}}>kpsrtrust@gmail.com</a>
                </p>
                <p className="mb-3">
                  <strong>Timing:</strong> 9:00 AM - 6:00 PM (Mon-Sat)
                </p>
                <p className="text-muted small">
                  For large donations or specific purposes, please contact us directly 
                  to discuss the best way to contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="custom-card p-5 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>🙏 Your Contribution Matters</h2>
              <p className="lead mb-4">
                Every donation helps us continue our mission of serving the community, 
                preserving our cultural heritage, and spreading spiritual values.
              </p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="impact-item">
                    <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🏗️</div>
                    <h5 style={{color: 'var(--secondary)'}}>Temple Development</h5>
                    <p className="text-muted">Building and maintaining sacred spaces for worship</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="impact-item">
                    <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>👥</div>
                    <h5 style={{color: 'var(--secondary)'}}>Community Service</h5>
                    <p className="text-muted">Supporting education, healthcare, and welfare programs</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="impact-item">
                    <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>🎭</div>
                    <h5 style={{color: 'var(--secondary)'}}>Cultural Preservation</h5>
                    <p className="text-muted">Maintaining traditions and organizing religious events</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="hindi-decorative" style={{fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '600'}}>
                  "दानं परोपकारार्थं न तु स्वार्थं प्रयोजनम्"
                </p>
                <p style={{fontSize: '0.9rem', color: '#666', marginTop: '10px'}}>
                  <em>Donation is for the welfare of others, not for selfish purposes</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;