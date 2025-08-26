import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry from 'react-masonry-css';
import { createPlaceholder } from '../utils/imageOptimizer';
import image from '../assets/img1.jpg';

const GalleryOther = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const otherImages = [image];

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">Other Gallery</h1>
            <p className="text-center lead mb-5">
              अन्य तस्वीरें - Other memorable moments and events
            </p>
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
          {otherImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <LazyLoadImage
                src={image}
                alt={`Other Image ${index + 1}`}
                className="img-fluid gallery-lazy-image compressed-image"
                onClick={() => setSelectedImage({src: image, title: `Other - Photo ${index + 1}`})}
                effect="blur"
                threshold={200}
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                placeholderSrc={createPlaceholder(320, 240)}
                visibleByDefault={index < 6}
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                  objectFit: 'cover'
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
      </div>
    </div>
  );
};

export default GalleryOther;