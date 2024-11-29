import React from 'react';
import { Oval } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader">
      <Oval color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Loader;
