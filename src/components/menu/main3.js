import React from 'react';

const main3 = () => {
  return (
<section>
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
</section>




  );
};

export default main3;