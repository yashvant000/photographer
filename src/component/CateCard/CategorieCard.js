import react from 'react';
import { NavLink } from 'react-router-dom';
import Carddatil from '../../container/cardDetail/Carddetail';
import './categoriecard.css';

const CategorieCard =(props)=>{
    const {url,title}= props
        return(
            <NavLink to={`/carddetail/${title}`}>
        <div className='categorie_card_main_div'>
            <img
            className='cate_card_img'
            height='100%'
            width='100%'
            style={{objectFit:'cover'}}
            src={url}
           alt="" 
            />
            <div className='Card_overlay'>
           <span style={{color:'white',fontSize:'44px'}}>{title}</span>

             </div>
        </div>
        </NavLink>
    )
}
export default CategorieCard;