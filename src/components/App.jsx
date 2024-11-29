import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState(''); // Definirea variabilei query
  const [images, setImages] = useState([]);

  // Funcția pentru a căuta imagini folosind query
  const searchImages = async () => {
    if (query) {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&key=45861214-76b95c96ea530b9f2dd96e8b0&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      setImages(data.hits);
    }
  };

  useEffect(() => {
    if (query) {
      searchImages(); // Apelăm funcția searchImages atunci când query se schimbă
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)} // Actualizăm query cu ceea ce scrie utilizatorul
        placeholder="Search for images"
      />
      <div>
        {images.map(image => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
}

export default App;
