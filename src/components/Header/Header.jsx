import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';

const birdsCategories = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const Header = () => {
  const birdsCategoriesItems = birdsCategories.map((item, idx) => {
    return (
      <li className="bird-item" key={`${item}-${idx}`}>
        <a href="/#">{item}</a>
      </li>
    );
  });

  return (
    <div className="header d-flex">
      <div className="header-img d-flex">
        <img className="header-img__logo" src={logo} alt="logo" />
        <h5>
          score:<span>1</span>
        </h5>
      </div>
      <ul className="pagination">{birdsCategoriesItems}</ul>
    </div>
  );
};

export default Header;
