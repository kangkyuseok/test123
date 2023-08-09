import React from 'react';
import { Link } from 'react-router-dom'; // React Router에서 Link 컴포넌트를 사용합니다.

const Contact = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/intro">소개</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
          <li>
            <Link to="/contact">문의</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Contact;