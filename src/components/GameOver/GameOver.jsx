import React from 'react';
import './GameOver.css';
import Btn from '../Btn/';

const maxScore = 30;

const GameOver = ({ score, onGameOverClick }) => {
  console.log(score);
  const winner = maxScore === score;
  if (winner) {
    return (
      <div className="game-over">
        <h1>Поздравляем !</h1>
        <h6>
          Вы победили в игре и набрали <span>{score}</span> из <span>{maxScore}</span>
        </h6>
        <Btn active={true} onClickHandler={onGameOverClick}>Поиграть еще!</Btn>
      </div>
    );
  }

  return (
    <div className="game-over">
      <h1>Поздравляем!</h1>
      <h6>
        Вы прошли викторину и набрали <span>{score}</span> из <span>{maxScore}</span> возможных
        баллов
      </h6>
      <Btn active={true} onClickHandler={onGameOverClick}>Поиграть еще!</Btn>
    </div>
  );
};
export default GameOver;
