import MainSwiper from "./components/common/MainSwiper";
import "./components/css/common.css";
import "./components/css/page1.css";
import { useEffect, useRef } from "react";

import Video_page from "./components/layout/Video_page";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "./components/layout/Page1";
import Page2 from "./components/layout/Page2";
import Page3 from "./components/layout/Page3";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.slide-text p');
    

    
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page1",
          start: "top top", // 애니메이션 시작 위치
          end: "bottom bottom", // 애니메이션 종료 위치
        },
      })
      .to(".img1", {
        y: -20, // 이미지가 위로 30px 이동
        repeat: -1, // 반복
        yoyo: true, // 위아래로 왔다갔다
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, // 애니메이션 지속 시간을 5초로 설정 (천천히)
      })
      .to(".img2", {
        y: 20, // 이미지가 아래로 20px 이동
        repeat: -1, // 반복
        yoyo: true, // 위아래로 왔다갔다
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, // 애니메이션 지속 시간을 5초로 설정 (천천히)
      });
      gsap.fromTo(
        paragraphs,
        {
          opacity: 0,  // 처음에는 글자가 보이지 않음
          x: -100,  // 글자가 왼쪽에서 시작
        },
        {
          opacity: 1,  // 글자가 점차 보이게
          x: 0,  // 글자가 오른쪽으로 이동
          duration: 1.5,  // 애니메이션 기간
          ease: 'power4.out',  // 부드럽게 애니메이션
          stagger: 0.3,  // 각 p 태그가 순차적으로 나타나도록
          scrollTrigger: {
            trigger: '.page3',  // .page3 영역이 스크롤 트리거 역할
            start: 'top 80%',   // .page3가 화면 80% 지점에 도달하면 시작
            end: 'bottom 20%',  // .page3 영역이 끝날 때 애니메이션 종료
            scrub: 1,           // 스크롤에 따라 애니메이션이 자연스럽게 진행되도록 설정
          
          },
        }
      );
      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page3",
          start: "center top", // 애니메이션 시작 위치
          end: "200% bottom", // 애니메이션 종료 위치
          pin:true,
          markers:true,
        },
      })
      .to(".page3_back", {
        y: -10, // 이미지가 위로 30px 이동
        duration: 2, // 애니메이션 지속 시간을 5초로 설정 (천천히)
      })
     
  }, []);

  return (
    <div className="App">
      <section style={{ width: "100vw", height: "100vh" }}>
        <MainSwiper />
      </section>
      <Video_page />

      <section
        className="page1"
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: "90px 0px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Page1 />
      </section>

      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "200px",
          alignItems: "center",
        }}
      >
        <Page2 />
      </section>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "800px 0px 100px 0px",
          alignItems: "center",
        }}
      >
        <Page3/>
       
      </section>
      <section className="page3">
        <div className="page3_back" style={{backgroundImage:`url(main_bg.jpg)`,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center",}}>
          <div className="slide-text"  style={{fontSize:"40px",display:"flex",flexDirection:"column",gap:"20px",fontWeight:600,color:"white"}}>
            <p>A trip to discover</p>
            <p>your taste, awaken your</p>
            <p>senses in a beautiful space.</p>
            <p>put a comma in one's daily life,</p>
          </div>
        </div>
      </section>
      <footer  style={{
          width: "100vw",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign:"center",
          padding:"30px 0px",
        
          alignItems: "center",
        }}>
          <img src="logo.png" alt="" />
          <h3 style={{fontSize:"35px",fontWeight:400,color:"#474f6f"}}>010-3366-8308</h3>
          <div><p>주소 : 제주특별자치도 제주시 한경면 두모리 1931|사업자번호 : 367-17-02082 (대표:전민수)|농어촌민박번호 : 한경면 제733호 </p>
          <p>Copyright© 그라운드플레이스. All Rights Reserved. DESIGNED & PHOTO BY언제나,디자인</p></div>
          <p>관리자로그인</p>
          <h1  style={{
          color: "#474f6f",
          fontSize: "120px",
          fontFamily: "NotoSerif",
          fontWeight: "lighter",
          letterSpacing: "7px",
          textAlign: "center",
          opacity:0.5,
        }}>private poolvilla</h1>
        </footer>
    </div>
  );
}

export default App;
