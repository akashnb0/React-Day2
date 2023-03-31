import React from 'react';
import './ImageSlider.css'
import { Slider } from '@mui/material';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider className="slider" {...settings}>
      <div>
        <img className="slider-image" src="https://imageio.forbes.com/specials-images/imageserve/6225f2418a4efde06090a147/Volvo-XC40-Recharge-on-a-street/960x0.jpg?format=jpg&width=960" alt="image1" />
      </div>
      <div>
        <img className="slider-image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.volvocars.com%2Fin%2Fcars%2Fxc40-electric%2F&psig=AOvVaw2mhasg6x-Hp8cHcItZqD0C&ust=1680202468147000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiS9ozogf4CFQAAAAAdAAAAABAS" />
      </div>
      <div>
        <img className="slider-image" src="https://imageio.forbes.com/specials-images/imageserve/6225f2418a4efde06090a147/Volvo-XC40-Recharge-on-a-street/960x0.jpg?format=jpg&width=960" alt="image3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
