import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import axios from 'axios';

const API_KEY = '45861214-76b95c96ea530b9f2dd96e8b0';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = (searchQuery, pageNumber) => {
    setIsLoading(true);
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images', error);
        setIsLoading(false);
      });
  };

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    fetchImages(searchQuery, 1);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
    fetchImages(query, page + 1);
  };

  const openModal = image => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && <Button onClick={loadMoreImages} />}
      {showModal && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
