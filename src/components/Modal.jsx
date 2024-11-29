import React, { useEffect } from 'react';

function Modal({ image, onClose }) {
  const closeModal = e => {
    if (e.target === e.currentTarget || e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal">
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
}

export default Modal;
