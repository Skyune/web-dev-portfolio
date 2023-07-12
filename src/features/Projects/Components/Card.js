import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Card.scss';

const Card = ({ image, image2,  index }) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const cardStyles = {
  
  };

  if (isMobile) {
    return (
      <div className="parallax-effect-img ">
        <img src={image} alt="" />
        <div className="inner-element">
          <img src={image2} alt="" />
        </div>
      </div>
    );
  }

  return (
    <Tilt
      className="parallax-effect-img " 
      style={cardStyles}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={800}
      transitionSpeed={1500}
      scale={1}
      gyroscope={true}
    >
      <img src={image} alt="" />
      <div className="inner-element">
        <img src={image2} alt="" />
      </div>
    </Tilt>
  );
};

export default Card;
