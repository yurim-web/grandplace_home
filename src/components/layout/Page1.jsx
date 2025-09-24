const Page1 = () => {
  return (
    <>
      <h1
        style={{
          color: "#474f6f",
          fontSize: "150px",
          fontFamily: "NotoSerif",
          fontWeight: "lighter",
          letterSpacing: "7px",
          position: "relative",
        }}
      >
        Groundplace
      </h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            transform: "rotate(270deg)",
            textAlign: "center",
            position: "absolute",
            left: "5%",
            fontSize: "20px",
            zIndex: 5,
          }}
        >
          <p style={{ fontSize: "30px", fontWeight: 600 }}>
            Groundplace private space
          </p>
          <p>It's a place where we are happy</p>
        </div>
        <div className="box">
          <img src={`${process.env.PUBLIC_URL}/page_1_1.jpg`} alt="" />
        </div>
        <img
          style={{
            position: "absolute",
            left: "5%",
            marginTop: "500px",
            width: "350px",
          }}
          src={`${process.env.PUBLIC_URL}/leaf2.png`}
          alt="leaf"
        />
        <div style={{ display: "flex", width: "200px", marginTop: "30%" }}>
          <img
            className="img1"
            style={{
              width: "300px",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
            }}
            src={`${process.env.PUBLIC_URL}/page_1_2.jpg`}
            alt="img1"
          />
          <img
            className="img2"
            style={{
              width: "250px",
              height: "300px",
              objectFit: "contain",
              position: "absolute",
              left: "64%",
            }}
            src={`${process.env.PUBLIC_URL}/page_1_3.jpg`}
            alt="img2"
          />
        </div>
      </div>
    </>
  );
};

export default Page1;
