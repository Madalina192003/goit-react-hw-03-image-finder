import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <header style={{ backgroundColor: '#2a2a2a', padding: '20px' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <button
          type="submit"
          style={{
            backgroundColor: '#00bfff',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span>Search</span>
        </button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          style={{ width: '300px', padding: '10px', marginLeft: '10px' }}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
