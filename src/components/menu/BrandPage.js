import React from 'react';
import './BrandPage.min.css';
import './fontawesome-all.min.css';
import './css/noscript.css';


const BrandPage = () => {


    return (
        <div id="wrapper" className="fade-in">

            <div id="intro">
                <h1>SQUARE COMPANY</h1>
                <p>Square Company Brand Introductions:</p>
                <ul className="actions">
                    <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                </ul>
            </div>

            {/* Header */}
            <header id="header">
                <a href="/" className="logo">Massively</a>
            </header>

            {/* Nav */}
            <nav id="nav">
                <ul className="links">
                    <li className="active"><a href="index.html">This is SQUARE BRAND</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="/" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                </ul>
            </nav>

            {/* Main */}
            <div id="main">

                {/* Featured Post */}
                <article className="post featured">
                    <header className="major">
                        <span className="date">April 25, 2017</span>
                        <h2><a href="/">스퀘어</a></h2>
                        <p>SQUARE is brand</p>
                    </header>
                    <a href="/" className="image main"><img src="images/pic01.jpg" alt="" /></a>
                    <ul className="actions special">
                        <li><a href="/" className="button large">Full Story</a></li>
                    </ul>
                </article>
                {/* Posts */}
                <section className="posts">
                    <article>
                        <header>
                            <span className="date">April 24, 2017</span>
                            <h2><a href="/">Lifeborn</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="img/brandimg/lifeborn_main_brand.png" alt="" /></a>
                        <p>생활의 새로움을 전합니다.</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <span className="date">April 22, 2017</span>
                            <h2><a href="/">RUNMECY</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="img/brandimg/runmecy_main_brand.png" alt="" /></a>
                        <p>당신의 일상에 특별한 각인을 해드려요.</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <span className="date">April 18, 2017</span>
                            <h2><a href="/#">BINGGEUL</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="img/brandimg/binggeul_main_brand.jpg" alt="" /></a>
                        <p>여름의 시작은 빙글과 함께..</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <span className="date">April 14, 2017</span>
                            <h2><a href="/">EVERYBOTTLE</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="img/brandimg/004.png" alt="" /></a>
                        <p>일상을 더 편리하게 해요.</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <span className="date">April 11, 2017</span>
                            <h2><a href="/">SQUALL</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="img/brandimg/squall_main_brand.png" alt="" /></a>
                        <p>날씨가 변해도 당신의 계획대로..</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                    <article>
                        <header>
                            <span className="date">April 7, 2017</span>
                            <h2><a href="/">Augue lorem<br />primis vestibulum</a></h2>
                        </header>
                        <a href="/" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                        <ul className="actions special">
                            <li><a href="/" className="button">브랜드 바로가기</a></li>
                        </ul>
                    </article>
                </section>

                {/* Footer */}
                <footer id="footer">
                    <section>
                        <form method="post" action="#">
                            <div className="fields">
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="3"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" /></li>
                            </ul>
                        </form>
                    </section>
                    <section className="split contact">
                        <section className="alt">
                            <h3>Address</h3>
                            <p>1234 Somewhere Road #87257<br />Nashville, TN 00000-0000</p>
                        </section>
                        <section>
                            <h3>Phone</h3>
                            <p><a href="/">(000) 000-0000</a></p>
                        </section>
                        <section>
                            <h3>Email</h3>
                            <p><a href="/">info@untitled.tld</a></p>
                        </section>
                        <section>
                            <h3>Social</h3>
                            <ul className="icons alt">
                                <li><a href="/" className="icon brands  alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="/" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                                <li><a href="/" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="/" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                            </ul>
                        </section>
                    </section>
                </footer>

            </div>
        </div>
    )
};

export default BrandPage;
