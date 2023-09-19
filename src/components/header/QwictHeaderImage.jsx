import React from 'react';
import './Header.css';
import Image from '../../media/QwictImage.png';

const QwictHeaderImage = () => {
  return (
    <div className="center-div">
      {/* Centered Image */}
      <img
        src={Image}
        alt="Centered Image"
        className="centered-image"
      />
    </div>
  );
};

export default QwictHeaderImage;