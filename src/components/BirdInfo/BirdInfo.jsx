import React from 'react';
import './BirdInfo.css';

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const BirdInfo = ({ selectedAnswer }) => {
  console.log(selectedAnswer);
  return (
    <div>
      {!selectedAnswer ? (
        <div>dfdfdf</div>
      ) : (
        <div className="bird-info">
          <img src={selectedAnswer.image} alt="bird" className="bird-image"/>
          <div className="bird-info-list">
            <ul className="list-group">
              <li className="list-group-item">
                <h5>{selectedAnswer.name}</h5>
              </li>
              <li className="list-group-item">
                <h5>{selectedAnswer.species}</h5>
              </li>
              <li className="list-group-item">
                <h5>{selectedAnswer.description}</h5>
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
