import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <hr></hr>
    <div className="container">
      <div className="row">
        <div className="col-md-0">
          <div className='m-0'>
            <p>상호 : (주)스퀘어컴퍼니</p>
            <p>주소 : 서울특별시 강남구 논현로 105길 87, B103~105</p>
            
          </div>
        </div>
        <div className="col-md-0">
          <div className='m-0'> 
            <p>대표번호 : 070-4647-4827</p>
            <p>이메일 : example@example.com</p>
          </div>
        </div>
        
      </div>
    </div> 
  
    <div className="container">
  <p className="m-1 text-center">
    
    Copyright &copy; 2023 (주) 스퀘어컴퍼니. All rights reserved.
  </p>
</div>
  </footer>
  
  );
};

export default Footer;