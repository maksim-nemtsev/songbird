import React, { useState, useEffect } from 'react';
import './BirdList.css';

import error from '../../assets/error.mp3';
import success from '../../assets/success.mp3';

const BirdListItem = ({ birdListData, onClickBird, randomBirdId, answered }) => {
  const [addedClass, setAddedClass] = useState('');
  const [answerClicked, setAnswerClicked] = useState(false);

  useEffect(() => {
    setAddedClass('');
    setAnswerClicked(false);
  }, [birdListData]);

  const handleClickBird = () => {
    if (answered || answerClicked) {
      return;
    }

    if (randomBirdId === birdListData.id) {
      setAddedClass('success');
      new Audio(success).play();
    } else {
      setAddedClass('error');
      new Audio(error).play();
    }
    
    setAnswerClicked(true);
    onClickBird(birdListData.id);
  };

  return (
    <li className={`list-group-item ${addedClass}`} key={birdListData.id} onClick={handleClickBird}>
      <span className="answer"></span>
      {birdListData.name}
    </li>
  );
};

export default BirdListItem;
