import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
}

export default ImageGallery;
