import React from 'react';

const AboutTrust = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">About Our Trust</h1>
            <div className="text-center mb-5">
              <p className="lead hindi-decorative" style={{fontSize: '1.5rem', color: 'var(--primary)'}}>
                धर्मो रक्षति रक्षितः
              </p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Our History</h2>
              <p className="lead">Kailashpur Shiv Ram Sewa Sansthan Trust was established with the noble purpose of religious and social service.</p>
              <p>This trust is located in Kailashpur village of Rewari district, Haryana. Our main objective is to promote Hindu dharma and culture while contributing to social welfare activities.</p>
              <p>Through the trust, we engage in temple construction, religious ceremonies, education, healthcare services, and assistance to the underprivileged.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://via.placeholder.com/500x400?text=Trust+History" alt="Trust History" className="img-fluid rounded shadow" />
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Our Mission</h2>
              <div className="mission-list">
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>🕉️</span>
                  <span>Promoting religious and spiritual values</span>
                </div>
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>🏛️</span>
                  <span>Temple construction and preservation</span>
                </div>
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>📚</span>
                  <span>Spreading religious education</span>
                </div>
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>🤝</span>
                  <span>Social service and welfare activities</span>
                </div>
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>🎭</span>
                  <span>Organizing cultural programs</span>
                </div>
                <div className="mission-item mb-3 d-flex align-items-center">
                  <span className="mission-icon me-3" style={{fontSize: '1.5rem'}}>💝</span>
                  <span>Helping the poor and needy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img src="https://via.placeholder.com/500x400?text=Our+Mission" alt="Our Mission" className="img-fluid rounded shadow" />
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-5 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Our Vision</h2>
              <p className="lead mb-4">
                Following the principle of <span className="hindi-decorative" style={{fontSize: '1.3rem', color: 'var(--primary)'}}>"धर्मो रक्षति रक्षितः"</span>, we aim to build a society 
                where dharma, spirituality, and human values are respected.
              </p>
              <p>Our goal is to ensure that every person receives religious education and spiritual guidance while contributing to the welfare of society.</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>🕉️</div>
              <h3 style={{color: 'var(--secondary)'}}>Religious Service</h3>
              <p>Temple operations, worship ceremonies, and organizing religious rituals for the spiritual upliftment of devotees.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>🤝</div>
              <h3 style={{color: 'var(--secondary)'}}>Social Welfare</h3>
              <p>Education, healthcare services, and programs to help the underprivileged members of our community.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>🎭</div>
              <h3 style={{color: 'var(--secondary)'}}>Cultural Preservation</h3>
              <p>Preservation and promotion of Hindu culture, traditions, and values for future generations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrust;