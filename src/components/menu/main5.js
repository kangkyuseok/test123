// import React from 'react';
// import axios from 'axios';

// function ContactForm() {
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const formData = {
//             email: e.target.email.value,
//             category: e.target.category.value,
//             name: e.target.name.value,        
//             phone: e.target.phone.value,
//             message: e.target.message.value
//         };
    
//         console.log("보내려는 데이터:", formData);  // 여기를 추가
    
//         try {
//             const response = await axios.post('/send-email', formData);
//             console.log(response.data);
//         } catch (error) {
//             console.error("이메일을 보내는 중 오류가 발생했습니다.", error);
//         }
//     };
    

//     return (
//         <section className="container" >
//             <div className="contact-container">
//                 <div className="contact-info">
//                     <p>법인명(상호) : (주)스퀘어컴퍼니</p>
//                     <p>대표자 : 이계윤</p>
//                     <p>주소: 서울특별시 강남구 논현로 105길 87, B103~105</p>
//                     <p>대표 번호: 070-4647-4827 </p>
//                     <p>이메일: example@example.com</p>
//                 </div>
//                 <div className="contact-form">
//                     <form onSubmit={handleSubmit}>
//                         <select name="category">
//                             <option value="general">일반 문의</option>
//                             <option value="sales">판매 관련 문의</option>
//                             <option value="support">기술 지원</option>
//                         </select>
//                         <input type="email" name="email" placeholder="이메일" required defaultValue="tjrrn1117@naver.com" hidden />
//                         <input type="text" name="name" placeholder="이름" required />
                        
//                         <input type="text" name="phone" placeholder="전화번호" />
//                         <textarea name="message" placeholder="내용" rows="4" required></textarea>
//                         <button type="submit">메세지 보내기</button>
//                     </form>
//                 </div>
//             </div>






//         </section>
//     );
// }

// export default ContactForm;