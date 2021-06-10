import React from 'react';
import CarouselGallery from './CarouselGallery';

import './styles.css';

const Gallery = () => {
    return (
        <div className="container" id="gallery">
            <div className="galleryWrapper">
                <div className="galleryHeading"><h1>Gallery</h1></div>
                <div className="gallery-content">
                    <CarouselGallery />
                </div>
            </div>
        </div>
    )
}

export default Gallery
