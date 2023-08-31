import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <div className="logo-container" style={{ background: 'rgba(0, 0, 0)' }}>
                    <a  href='/'><img src="img/squarelogowhite.png" alt="Logo" style={{ width: '70px' }} /></a>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid px-0">
                        <button className="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '5px' }}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="#about-section">About</a></li>
                                <li className="nav-item"><Link className="nav-link" to="/brand">Brand</Link></li>
                                <li className="nav-item"><a className="nav-link" href="#Contact-section">Contact</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>

            
            </div>
            <div id="content"></div>
    <script src="navScript.js"></script>
        </header>
        
  );
};
// DOMContentLoaded 이벤트를 사용하여 페이지가 로드된 후에 실행되도록 합니다.
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // 기본 동작 취소
            const href = link.getAttribute("href"); // 링크 주소 가져오기
            const brandName = href.split("/")[1]; // 주소에서 브랜드 이름 가져오기
            displayBrandContent(brandName); // 함수 호출
        });
    });
});

// 브랜드 컨텐츠를 표시하는 함수
function displayBrandContent(brandName) {
    const contentDiv = document.getElementById("content");
    
    // AJAX 등을 사용하여 브랜드 페이지의 내용을 가져와서 표시할 수도 있습니다.
    // 여기에서는 간단히 문자열로 표시합니다.
    contentDiv.innerHTML = `<h1>${brandName} Page</h1>`;
}

export default Header;
