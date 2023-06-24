import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Card.scss';

const Card = ({ image }) => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={5}
    tiltMaxAngleY={5}
    perspective={800}
    transitionSpeed={1500}
    scale={1}
    gyroscope={true}
  >
    <img src={image} alt="" />
    <div
      className="inner-element"
    
    >Hey</div>
  </Tilt>
);

export default Card;