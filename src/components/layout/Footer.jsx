const Footer = () => {
    return (  <footer  style={{
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
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
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
      </footer> );
}
 
export default Footer;