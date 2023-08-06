import React from 'react';
import Slider from './components/Slider';

const App = () => {

  const images = [
    '/images/image 22.png',
    '/images/image 33.png',
    '/images/image 44.png',
  ];


  return (
    <div>
      <h1>Фотографии</h1>
      <Slider images={images} />
    </div>
  );
};

export default App;
