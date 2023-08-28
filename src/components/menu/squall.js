import React from 'react';
import styles from './runmecy.module.css';

const Squall = () => {
  


  return (
    <section>
      <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
        <div>
          <img src="img/squall/squall_main.jpg" alt="Seoul" className="image-background" style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

          <div className="text-overlay">
          <div className="center-button">
        <a style={{fontSize:20}} href="https://www.runmecy.kr/" className={styles['brand-button']}>브랜드로 바로가기</a>
      </div>
          </div>
          <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>

          </div>
        </div>
      </header>
      
      <div className=' m-5'>
      <h2 style={{textAlign:'center'}}>SQAULL</h2>
      <p style={{textAlign:'center'}}>날씨가 변해도 당신의 계획은 그대로</p>
      </div>
      <div className="container">
        <div className="row container d-flex justify-content-center">
          <div className="col-4 d-flex justify-content-center p-2">
            <img src="img/squall/001.png" alt="Image1" className="img-fluid" />
          </div>
          <div className="col-4 d-flex justify-content-center p-2">
            <img src="img/squall/002.png" alt="Image2" className="img-fluid" />
          </div>
          <div className="col-4 d-flex justify-content-center p-2">
            <img src="img/squall/003.png" alt="Image3" className="img-fluid" />
          </div>
          
        </div>
      </div>
        
    </section>
  );
};

export default Squall;
