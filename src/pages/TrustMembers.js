import React from 'react';
import { Link, Element, scroller } from 'react-scroll';
import profileImg from '../assets/images/profile.jpg';

const TrustMembers = () => {
  const trustMembers = [
    { 
      name: "कैप्टन राम किशन यादव", 
      position: "अध्यक्ष", 
      image: profileImg,
      description: "ट्रस्ट का नेतृत्व करते हुए आध्यात्मिक मार्गदर्शन प्रदान करते हैं।"
    },
    { 
      name: "तपेश्वर यादव", 
      position: "सलाहकार - वित्तीय", 
      image: profileImg,
      description: "वित्तीय प्रबंधन और पारदर्शी फंड उपयोग की देखरेख करते हैं।"
    },
    { 
      name: "राजपाल यादव", 
      position: "सलाहकार - इमारत रख-रखाव", 
      image: profileImg,
      description: "मंदिर और ट्रस्ट की संपत्ति के रखरखाव की जिम्मेदारी संभालते हैं।"
    },
    { 
      name: "अमित यादव", 
      position: "सलाहकार - प्रचार", 
      image: profileImg,
      description: "ट्रस्ट की गतिविधियों का प्रचार-प्रसार और संपर्क कार्य करते हैं।"
    },
    { 
      name: "रवि यादव (पंच)", 
      position: "सलाहकार - त्योहार एवं सामाजिक व्यवस्था", 
      image: profileImg,
      description: "त्योहारों और सामाजिक कार्यक्रमों का आयोजन और व्यवस्था करते हैं।"
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
            <h1 className="section-title">ट्रस्ट सदस्य</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                समुदाय की सेवा में समर्पित व्यक्तित्व
              </p>
              <p style={{color: '#666'}}>
                हमारा ट्रस्ट अनुभवी और प्रतिबद्ध सदस्यों द्वारा संचालित है जो समाज की भलाई 
                और हमारी सांस्कृतिक मूल्यों के संरक्षण के लिए निरंतर कार्य करते हैं।
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
                  हमारे सदस्य
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
                  नेतृत्व
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
                  उद्देश्य एवं दृष्टिकोण
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Members Section */}
        <Element name="members">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>हमारे टीम सदस्य</h2>
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
                <h2 className="mb-4" style={{color: 'var(--secondary)'}}>हमारा नेतृत्व</h2>
                <p className="lead mb-4">
                  ट्रस्ट अनुभवी नेताओं के मार्गदर्शन में संचालित होता है जो आध्यात्मिक ज्ञान, 
                  प्रशासनिक विशेषज्ञता और समुदायिक सेवा की भावना को एक साथ लाते हैं।
                </p>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-users"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>सामूहिक नेतृत्व</h5>
                      <p className="text-muted">सर्वसम्मति और सामूहिक बुद्धि से निर्णय लेना</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-handshake"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>समुदायिक केंद्रित</h5>
                      <p className="text-muted">हमारे समुदाय की आवश्यकताओं की सेवा के लिए समर्पित</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="leadership-item">
                      <div style={{fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary)'}}><i className="fas fa-lightbulb"></i></div>
                      <h5 style={{color: 'var(--secondary)'}}>पारदर्शी शासन</h5>
                      <p className="text-muted">ट्रस्ट कार्यों का खुला और जवाबदेह प्रबंधन</p>
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
              <h2 className="text-center mb-4" style={{color: 'var(--secondary)'}}>उद्देश्य एवं दृष्टिकोण</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="custom-card p-4" style={{height: '100%'}}>
                <div className="text-center mb-3">
                  <div style={{fontSize: '3rem', color: 'var(--primary)'}}><i className="fas fa-bullseye"></i></div>
                </div>
                <h3 className="text-center mb-3" style={{color: 'var(--secondary)'}}>हमारा उद्देश्य</h3>
                <p className="text-center">
                  धार्मिक और सांस्कृतिक मूल्यों को बढ़ावा देना तथा विभिन्न सामाजिक कल्याण 
                  गतिविधियों के माध्यम से समुदाय की सेवा करना और हमारी विरासत की पवित्र परंपराओं को बनाए रखना।
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ हिंदू धर्म और संस्कृति का संरक्षण</li>
                  <li className="mb-2">✓ वंचित समुदाय की सेवा</li>
                  <li className="mb-2">✓ मंदिर और धार्मिक गतिविधियों का रखरखाव</li>
                  <li className="mb-2">✓ शिक्षा और स्वास्थ्य सेवा को बढ़ावा</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="custom-card p-4" style={{height: '100%'}}>
                <div className="text-center mb-3">
                  <div style={{fontSize: '3rem', color: 'var(--primary)'}}><i className="fas fa-eye"></i></div>
                </div>
                <h3 className="text-center mb-3" style={{color: 'var(--secondary)'}}>हमारा दृष्टिकोण</h3>
                <p className="text-center">
                  एक सामंजस्यपूर्ण समाज का निर्माण करना जहाँ आध्यात्मिक मूल्य, सांस्कृतिक परंपराएं 
                  और आधुनिक प्रगति सभी समुदायिक सदस्यों के कल्याण के लिए मिलकर काम करें।
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ आध्यात्मिक रूप से समृद्ध समुदाय का निर्माण</li>
                  <li className="mb-2">✓ एकता और भाईचारे को बढ़ावा</li>
                  <li className="mb-2">✓ सतत विकास का सृजन</li>
                  <li className="mb-2">✓ भावी पीढ़ियों को प्रेरित करना</li>
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
              ↑ शीर्ष पर वापस जाएं
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustMembers;