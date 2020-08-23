import React from 'react';

const BirdListItem = ({ birdListData, onClickBird }) => {

  const handleClickBird = () => {
    onClickBird(birdListData.id);
  };
  console.log(handleClickBird)

  return (
    <li className="list-group-item" key={birdListData.id} onClick={handleClickBird}>
      <span></span>
      {birdListData.name}
    </li>
  );
};

export default BirdListItem;
