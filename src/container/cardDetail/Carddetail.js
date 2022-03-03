import react from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../../component/topHeader/TopHeader';
import './carddetail.css';
import Card from '../../component/card/Card'

const Lion =[
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/1.jpg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/2.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/3.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/4.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/5.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/6.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/7.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/8.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/9.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/10.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/11.jpeg')
    },
    {
        url: require('../../assets/categoriesPhoto/categoriesImages/lionImg/12.jpeg')
    },
]
const Horse =[
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/1.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/10.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/3.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/4.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/5.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/6.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/10.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/8.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/9.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/3.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/6.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/horseImg/1.jpeg')
    },

]
const FoxData =[
    {
        url: require("../../assets/categoriesPhoto/categoriesImages/foxImg/1.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/2.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/3.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/4.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/5.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/6.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/7.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/8.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/9.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/10.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/11.jpeg")
    },
    {
        url:require("../../assets/categoriesPhoto/categoriesImages/foxImg/12.jpeg")
    },
]
const Lemur = [
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/1.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/2.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/3.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/4.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/5.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/6.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/7.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/8.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/9.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/10.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/11.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/lemur/12.jpeg')
    },
]
const Panther =[
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/1.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/2.jpeg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/3.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/4.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/5.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/6.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/7.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/8.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/9.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/10.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/11.jpg')
    },
    {
        url:require('../../assets/categoriesPhoto/categoriesImages/panther/12.jpg')
    },
]

const Carddatil=()=>{
    const {title}= useParams();
  
    const data = () => {
        switch (title) {
            case 'Lion':
               return Lion
               case 'Horse':
               return Horse
               case 'Fox':
               return FoxData
               case 'Lemur':
               return Lemur   
               case 'Penther':
                return Panther   
               default:
                return Panther;
        }
    }
    return(
        <div className='detail_main_div'>
            {/* <h1 style={{color:'gray'}}>{title} Detail</h1> */}
            <TopHeader text1={'Wild'} text2={title}/>
            <div className='image_view1'>
                {
                 data().map((Data,index)=>{
                     return<Card url={Data.url}/>

                 })
                }

            </div>
        </div>
    )
}
export default Carddatil;