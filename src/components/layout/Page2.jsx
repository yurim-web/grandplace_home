const Page2 = () => {
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
        Ground Place
      </h1>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#474f6f",
          marginTop: "18px",
        }}
      >
        &nbsp;
      </div>
      <div style={{ display: "flex", gap: "80px" }}>
        <div style={{ position: "sticky", top: "0" }}>
          <div
            style={{
              flex: 1,
              position: "sticky",
              top: "0",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontFamily: "NotoSerif",
                fontSize: "35px",
                color: "#474f6f",
                marginBottom: "10px",
              }}
            >
              Private space
            </h1>
            <p>It's an emotional interior and a comfortable space.</p>
            <p>We prepared a private space for only one team.</p>
            <img src={`${process.env.PUBLIC_URL}/page_2_1.jpg`} alt="" />
          </div>
        </div>

        <div
          style={{
            width: "1px",
            height: "100%",
            flex: 1,
            backgroundColor: "black",
          }}
        >
          &nbsp;
        </div>
        <div
          className="menu_scroll"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "150px",
            marginTop: "93px",
          }}
        >
          <div>
            <img src={`${process.env.PUBLIC_URL}/page_2_2.jpg`} alt="" />
            <h3
              style={{
                fontFamily: "NotoSerif",
                fontSize: "25px",
                color: "#474f6f",
                marginBottom: "5px",
              }}
            >
              GROUND PLACE 1
            </h3>
            <p>대형 실내 수영장(8m)과 외부 자쿠지가 있는 독채 풀빌라</p>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/page_2_3.jpg`} alt="" />
            <h3
              style={{
                fontFamily: "NotoSerif",
                fontSize: "25px",
                color: "#474f6f",
                marginBottom: "5px",
              }}
            >
              GROUND PLACE 2
            </h3>
            <p>중형 실내 수영장(6m)과 외부 자쿠지가 있는 독채 풀빌라</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#474f6f",
          marginTop: "18px",
        }}
      >
        &nbsp;
      </div>
    </>
  );
};

export default Page2;
