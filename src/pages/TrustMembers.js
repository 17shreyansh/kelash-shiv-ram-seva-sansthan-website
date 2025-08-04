import React from 'react';
import { Link, Element, scroller } from 'react-scroll';
import profileImg from '../assets/images/profile.jpg';

const TrustMembers = () => {
  const trustMembers = [
    { 
      name: "Shri Ram Sharma", 
      position: "President", 
      image: profileImg,
      description: "Leading the trust with dedication and spiritual guidance for over 15 years."
    },
    { 
      name: "Shri Shiv Kumar", 
      position: "Secretary", 
      image: profileImg,
      description: "Managing administrative affairs and coordinating trust activities efficiently."
    },
    { 
      name: "Smt. Sita Devi", 
      position: "Treasurer", 
      image: profileImg,
      description: "Overseeing financial management and ensuring transparent fund utilization."
    },
    { 
      name: "Shri Hanuman Das", 
      position: "Vice President", 
      image: profileImg,
      description: "Supporting organizational activities and community outreach programs."
    },
    { 
      name: "Shri Krishna Gopal", 
      position: "Joint Secretary", 
      image: profileImg,
      description: "Assisting in documentation and maintaining trust records and communications."
    },
    { 
      name: "Smt. Radha Sharma", 
      position: "Member", 
      image: profileImg,
      description: "Contributing to social welfare activities and women's empowerment programs."
    }
  ];

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Trust Members</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                Dedicated Individuals Serving Our Community
              </p>
              <p style={{color: '#666'}}>
                Our trust is guided by experienced and committed members who work tirelessly 
                for the betterment of society and preservation of our cultural values.
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-3">
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Link
                  to="members"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="btn btn-primary"
                  style={{cursor: 'pointer'}}
                >
                  Our Members
                </Link>
                <Link
                  to="leadership"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="btn btn-primary"
                  style={{cursor: 'pointer'}}
                >
                  Leadership
                </Link>
                <Link
                  to="mission-vision"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="btn btn-primary"
                  style={{cursor: 'pointer'}}
                >
                  Mission & Vision
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Members Section */}
        <Element name="members">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>Our Team Members</h2>
            </div>
          </div>
          <div className="row">
            {trustMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="custom-card">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="card-img-top"
                    style={{height: '350px', objectFit: 'cover'}}
                  />
                  <div className="card-body text-center p-4">
                    <h4 className="card-title mb-2" style={{color: 'var(--secondary)'}}>{member.name}</h4>
                    <h6 className="mb-3" style={{color: 'var(--primary)', fontWeight: '600'}}>{member.position}</h6>
                    <p className="card-text text-muted">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Element>
        
        {/* Leadership Section */}
        <Element name="leadership">
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <div className="custom-card p-5 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
                <h2 className="mb-4" style={{color: 'var(--secondary)'}}>Our Leadership</h2>
                <p className="lead mb-4">
                  The trust operates under the guidance of experienced leaders who bring together 
                  spiritual wisdom, administrative expertise, and community service dedication.
                </p>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-users"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>Collective Leadership</h5>
                      <p className="text-muted">Decisions made through consensus and collective wisdom</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-handshake"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>Community Focus</h5>
                      <p className="text-muted">Dedicated to serving the needs of our community</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-lightbulb"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>Transparent Governance</h5>
                      <p className="text-muted">Open and accountable management of trust affairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        
        {/* Mission & Vision Section */}
        <Element name="mission-vision">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>Mission & Vision</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="custom-card p-4" style={{height: '100%'}}>
                <div className="text-center mb-3">
                  <div style={{fontSize: '3rem', color: 'var(--primary)'}}><i className="fas fa-bullseye"></i></div>
                </div>
                <h3 className="text-center mb-3" style={{color: 'var(--secondary)'}}>Our Mission</h3>
                <p className="text-center">
                  To promote religious and cultural values while serving the community through various 
                  social welfare activities and maintaining the sacred traditions of our heritage.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ Preserve Hindu dharma and culture</li>
                  <li className="mb-2">✓ Serve the underprivileged community</li>
                  <li className="mb-2">✓ Maintain temple and religious activities</li>
                  <li className="mb-2">✓ Promote education and healthcare</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="custom-card p-4" style={{height: '100%'}}>
                <div className="text-center mb-3">
                  <div style={{fontSize: '3rem', color: 'var(--primary)'}}><i className="fas fa-eye"></i></div>
                </div>
                <h3 className="text-center mb-3" style={{color: 'var(--secondary)'}}>Our Vision</h3>
                <p className="text-center">
                  To create a harmonious society where spiritual values, cultural traditions, and 
                  modern progress work together for the welfare of all community members.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ Build a spiritually enriched community</li>
                  <li className="mb-2">✓ Foster unity and brotherhood</li>
                  <li className="mb-2">✓ Create sustainable development</li>
                  <li className="mb-2">✓ Inspire future generations</li>
                </ul>
              </div>
            </div>
          </div>
        </Element>
        
        {/* Back to Top Button */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <Link
              to="members"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="btn btn-primary"
              style={{cursor: 'pointer'}}
            >
              ↑ Back to Top
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustMembers;