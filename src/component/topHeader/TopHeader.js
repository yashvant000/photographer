import react from 'react';
import './topheader.css';
 
const TopHeader=(props)=>{
    const {text1 , text2} = props;
    return(
        <div className='comun_header'>
            <span className='span_view'> {text1}</span>
            <h1 className='h1_view'>{text2}</h1>

        </div>
    )
}
export default TopHeader;