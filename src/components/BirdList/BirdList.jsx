import React from 'react';
import './BirdList.css';

import BirdListItem from './BirdListItem';

const BirdList = ({ birds, onClickBird }) => {
  const birdsList = birds.map((el) => {
    return <BirdListItem key={el.id} onClickBird={onClickBird} birdListData={el} />;
  });
  return <ul className='list-group'>{birdsList}</ul>;
};

export default BirdList;
