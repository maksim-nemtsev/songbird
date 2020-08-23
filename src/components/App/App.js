import React, { useState } from 'react';
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
  const [answered, setAnswered] = useState(false);
  const [category, setCategory] = useState(0);
  const [randomBirdNumber, setRandomBirdNumber] = useState(randomNumber());

  const randomBird = birdsData[category][randomNumber()];

  return (
    <div className="container">
      <Header />
      <RandomBIrd birdData={birdsData[category][randomBirdNumber]} answered={answered} />

      <div className="row mb2">
        <div className="col-lg-6">
          <BirdList birds={birdsData[category]} />
        </div>
        <div className="col-lg-6">
          <BirdInfo />
        </div>
      </div>
      <Btn />
    </div>
  );
};

export default App;
