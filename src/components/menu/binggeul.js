import React from 'react';


const binggeul = () => {
    return (
        <section>
            <header className="bg-image-full" style={{ position: 'relative', minHeight: 'auto' }}>
                <div>
                    <img src="img/brand_binggeul.png" alt="Seoul" className="image-background" style={{ top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

                    <div className="text-overlay">
                        <p><a style={{ color: 'white', textDecoration: 'none' }} href='https://www.binggeul.com'>binggeul,</a></p>
                        <p><a style={{ color: 'white', textDecoration: 'none' }} href='https://www.binggeul.com'>브랜드 바로가기</a></p>
                    </div>
                    <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>



                    </div>


                </div>
            </header>
            <div className=' m-5'>
                <h2 style={{ textAlign: 'center' }}>BINGGEUL</h2>
                <h2 style={{ textAlign: 'center' }}>다시 동심으로,</h2>
            </div>
            <div className="container">
                <div className="row container d-flex justify-content-center">
                    <div className="col-4 d-flex justify-content-center p-2">
                        <img src="img/binggeul/002.jpg" alt="Image1" className="img-fluid-runmecy" />
                    </div>
                    <div className="col-4 d-flex justify-content-center p-2">
                        <img src="img/binggeul/004.jpg" alt="Image2" className="img-fluid-runmecy" />
                    </div>
                    <div className="col-4 d-flex justify-content-center p-2">
                        <img src="img/binggeul/003.jpg" alt="Image3" className="img-fluid-runmecy" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default binggeul;
