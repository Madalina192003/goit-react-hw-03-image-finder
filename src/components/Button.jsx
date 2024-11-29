import React from 'react';
import './Button.css';

const Button = ({ onClick }) => (
  <button className="load-more" onClick={onClick}>
    Load more
  </button>
);

export default Button;
