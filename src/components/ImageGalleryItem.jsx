import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
