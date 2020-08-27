import React from 'react';
import './RandomBird.css';

import birdPictures from '../../assets/img/bird.png';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const RandomBIrd = ({ answered, birdData }) => {
  return (
    <div className="random-bird jumbotron rounded d-flex">
      <img className="random-bird_image" src={birdPictures} alt="bird" />
      <div className="random-list">
        <ul className="random-list_bird-list">
          <li className="random-list_bird-list-item">
            <h2>{answered ? birdData.name : '******'}</h2>
          </li>
          <li className="random-list_bird-list-item">
            <AudioPlayer
              src={birdData.audio}
              showJumpControls={false}
              autoPlayAfterSrcChange={false}
              customAdditionalControls={[]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBIrd;
