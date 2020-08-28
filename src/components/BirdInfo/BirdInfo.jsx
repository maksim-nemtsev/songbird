import React from 'react';
import './BirdInfo.css';

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const BirdInfo = ({ selectedAnswer }) => {

  return (
    <div className='bird-info card'>
      {!selectedAnswer ? (
        <div>
          <span>Послушайте плеер и выберите  птицу из списка !</span>
          
        </div>
      ) : (
        <div className="bird-info">
          <img src={selectedAnswer.image} alt="bird" className="bird-image" />
          <div className="bird-info-list">
            <ul className="list-group">
              <li className="list-group-item">
                <h5>{selectedAnswer.name}</h5>
              </li>
              <li className="list-group-item">
                <h3>{selectedAnswer.species}</h3>
              </li>
              <li className="list-group-item">
                <h6>{selectedAnswer.description}</h6>
              </li>
            </ul>
          </div>
          <AudioPlayer
            src={selectedAnswer.audio}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            customAdditionalControls={[]}
          />
        </div>
      )}
    </div>
  );
};

export default BirdInfo;
