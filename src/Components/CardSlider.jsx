import React from 'react';
import './CardSlider.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ImageCardSlider = () => {
  return (
    <div className="container">
      <div className="top-section">
        <h2>Car Model</h2>
        <p>Sector</p>
        <p>Price</p>
      </div>
      <div className="image-section">
        <div className="car-image"></div>
      </div>
      <div className="bottom-section">
        <button className="learn-more-btn">Learn More</button>
        <button className="order-online-btn">Order Online</button>
      </div>
    </div>
  );
};

export default ImageCardSlider;
