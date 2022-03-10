import react from "react";
import TopHeader from "../../component/topHeader/TopHeader";
import "./about.css";
const About = () => {
    return ( 
       <div className = "about_main_div" >
        <TopHeader text1 = { "SENEOR" }text2 = { "About Me" } />
       < div className = "about_img_view" >
          <img height = "100%"
            width = "100%"
            alt = ""
            style={{objectFit:'cover'}}
            src = { require("../../assets/image/10.jpg") }/> 
        </div > 
        
        <div className = "about_p_view" >
            <span>PHOTOGRAPHY</span>
            <h1 className="h1_view">Wild Life</h1>
          <p className = "about_pera_view" > 
           Animal models are a fundamental tool in the life sciences. 
           They have advantages <br/>and disadvantages compared with other 
           approaches. <br/>
           In a few instances, they represent the only reasonable approach. <br/>
           However, increasingly modern methods allow the 3R principle of reducing, 
           refining and replacing animal experiments to be put into practice, as 
           required wherever possible by European legislation.<br/> 
           This article summarizes limitations typical of animal models. <br/>
           However,this does not mean that each and every 
           limitation holds true for all animal models and that its alternatives
           have fewer limitations. </p>
        <span className = "about_title" ></span> 
        </div > 
        </div>
    );
};
export default About;
