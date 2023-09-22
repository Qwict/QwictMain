import React from 'react';
import './Header.css';
import Image from '../../media/QwictImage.png';

const QwictHeaderImage = () => {
  return (
      <img
        src={Image}
        draggable="false" 
        alt="Centered Image"
        className="centered-image"
        />
  );
};

export default QwictHeaderImage;