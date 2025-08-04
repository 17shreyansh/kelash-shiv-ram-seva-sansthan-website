import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry from 'react-masonry-css';
import { createPlaceholder } from '../utils/imageOptimizer';

// Import all Pran Pratistha images
import img1 from '../assets/images/Pran Pratishtha/113A1963.JPG';
import img2 from '../assets/images/Pran Pratishtha/113A2011.JPG';
import img3 from '../assets/images/Pran Pratishtha/113A2020.JPG';
import img4 from '../assets/images/Pran Pratishtha/113A2078.JPG';
import img5 from '../assets/images/Pran Pratishtha/113A2095.JPG';
import img6 from '../assets/images/Pran Pratishtha/113A2133.JPG';
import img7 from '../assets/images/Pran Pratishtha/113A2172.JPG';
import img8 from '../assets/images/Pran Pratishtha/113A2180.JPG';
import img9 from '../assets/images/Pran Pratishtha/113A2196.JPG';
import img10 from '../assets/images/Pran Pratishtha/113A2211.JPG';
import img11 from '../assets/images/Pran Pratishtha/113A2240.JPG';
import img12 from '../assets/images/Pran Pratishtha/113A2320.JPG';
import img13 from '../assets/images/Pran Pratishtha/113A2339.JPG';
import img14 from '../assets/images/Pran Pratishtha/113A2371.JPG';
import img15 from '../assets/images/Pran Pratishtha/113A2374.JPG';
import img16 from '../assets/images/Pran Pratishtha/113A2386.JPG';
import img17 from '../assets/images/Pran Pratishtha/113A2393.JPG';
import img18 from '../assets/images/Pran Pratishtha/113A2452.JPG';
import img19 from '../assets/images/Pran Pratishtha/113A2480.JPG';
import img20 from '../assets/images/Pran Pratishtha/113A2481.JPG';
import img21 from '../assets/images/Pran Pratishtha/113A2482.JPG';
import img22 from '../assets/images/Pran Pratishtha/113A2488.JPG';
import img23 from '../assets/images/Pran Pratishtha/113A2491.JPG';
import img24 from '../assets/images/Pran Pratishtha/113A2503.JPG';
import img25 from '../assets/images/Pran Pratishtha/113A2510.JPG';
import img26 from '../assets/images/Pran Pratishtha/113A2525.JPG';
import img27 from '../assets/images/Pran Pratishtha/113A2675.JPG';
import img28 from '../assets/images/Pran Pratishtha/113A2685.JPG';
import img29 from '../assets/images/Pran Pratishtha/113A2709.JPG';
import img30 from '../assets/images/Pran Pratishtha/113A2749.JPG';
import img31 from '../assets/images/Pran Pratishtha/113A2760.JPG';
import img32 from '../assets/images/Pran Pratishtha/113A2775.JPG';
import img33 from '../assets/images/Pran Pratishtha/113A2806.JPG';
import img34 from '../assets/images/Pran Pratishtha/113A2824.JPG';
import img35 from '../assets/images/Pran Pratishtha/113A2891.JPG';
import img36 from '../assets/images/Pran Pratishtha/113A2894.JPG';
import img37 from '../assets/images/Pran Pratishtha/113A2937.JPG';
import img38 from '../assets/images/Pran Pratishtha/113A2971.JPG';
import img39 from '../assets/images/Pran Pratishtha/113A2990.JPG';

const GalleryPranPratistha = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pranPratisthaImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39
  ];



  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Pran Pratistha Gallery</h1>
            <p className="text-center lead mb-5">
              Sacred moments from the Pran Pratistha ceremony - when divine life is invoked into the temple deities
            </p>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="custom-card p-4">
              <h2 className="text-center mb-3">Significance of Pran Pratistha</h2>
              <p className="text-center">
                Pran Pratistha is a sacred Vedic ritual where divine life is invoked into the temple deities. 
                After this ceremony, the idol transforms from mere stone or metal into a living embodiment of the divine.
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
          {pranPratisthaImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <LazyLoadImage
                src={image}
                alt={`Pran Pratistha ${index + 1}`}
                className="img-fluid gallery-lazy-image"
                onClick={() => setSelectedImage({src: image, title: `Pran Pratistha - Photo ${index + 1}`})}
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
              <h2 className="text-center mb-4">Pran Pratistha Process</h2>
              <div className="row">
                <div className="col-md-6">
                  <h4>Vedic Rituals</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🕉️ Ganesh puja and kalash installation</li>
                    <li className="mb-2">📿 Chanting of Vedic mantras</li>
                    <li className="mb-2">🔥 Havan and yagna ceremonies</li>
                    <li className="mb-2">💧 Abhishek and sacred bath</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Puja Materials</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">🌸 Flowers and garlands</li>
                    <li className="mb-2">🥥 Coconut and fruits</li>
                    <li className="mb-2">🕯️ Lamps and incense</li>
                    <li className="mb-2">🍯 Panchamrit and holy water</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="custom-card p-4">
              <h2 className="text-center mb-4">Steps of Pran Pratistha</h2>
              <div className="row">
                <div className="col-md-6">
                  <ol className="list-unstyled">
                    <li className="mb-3"><strong>1. Sankalp:</strong> Taking vows and invoking Lord Ganesha</li>
                    <li className="mb-3"><strong>2. Kalash Installation:</strong> Setting up sacred water vessels</li>
                    <li className="mb-3"><strong>3. Mantra Chanting:</strong> Recitation of Vedic mantras</li>
                  </ol>
                </div>
                <div className="col-md-6">
                  <ol className="list-unstyled" start="4">
                    <li className="mb-3"><strong>4. Pran Invocation:</strong> Invoking divine life into the deity</li>
                    <li className="mb-3"><strong>5. Abhishek:</strong> Sacred bathing of the idol</li>
                    <li className="mb-3"><strong>6. Aarti:</strong> Final aarti and prasad distribution</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Spiritual Significance</h3>
              <p>After Pran Pratistha, divine power resides in the idol and devotees' wishes are fulfilled</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Vedic Tradition</h3>
              <p>This sacred ritual was performed by qualified priests following ancient Vedic traditions</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="custom-card text-center p-4">
              <h3>Divine Experience</h3>
              <p>All devotees present during this sacred occasion experienced divine bliss and peace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPranPratistha;