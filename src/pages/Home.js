import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Element, Link as ScrollLink } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import profileImg from '../assets/images/profile.jpg';

// Import some images from Kalash Yatra
import kalash1 from '../assets/images/Kalash Yatra/1A2A5581.JPG';
import kalash2 from '../assets/images/Kalash Yatra/1A2A5617.JPG';
import kalash3 from '../assets/images/Kalash Yatra/1A2A5645.JPG';

// Import some images from Pran Pratistha
import pran1 from '../assets/images/Pran Pratishtha/113A2011.JPG';
import pran2 from '../assets/images/Pran Pratishtha/113A2133.JPG';
import pran3 from '../assets/images/Pran Pratishtha/113A2320.JPG';

const Home = () => {
  const trustMembers = [
    { name: "Shri Ram Sharma", position: "President", image: profileImg },
    { name: "Shri Shiv Kumar", position: "Secretary", image: profileImg },
    { name: "Smt. Sita Devi", position: "Treasurer", image: profileImg },
    { name: "Shri Hanuman Das", position: "Vice President", image: profileImg },
    { name: "Shri Krishna Gopal", position: "Joint Secretary", image: profileImg },
    { name: "Smt. Radha Sharma", position: "Member", image: profileImg }
  ];

  const galleryImages = [kalash1, kalash2, pran1, kalash3, pran2, pran3];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="hindi-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            कैलाशपुर शिव राम सेवा संस्थान ट्रस्ट
          </motion.h1>
          <motion.p 
            className="verse hindi-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
अर्थ: धर्म से ही धन, सुख तथा सब कुछ प्राप्त होता है । इस संसार में धर्म ही सार वस्तु है ।          </motion.p>
        </motion.div>
      </section>

  

      {/* Trust Members Preview */}
      <Element name="trust-members">
        <section className="section" >
          <div className="container-fluid">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trust Members
            </motion.h2>
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={30}
              slidesPerView={'auto'}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              speed={3000}
              loop={true}
              loopedSlides={trustMembers.length * 3}
              grabCursor={true}
              className="w-100"
            >
              {[...trustMembers, ...trustMembers, ...trustMembers].map((member, index) => (
                <SwiperSlide key={index} style={{width: '350px'}}>
                  <div className="custom-card h-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="card-img-top compressed-image" 
                      style={{height: '320px', objectFit: 'cover'}} 
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text text-muted">{member.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center" style={{marginTop: '30px'}}>
              <Link to="/trust-members" className="btn btn-primary me-3">View All Members</Link>
             
            </div>
          </div>
        </section>
      </Element>

      {/* Gallery Preview */}
      <Element name="gallery">
        <section className="section">
          <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Photo Gallery
          </motion.h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="compressed-image"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="d-inline-block me-3">
              <Link to="/gallery/kalash-yatra" className="btn btn-primary">Kalash Yatra</Link>
            </motion.span>
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="d-inline-block">
              <Link to="/gallery/pran-pratistha" className="btn btn-primary">Pran Pratistha</Link>
            </motion.span>
          </motion.div>
        </div>
      </section>
      </Element>

      {/* Videos Section */}
      <section className="section" style={{backgroundColor: 'white'}}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Videos
          </motion.h2>
          <div className="row justify-content-center">
            <motion.div 
              className="col-md-8 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="ratio ratio-16x9"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe 
                  src="https://www.youtube.com/embed/NEEl0Qbs01Y" 
                  title="Kailashpur Temple Video"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;