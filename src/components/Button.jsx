import React from 'react';

function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;
