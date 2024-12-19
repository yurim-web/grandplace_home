import React, { useState } from 'react';

const Page3 = () => {
  // 이미지 상태를 관리
  const [image1, setImage1] = useState("special1_img1.jpg");
  const [image2, setImage2] = useState("special1_img2.jpg");
  const [image3, setImage3] = useState("special1_img3.jpg");

  // 스타일 상태를 관리 (마우스 오버 시 스타일 변경)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 마우스를 올렸을 때 이미지 변경 함수
  const handleMouseEnter = (imageIndex) => {
    setHoveredIndex(imageIndex);
    if (imageIndex === 0) {
      setImage1("special1_img1.jpg");
      setImage2("special1_img2.jpg");
      setImage3("special1_img3.jpg");
    } else if (imageIndex === 1) {
      setImage1("special2_img1.jpg");
      setImage2("special2_img2.jpg");
      setImage3("special2_img3.jpg");
    } else if (imageIndex === 2) {
      setImage1("special3_img1.jpg");
      setImage2("special3_img2.jpg");
      setImage3("special3_img3.jpg");
    } else if (imageIndex === 3) {
      setImage1("special4_img1.jpg");
      setImage2("special4_img2.jpg");
      setImage3("special4_img3.jpg");
    } else if (imageIndex === 4) {
      setImage1("special5_img1.jpg");
      setImage2("special5_img2.jpg");
      setImage3("special5_img3.jpg");
    }
  };

  // 마우스를 떠날 때 스타일을 원래대로 돌려놓는 함수
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getTextStyle = (index) => {
    return hoveredIndex === index
      ? { color: '#474f6f', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }
      : { cursor: 'pointer' }; // 마우스를 올리면 손 모양 커서
  };

  return (
    <>
      <h1
        style={{
          color: "#474f6f",
          fontSize: "50px",
          fontFamily: "NotoSerif",
          fontWeight: "lighter",
          letterSpacing: "7px",
          textAlign: "center",
        }}
      >
        Special offers
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, position: "relative", width: "500px" }}>
          <img
            style={{ width: "300px" }}
            src={image1} // 첫 번째 이미지
            alt=""
          />
          <img
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "999px",
              position: "absolute",
              right: "-70px",
              bottom: "-150px",
              zIndex: 5,
            }}
            src={image2} // 두 번째 이미지
            alt=""
          />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "35px",
            fontFamily: "NotoSerif",
            flex: 1,
          }}
        >
          <p
            onMouseEnter={() => handleMouseEnter(0)} // Indoor Pool
            onMouseLeave={handleMouseLeave}
            style={getTextStyle(0)}
          >
            Indoor Pool
          </p>
          <p
            onMouseEnter={() => handleMouseEnter(1)} // Outdoor Spa
            onMouseLeave={handleMouseLeave}
            style={getTextStyle(1)}
          >
            Outdoor Spa
          </p>
          <p
            onMouseEnter={() => handleMouseEnter(2)} // BBQ
            onMouseLeave={handleMouseLeave}
            style={getTextStyle(2)}
          >
            BBQ
          </p>
          <p
            onMouseEnter={() => handleMouseEnter(3)} // Goose Bedding
            onMouseLeave={handleMouseLeave}
            style={getTextStyle(3)}
          >
            Goose Bedding
          </p>
          <p
            onMouseEnter={() => handleMouseEnter(4)} // Private House
            onMouseLeave={handleMouseLeave}
            style={getTextStyle(4)}
          >
            Private House
          </p>
        </div>
        <div style={{ display: "flex", flex: 1, position: "relative", width: "500px" }}>
          <img
            style={{ width: "320px", height: "280px", objectFit: "cover", position: "absolute", top: "80%" }}
            src={image3} // 세 번째 이미지
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Page3;
