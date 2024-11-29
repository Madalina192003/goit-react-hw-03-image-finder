import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => setSearchTerm(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;
    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
