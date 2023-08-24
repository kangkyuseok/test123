import React, { useState, useEffect  } from 'react';
import styles from './runmecy.module.css';

const Runmecy = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
        <div>
          <img src="img/brand_runmecy.png" alt="Seoul" className="image-background" style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

          <div className="text-overlay">
          <div className="center-button">
        <a style={{fontSize:20}} href="https://www.runmecy.kr/" className={styles['brand-button']}>브랜드로 바로가기</a>
      </div>
          </div>
          <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>

          </div>
        </div>
      </header>
      

      <div className={`scroll-up ${scrollActive ? 'active' : ''}`}>
        <div className={`container ${scrollActive ? 'slide-animation' : ''}`}>
          <img
            src="img/detail/runmecydetail.JPG"
            alt='브랜드 런머시'
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Runmecy;
