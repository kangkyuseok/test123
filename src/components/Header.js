import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header className={isScrolled ? "scrolled" : ""}>
        <div>
            
            
            <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>
                <div className="logo-container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <a href='/'><img src="img/squarelogowhite.png" alt="Logo" style={{ width: '70px' }} /></a>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid px-0">
                        <button className="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '5px' }}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="#about-section">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Brand-section">Brand</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Contact-section">Contact</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>

            
            </div>
        </header>
  );
};

export default Header;
