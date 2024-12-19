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
import Page4 from "./components/layout/Page4";
import Footer from "./components/layout/Footer";

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
        y: -20, 
        repeat: -1, 
        yoyo: true, 
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, 
      })
      .to(".img2", {
        y: 20, 
        repeat: -1, // 반복
        yoyo: true, // 위아래로 왔다갔다
        ease: "bounce.out", // 바운스 이징 적용
        duration: 2, 
      });
      gsap.fromTo(
        paragraphs,
        {
          opacity: 0,  // 처음에는 글자가 보이지 않음
          x: -100,  // 글자가 왼쪽에서 시작
        },
        {
          opacity: 1, 
          x: 0,  
          duration: 1.5,  
          ease: 'power4.out',  // 부드럽게 애니메이션
          stagger: 0.3,  // 각 p 태그가 순차적으로 나타나도록
          scrollTrigger: {
            trigger: '.page4',  
            start: 'top 80%',   
            end: 'bottom 20%',  
            scrub: 1,           
          
          },
        }
      );
      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page4",
          start: "center top", // 애니메이션 시작 위치
          end: "200% bottom", // 애니메이션 종료 위치
          pin:true,
        },
      })
      .to(".page3_back", {
        y: -10, 
        duration: 2, 
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
      <section className="page4">
       <Page4/>
      </section>
     <Footer/>
    </div>
  );
}

export default App;
