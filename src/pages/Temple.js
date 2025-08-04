import React from 'react';

const Temple = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Our Temple</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                A Sacred Place of Worship and Devotion
              </p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Temple Architecture</h2>
              <p className="lead">Our temple represents the traditional Hindu architectural style with modern amenities for devotees.</p>
              <p>The temple complex includes the main sanctum sanctorum, prayer halls, and facilities for various religious ceremonies. The architecture follows ancient Vastu principles while incorporating contemporary safety and accessibility features.</p>
              <p>The temple is designed to create a peaceful and spiritual atmosphere where devotees can connect with the divine and find inner peace.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://via.placeholder.com/500x400?text=Temple+Architecture" alt="Temple Architecture" className="img-fluid rounded shadow" />
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Daily Worship Schedule</h2>
              <div className="worship-schedule">
                <div className="schedule-item mb-3 d-flex align-items-center">
                  <span className="time-icon me-3" style={{fontSize: '1.5rem'}}>🌅</span>
                  <div>
                    <strong>Morning Aarti:</strong> 6:00 AM - 7:00 AM<br/>
                    <small className="text-muted">Mangal Aarti and morning prayers</small>
                  </div>
                </div>
                <div className="schedule-item mb-3 d-flex align-items-center">
                  <span className="time-icon me-3" style={{fontSize: '1.5rem'}}>☀️</span>
                  <div>
                    <strong>Morning Darshan:</strong> 7:00 AM - 12:00 PM<br/>
                    <small className="text-muted">Open for devotees and prayers</small>
                  </div>
                </div>
                <div className="schedule-item mb-3 d-flex align-items-center">
                  <span className="time-icon me-3" style={{fontSize: '1.5rem'}}>🌆</span>
                  <div>
                    <strong>Evening Darshan:</strong> 4:00 PM - 8:00 PM<br/>
                    <small className="text-muted">Evening prayers and devotion</small>
                  </div>
                </div>
                <div className="schedule-item mb-3 d-flex align-items-center">
                  <span className="time-icon me-3" style={{fontSize: '1.5rem'}}>🪔</span>
                  <div>
                    <strong>Evening Aarti:</strong> 8:00 PM - 9:00 PM<br/>
                    <small className="text-muted">Sandhya Aarti and closing prayers</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img src="https://via.placeholder.com/500x400?text=Temple+Worship" alt="Temple Worship" className="img-fluid rounded shadow" />
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-5 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Temple Facilities</h2>
              <p className="lead mb-4">
                Our temple provides various facilities to ensure a comfortable and spiritual experience for all devotees.
              </p>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="facility-item">
                    <div style={{fontSize: '2rem', marginBottom: '10px'}}>🏛️</div>
                    <strong>Main Sanctum</strong>
                    <p className="small text-muted">Sacred shrine area</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="facility-item">
                    <div style={{fontSize: '2rem', marginBottom: '10px'}}>🙏</div>
                    <strong>Prayer Hall</strong>
                    <p className="small text-muted">Community worship space</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="facility-item">
                    <div style={{fontSize: '2rem', marginBottom: '10px'}}>💧</div>
                    <strong>Ablution Area</strong>
                    <p className="small text-muted">Purification facilities</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="facility-item">
                    <div style={{fontSize: '2rem', marginBottom: '10px'}}>🚗</div>
                    <strong>Parking</strong>
                    <p className="small text-muted">Vehicle parking space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>🕉️</div>
              <h3 style={{color: 'var(--secondary)'}}>Daily Prayers</h3>
              <p>Regular morning and evening prayers conducted by experienced priests following traditional rituals.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>🎭</div>
              <h3 style={{color: 'var(--secondary)'}}>Special Ceremonies</h3>
              <p>Weddings, naming ceremonies, and other religious functions conducted with proper Vedic traditions.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <div className="service-icon mb-3" style={{fontSize: '3rem'}}>📚</div>
              <h3 style={{color: 'var(--secondary)'}}>Religious Education</h3>
              <p>Classes on Hindu scriptures, Sanskrit, and spiritual teachings for devotees of all ages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temple;