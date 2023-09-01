import React, { useState, useEffect } from 'react';
import "./header.css"

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
                


                {/* <nav class="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
            <div class="container">
            <div className="logo-container" style={{ background: 'rgba(0, 0, 0)' }}>
                    <a  href='/'><img src="img/squarelogowhite.png" alt="Logo" style={{ width: '70px' }} /></a>
                </div>
                <button class="navbar-toggler text-uppercase font-weight-bold  text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">HOME</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/brand">BRAND</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}


        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
            <div className="logo-container" style={{ background: 'rgba(0, 0, 0)' }}>
                    <a  href='/'><img src="img/squarelogowhite.png" alt="Logo" style={{ width: '70px' }} /></a>
                </div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="/brand">Brand</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
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
