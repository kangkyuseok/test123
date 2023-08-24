import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const main1 = () => {
        const handleSubmit = async (e) => {
                e.preventDefault();

                const formData = {
                        email: e.target.email.value,
                        category: e.target.category.value,
                        name: e.target.name.value,
                        phone: e.target.phone.value,
                        message: e.target.message.value
                };

                console.log("보내려는 데이터:", formData);  // 여기를 추가

                try {
                        const response = await axios.post('/send-email', formData);
                        console.log(response.data);
                } catch (error) {
                        console.error("이메일을 보내는 중 오류가 발생했습니다.", error);
                }
        };
        return (

                <section>
                        <header className="py-5 bg-image-full" style={{ position: 'relative', minHeight: '1000px' }}>
                                <div>
                                        <video autoPlay loop muted className="video-background" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                                                <source src="img/seoul.mp4" type="video/mp4" />
                                        </video>
                                        <div className="text-overlay">
                                                <p>Everywhere,</p>
                                                <p>We Are</p>
                                        </div>
                                        <div className="logo-nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', position: 'fixed', top: '2%', left: 0, right: 0, zIndex: 2 }}>



                                        </div>

                                        <div className="container">
                                                <div className="image-overlay">
                                                        <img src="img/about.png" alt="About" className="centered-image" id="about-section" />
                                                </div>
                                        </div>
                                </div>
                        </header>
                        <div class="container">
                                <div class="text-container1 p-4" >
                                        <p> 우리는 브랜드의 힘과 영향력을 믿습니다.</p>
                                        <p>우리의 비전은 다양한 시장에서 가장 독특하고 혁신적인 브랜드를 구축하고, 그들을 통해 사회와 경제의 변화를 주도하는 것입니다.</p>
                                        <p>우리는 지속가능한 비즈니스 모델을 중요하게 생각하며, 고객과 협력 파트너들의 만족도를 최우선으로 합니다.</p>
                                </div>
                        </div>


                        <div className="container" style={{ backgroundImage: "url('img/bg/001.png')", minHeight: "400px", backgroundSize: "cover" }} >
                                <div className="container py-5">
                                        <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                                                {/* 이미지 부분: 데스크톱에서는 왼쪽, 모바일에서는 위쪽에 표시됩니다. */}
                                                <div className="col-12 col-md-4 order-1 order-md-2 p-5">
                                                        <div className="image-overlay2">
                                                                <img src="img/value.png" alt="value representation" className="centered-image" />
                                                        </div>
                                                </div>

                                                {/* 글 부분: 데스크톱에서는 오른쪽, 모바일에서는 아래쪽에 표시됩니다. */}
                                                <div className="col-12 col-md-8 order-2 order-md-1" data-aos="fade-left">
                                                        <div className="text-container" style={{ color: "white", textAlign: "left", paddingLeft: "2%" }}>
                                                                우리는 다음 가치와 미션을 바탕으로 일합니다.
                                                                <ul style={{ listStyleType: "disc" }}>
                                                                        <li>혁신과 창의성을 통한 브랜드 성장</li>
                                                                        <li>고객과 협력 파트너 중심의 경영</li>
                                                                        <li>지속가능한 사업과 사회적 책임</li>
                                                                        <li>글로벌 시장에서의 선도적 역할</li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="container" style={{ backgroundImage: "url('img/bg/002.png')", minHeight: "400px", backgroundSize: "cover" }}>
                                <div className="row py-5">

                                        <div className="col-12 col-md-9 order-2 order-md-2 p-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ marginTop: "10%" }}>
                                                <p>우리는 브랜드의 가치를 이해하며, 그 가치를 지속적으로 발전시키는 데 헌신합니다.</p>
                                                <p>브랜드 마스터스 지주는 혁신과 열정으로 브랜드의 미래를 함께 만들어 나갈 것을 약속합니다.</p>
                                        </div>

                                        <div className="col-12 col-md-3 order-1 order-md-1 justify-content-start align-items-center p-5" data-aos="fade-right" data-aos-duration="3000">
                                                <div className="image-overlay3">
                                                        <img src="img/brand.png" alt="Brand" className="centered-image p-2" id="Brand-section" />
                                                </div>
                                        </div>

                                </div>
                        </div>
                        <hr class="container"></hr>
                        <div className="container">
                                <div className="content-display">

                                </div>
                                <div className="row">

                                        <div className="col-6 col-md-3">
                                                <figure data-aos="zoom-in" data-aos-duration="1000">
                                                <Link to="/brandLifeborn">
                                                <img width="400" height="300" src="img/brandimg/001.png" alt="생활본책" className="img-fluid border-rectangle" />
                                                </Link>
                                                </figure>
                                        </div>
                                        <div className="col-6 col-md-3">
                                                <figure data-aos="zoom-in" data-aos-duration="1000">
                                                <Link to="/brandRunmecy">
                                                <img width="400" height="300" src="img/brandimg/002.png" alt="런머시몰" className="img-fluid border-rectangle" />
                                                </Link>
                                                </figure>
                                        </div>
                                        <div className="col-6 col-md-3">
                                                <figure data-aos="zoom-in" data-aos-duration="1000">
                                                <Link to="/brandBinggeul">
                                                <img width="400" height="300" src="img/brandimg/003.png" alt="빙글" className="img-fluid border-rectangle" />
                                                </Link>
                                                </figure>
                                        </div>
                                        <div className="col-6 col-md-3">
                                                <figure data-aos="zoom-in" data-aos-duration="1000">
                                                        <a href="pages/everybottle.html"><img width="400" height="300" src="img/brandimg/004.png" alt="에브리보틀" className="img-fluid border-rectangle" /></a>
                                                </figure>
                                        </div>

                                        <div className="col-6 col-md-3">
                                                <figure data-aos="zoom-in" data-aos-duration="1000">
                                                        <a href="pages/squall.html"><img width="400" height="300" src="img/brandimg/005.png" alt="스콜" className="img-fluid border-rectangle" /></a>
                                                </figure>
                                        </div>
                                </div>
                        </div>
                        <hr class="container"></hr>



                        <div className="container" style={{ backgroundImage: "url('img/bg/contactbg.jpg')", minHeight: '400px', backgroundSize: 'cover' }}>
                                <div className="row py-5">
                                        <div className="col-12 col-md-3 order-1 order-md-1 justify-content-start align-items-center p-5">
                                                <div className="image-overlay3">
                                                        <img src="img/contact.png" alt="콘택트이미지" className="centered-image p-2" id="Brand-section" />
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="container contact-section" style={{ color: 'black' }}>
                                <div className="row align-items-center">
                                        {/* 텍스트 부분 */}
                                        <div className="col-md-9 contact-heading">
                                                <h2 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                                                        Contact
                                                        <br />
                                                        Us
                                                </h2>
                                        </div>

                                        {/* 구글 지도 부분 */}
                                        <div className="col">
                                                <a
                                                        href="https://map.naver.com/p/search/%EB%85%BC%ED%98%84%EB%A1%9C%20105%EA%B8%B8%2087/address/14140625.8521478,4509643.8164361,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C105%EA%B8%B8%2087,new?c=19.00,0,0,0,dh&isCorrectAnswer=true"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="map-link-box">
                                                        지도 바로가기
                                                </a>
                                        </div>
                                </div>
                        </div>






                        <hr className='container' />
                        <div className="container contact-container">
                                
                                <div className="contact-form">
                                        <form onSubmit={handleSubmit}>
                                                <select name="category">
                                                        <option value="general">일반 문의</option>
                                                        <option value="sales">판매 관련 문의</option>
                                                        <option value="support">기술 지원</option>
                                                </select>
                                                <input type="email" name="email" placeholder="이메일" required defaultValue="tjrrn1117@naver.com" hidden />
                                                <input type="text" name="name" placeholder="이름" required />

                                                <input type="text" name="phone" placeholder="전화번호" />
                                                <textarea name="message" placeholder="내용" rows="4" required></textarea>
                                                <button type="submit">메세지 보내기</button>
                                        </form>
                                </div>
                        </div>
                        <br></br><br></br>
                </section>
        );
};

export default main1;