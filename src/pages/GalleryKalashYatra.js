import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry from 'react-masonry-css';
import { createPlaceholder } from '../utils/imageOptimizer';

// Import all Kalash Yatra images
import img1 from '../assets/images/Kalash Yatra/1A2A5581.JPG';
import img2 from '../assets/images/Kalash Yatra/1A2A5587.JPG';
import img3 from '../assets/images/Kalash Yatra/1A2A5599.JPG';
import img4 from '../assets/images/Kalash Yatra/1A2A5617.JPG';
import img5 from '../assets/images/Kalash Yatra/1A2A5618.JPG';
import img6 from '../assets/images/Kalash Yatra/1A2A5619.JPG';
import img7 from '../assets/images/Kalash Yatra/1A2A5631.JPG';
import img8 from '../assets/images/Kalash Yatra/1A2A5645.JPG';
import img9 from '../assets/images/Kalash Yatra/1A2A5661.JPG';
import img10 from '../assets/images/Kalash Yatra/1A2A5664.JPG';
import img11 from '../assets/images/Kalash Yatra/1A2A5667.JPG';
import img12 from '../assets/images/Kalash Yatra/1A2A5676.JPG';
import img13 from '../assets/images/Kalash Yatra/1A2A5688.JPG';
import img14 from '../assets/images/Kalash Yatra/1A2A5709.JPG';
import img15 from '../assets/images/Kalash Yatra/1A2A5736.JPG';
import img16 from '../assets/images/Kalash Yatra/1A2A5745.JPG';
import img17 from '../assets/images/Kalash Yatra/1A2A5785.JPG';
import img18 from '../assets/images/Kalash Yatra/1A2A5796.JPG';
import img19 from '../assets/images/Kalash Yatra/1A2A5817.JPG';
import img20 from '../assets/images/Kalash Yatra/1A2A5875.JPG';

const GalleryKalashYatra = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const kalashYatraImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
  ];



  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Kalash Yatra Gallery</h1>
            <p className="text-center lead mb-5">
              Sacred moments from the holy Kalash Yatra - when devotees carry holy water to the temple in a divine procession
            </p>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="custom-card p-4">
              <h2 className="text-center mb-3">Significance of Kalash Yatra</h2>
              <p className="text-center">
                Kalash Yatra is a sacred Hindu tradition where devotees carry vessels filled with holy Ganga water 
                in a procession to the temple. This journey symbolizes devotion, faith, and surrender to the divine.
              </p>
            </div>
          </div>
        </div>
        
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 3,
            700: 2,
            500: 2
          }}
          className="gallery-masonry"
          columnClassName="gallery-masonry-column"
        >
          {kalashYatraImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <LazyLoadImage
                src={image}
                alt={`Kalash Yatra ${index + 1}`}
                className="img-fluid gallery-lazy-image"
                onClick={() => setSelectedImage({src: image, title: `Kalash Yatra - Photo ${index + 1}`})}
                effect="blur"
                threshold={100}
                loading="lazy"
                decoding="async"
                placeholderSrc={createPlaceholder()}
                visibleByDefault={index < 11} // Load first 11 images immediately
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </Masonry>
        
        {/* Simple Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
              <h5>{selectedImage.title}</h5>
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
          </div>
        )}
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="custom-card p-5">
              <h2 className="text-center mb-4">Features of Kalash Yatra</h2>
              <div className="row">
                <div className="col-md-6">
                  <h4>Religious Significance</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🕉️ Sanctity of holy Ganga water</li>
                    <li className="mb-2">🚩 Collective devotional spirit</li>
                    <li className="mb-2">🎵 Journey with bhajans and kirtans</li>
                    <li className="mb-2">🙏 Chanting mantras and aarti</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Social Unity</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🤝 Participation from all communities</li>
                    <li className="mb-2">👥 Community spirit</li>
                    <li className="mb-2">🎭 Cultural tradition</li>
                    <li className="mb-2">💝 Service and dedication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Yatra Route</h3>
              <p>Sacred journey starting from Ganga banks to Kailashpur Temple</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Devotee Community</h3>
              <p>Thousands of devotees participate in this journey with faith and devotion</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Spiritual Merit</h3>
              <p>Participating in this sacred journey brings immense spiritual merit and blessings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryKalashYatra;