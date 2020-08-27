import React, { useState, useEffect } from 'react';
import './App.css';

import birdsData from '../../data/bird';

import Header from '../Header/';
import BirdList from '../BirdList';
import Btn from '../Btn/';
import BirdInfo from '../BirdInfo/';
import RandomBIrd from '../RandomBird/';

const randomNumber = () => {
  return Math.floor(Math.random() * 6);
};

const App = () => {
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(5)
  const [answered, setAnswered] = useState(false);
  const [category, setCategory] = useState(0);
  const [randomBirdNumber, setRandomBirdNumber] = useState(randomNumber());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const randomBird = birdsData[category][randomBirdNumber];
  console.log('randomBird: ', randomBird);

  useEffect(() => {
    console.log('correct bird:', randomBird.name);
  }, [randomBird]);

  const onNextRoundHandler = () => {
    if (!answered) {
      return;
    }

    if (category === birdsData.length - 1) {
      setCategory(0);
    } else {
      setCategory(category + 1);
      setRandomBirdNumber(randomNumber());
    }
    setMaxScore(5)
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const onClickBirdHandler = (id) => {
    console.log("id", id)
    setSelectedAnswer(birdsData[category].find((bird) => bird.id === id));

    if (randomBird.id === id) {
      setScore(score + maxScore)
      setAnswered(true);
    } else {
      setMaxScore(maxScore - 1)
    }
  };

  return (
    <div className="container">
      <Header score={score} />
      <RandomBIrd birdData={birdsData[category][randomBirdNumber]} answered={answered} />
      <div className="row mb2">
        <div className="col-lg-6">
          <BirdList
            answered={answered}
            randomBirdId={randomBird.id}
            onClickBird={onClickBirdHandler}
            birds={birdsData[category]}
          />
        </div>
        <div className="col-lg-6">
          <BirdInfo selectedAnswer={selectedAnswer} />
        </div>
      </div>
      <div>
        <Btn active={answered} onClickHandler={onNextRoundHandler}/>
      </div>
    </div>
  );
};

export default App;
