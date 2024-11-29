import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async searchQuery => {
    setIsLoading(true);
    const response = await fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=45861214-76b95c96ea530b9f2dd96e8b0&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    setImages(data.hits);
    setIsLoading(false);
  };

  const handleSearchSubmit = searchQuery => {
    fetchImages(searchQuery);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading && <p>Loading...</p>}
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
