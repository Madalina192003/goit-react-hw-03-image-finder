import React from 'react';
import './Modal.css';

const Modal = ({ imageURL, onClose }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
