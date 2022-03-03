import react from 'react';
import TopHeader from '../../component/topHeader/TopHeader';
import './categorie.css';
import CategorieCard from '../../component/CateCard/CategorieCard';
import { NavLink } from 'react-router-dom';

const CategorieData = [
    {
    url: require("../../assets/categoriesPhoto/Fox.jpg"),
    title:'Fox'
},
{
    url: require("../../assets/categoriesPhoto/horse.jpg"),
    title:'Horse'
},
{
    url: require("../../assets/categoriesPhoto/Lion.jpeg"),
    title:'Lion'
},
{
    url: require("../../assets/categoriesPhoto/Lemur.jpg"),
    title:'Lemur'
    
},
{
    url: require("../../assets/categoriesPhoto/Panther.jpg"),
    title:'Panther'
},
{
    url: require("../../assets/categoriesPhoto/Zaeitar.jpg"),
    title:'Zaeitar'
},

];


const Categorie=()=>{
    return(
        <div className='Categorie_main_div'>
            <div >
            <TopHeader text1={'WHAT WE DO '} text2={'Categories'} />
            
           <div className='categorie_card_div'>
           { CategorieData.map((Data, index) => {
                return <CategorieCard url = { Data.url } title={Data.title}/>;})
              } 
           </div>
            </div>
           
        </div>
    )
}

export default Categorie ;