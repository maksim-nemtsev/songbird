import React from 'react';
import './BirdList.css';

import BirdListItem from './BirdListItem';

const BirdList = ({ birds, onClickBird, randomBirdId, answered }) => {
  const birdsList = birds.map((el) => {
    return (
      <BirdListItem
        answered={answered}
        randomBirdId={randomBirdId}
        key={el.id}
        onClickBird={onClickBird}
        birdListData={el}
      />
    );
  });
  return <ul className="list-group">{birdsList}</ul>;
};

export default BirdList;
