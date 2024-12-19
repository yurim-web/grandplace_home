import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "../css/styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MainSlide from "./MainSlide";
const MainSwiper = () => {
  return (
    <>
      {/* 다음버튼 */}
      <div
        className="swiper-button-next custom-next"
        style={{
          color: "white",
          fontWeight: 600,
          paddingRight: "50px",
        }}
      ></div>
      {/* 이전버튼 */}
      <div
        className="swiper-button-prev custom-prev"
        style={{ color: "white", fontWeight: 600, paddingLeft: "50px" }}
      ></div>

      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // slidesPerView={1} // 슬라이드 한장만 보여줌
        // spaceBetween={10} // 슬라이드 간격
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainSlide img={"main1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main5.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main6.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlide img={"main7.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          width: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: "85px",
          zIndex: 1,
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            fontFamily: "NotoSerif",
            letterSpacing: "7px",
          }}
        >
          Groundplace
        </h1>
        <span style={{ fontSize: "20px", marginTop: "10px" }}>
          Private poolvilla
        </span>
      </div>
    </>
  );
};

export default MainSwiper;
