import React from 'react';

const main2 = () => {
    return (
        <section>
            <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
                <div>
                    <img src="img/brand_binggeul.png" alt="Seoul" className="image-background" style={{  top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

                    <div className="text-overlay">
                        <p><a style={{color:'white'}} href='https://www.binggeul.com'>binggeul,</a></p>
                        <p><a style={{color:'white'}} href='https://www.binggeul.com'>브랜드 바로가기</a></p>
                    </div>
                    <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>



                    </div>


                </div>
            </header>

            <div className='container'>
                
                <img src="img/detail/binggeuldatail.JPG" alt='브랜드 빙글' style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}></img>
            </div>
        </section>
    );
};

export default main2;
