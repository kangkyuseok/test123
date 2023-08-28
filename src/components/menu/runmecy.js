import React from 'react';
import styles from './runmecy.module.css';

const Runmecy = () => {
  


  return (
    <section>
      <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
        <div>
          <img src="img/runmecy/runmecy_main.png" alt="Seoul" className="image-background" style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

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
      <h2 style={{textAlign:'center'}}>레이저 각인기의 대중화</h2>
      <h2 style={{textAlign:'center'}}>RUNMECY</h2>
      </div>
      <div className="container">
        <div className="row container d-flex justify-content-center">
          <div className="col-lg-3 d-flex justify-content-center p-2">
            <img src="img/runmecy/001.png" alt="Image1" style={{ width: '300px', height: '300px' }} className="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-4 d-flex justify-content-center p-2">
            <img src="img/runmecy/002.png" alt="Image2" style={{ width: '300px', height: '300px' }} className="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-4 d-flex justify-content-center p-2">
            <img src="img/runmecy/003.png" alt="Image3" style={{ width: '300px', height: '300px' }} className="img-fluid" />
          </div>
          
        </div>
      </div>
        
    </section>
  );
};

export default Runmecy;
