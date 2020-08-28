import React, { useState, useEffect } from 'react';
import './App.css';

import birdsData from '../../data/bird';

import Header from '../Header/';
import BirdList from '../BirdList';
import Btn from '../Btn/';
import BirdInfo from '../BirdInfo/';
import RandomBIrd from '../RandomBird/';
import GameOver from '../GameOver/GameOver';

const randomNumber = () => {
  return Math.floor(Math.random() * 6);
};

const App = () => {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(5);
  const [answered, setAnswered] = useState(false);
  const [category, setCategory] = useState(0);
  const [randomBirdNumber, setRandomBirdNumber] = useState(randomNumber());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);

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
      setGameOver(true);
      setCategory(0);
    } else {
      setCategory(category + 1);
      setRandomBirdNumber(randomNumber());
    }
    setMaxScore(5);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const onClickBirdHandler = (id) => {
    console.log('id', id);
    setSelectedAnswer(birdsData[category].find((bird) => bird.id === id));

    if (randomBird.id === id) {
      setScore(score + maxScore);
      setAnswered(true);
    } else {
      setMaxScore(maxScore - 1);
    }
  };

  const onGameOverClickHandler = () => {
    setScore(0);
    setGameOver(false);
    setMaxScore(5);
  };

  return (
    <div className="container" >
      <Header activeCategory={category} score={score} />
      {!gameOver ? (
        <div>
          <RandomBIrd birdData={birdsData[category][randomBirdNumber]} answered={answered} />
          <div className="row mb2">
            <div className="col-lg-3">
              <BirdList
                answered={answered}
                randomBirdId={randomBird.id}
                onClickBird={onClickBirdHandler}
                birds={birdsData[category]}
              />
            </div>
            <div className="col-lg-9">
              <BirdInfo selectedAnswer={selectedAnswer} />
            </div>
          </div>
          <div className='btn-bottom'>
            <Btn active={answered} onClickHandler={onNextRoundHandler}>
              Следующая птичка
            </Btn>
          </div>
        </div>
      ) : (
        <GameOver score={score} onGameOverClick={onGameOverClickHandler} />
      )}
    </div>
  );
};

export default App;
