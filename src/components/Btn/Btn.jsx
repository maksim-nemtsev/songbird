import React from 'react';
import './Btn.css';
import { Button } from 'react-bootstrap';

const Btn = ({ onClickHandler, children }) => {
  return (
    <Button onClick={onClickHandler} type="button" className='btn'>
     {children}
    </Button>
  );
};

export default Btn;
