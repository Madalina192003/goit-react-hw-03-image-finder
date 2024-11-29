import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
