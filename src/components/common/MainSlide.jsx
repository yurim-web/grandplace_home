import React from "react";
import "../css/styles.css";

const MainSlide = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    ></div>
  );
};

export default MainSlide;
