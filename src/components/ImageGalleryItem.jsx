import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li style={{ listStyle: 'none', margin: '0' }}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;
