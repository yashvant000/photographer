import react from "react";
import "./home.css";
import Card from "../../component/card/Card";

const Data = [{
        url: require("../../assets/image/8.jpg"),
    
    },
    {
        url: require("../../assets/image/2.jpg"),
    },
    {
        url: require("../../assets/image/3.jpg"),
    },
    {
        url: require("../../assets/image/4.jpg"),
    },
    {
        url: require("../../assets/image/9.jpg"),
    },
    {
        url: require("../../assets/image/6.jpg"),
    },
];

const Home = () => {
    return ( 
        <div className = "home_container" >
         <div className = "carousel_image_view" >
         <img height = "100%"
        width = "100%"
        alt = ""
        src = { require("../../assets/image/4.jpg") }
        /> 
        </div> 
        <div className = "p_div" >
        
        <p className = "p_view" >
        Our Task Must be to free Ourselves by Wildening Our circle <br/>
        of Compassian to Embrace all Living Creatures and <br/>
        the Whole of Nature and It 's Beauty 
        </p > 
        <div className = "signature_view" >
        
        <h3 className = "span_style" > Signature </h3> 
        </div> 
        <div className = "home_image" > 
           { Data.map((Data, index) => {
                return <Card url = { Data.url }/>;})
        } 
        </div> 
        </div > 
        </div>
    );
};
export default Home;