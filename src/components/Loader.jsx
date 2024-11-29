import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <InfinitySpin width="200" color="#4a90e2" />
  </div>
);

export default Loader;
