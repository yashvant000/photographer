import react from 'react';
import './card.css';

const Card =(props)=>{
    const {url}= props
        return(
        <div className='card_main_div'>
            <img
            className='Card_img_view'
            height='100%'
            width='100%'
            style={{objectFit:'cover'}}
            src={url}/>
        </div>
    )
}
export default Card;