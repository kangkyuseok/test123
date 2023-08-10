import React from 'react';
import { Link } from 'react-router-dom'; // React Router에서 Link 컴포넌트를 사용합니다.
import './header.css';

const Header = () => {
  return (
    <header>
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