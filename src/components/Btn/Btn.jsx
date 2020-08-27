import React from 'react';
import './Btn.css';
import { Button } from 'react-bootstrap';

const Btn = ({ onClickHandler, active }) => {
  return (
    <Button onClick={onClickHandler} type="button" className={`btn ${active && 'btn-done'}`}>
     Next
    </Button>
  );
};

export default Btn;
