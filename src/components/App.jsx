import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState(''); // Variabila query
  const [images, setImages] = useState([]);

  // Funcția de căutare care folosește query pentru a apela API-ul
  const searchImages = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&key=45861214-76b95c96ea530b9f2dd96e8b0&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    setImages(data.hits);
  };

  // Apelarea funcției searchImages la schimbarea valorii query
  useEffect(() => {
    if (query) {
      searchImages(); // Se face căutarea dacă există un query
    }
  }, [query]); // Depinde de query

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
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
