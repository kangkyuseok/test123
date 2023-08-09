import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <img className="image-background" src="/public/squarelogo.png" alt="Background" />
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/intro">Brand</Link>
          </li>
          <li>
            <Link to="/board">Contact</Link>
          </li>
          <li>
            <Link to="/contact">문의</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;