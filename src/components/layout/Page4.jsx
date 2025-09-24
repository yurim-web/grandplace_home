const Page4 = () => {
    return (<>
    
    <div className="page3_back" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/main_bg.jpg)`,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center",}}>
          <div className="slide-text"  style={{fontSize:"40px",display:"flex",flexDirection:"column",gap:"20px",fontWeight:600,color:"white"}}>
            <p>A trip to discover</p>
            <p>your taste, awaken your</p>
            <p>senses in a beautiful space.</p>
            <p>put a comma in one's daily life,</p>
          </div>
        </div>
    
    </>  );
}
 
export default Page4;