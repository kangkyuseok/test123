import React from 'react';
import styles from './lifeborn.module.css';

const Runmecy = () => {
 

  return (
    <section>
      <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
        <div>
          <img src="img/brand_lifeborn.png" alt="Seoul" className="image-background" style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

          <div className="text-overlay">
          <div className="center-button">
        <a style={{fontSize:20}} href="https://www.lifeborn.kr/" className={styles['brand-button']}>브랜드로 바로가기</a>
      </div>
          </div>
          <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>

          </div>
        </div>
      </header>
      <div className='container' style={{ textAlign: 'center' }}>
        <h2 className='textAlign:center'>생활본책</h2>
        <p>당신의 생활을 높여드립니다.</p>
      </div>
      
     
      
        
    </section>
  );
};

export default Runmecy;
