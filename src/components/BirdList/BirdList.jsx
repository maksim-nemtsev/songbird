import React from 'react';
import './BirdList.css';

import BirdListItem from './BirdListItem';

const BirdList = ({ birds }) => {
  const birdsList = birds.map((bird) => {
    return <BirdListItem key={bird.id} bird={bird} />;
  });
  return <ul>{birdsList}</ul>;
};

export default BirdList;
