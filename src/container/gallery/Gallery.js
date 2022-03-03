import react from 'react';
import TopHeader from '../../component/topHeader/TopHeader';
import './gallery.css';
const Gallery= ()=>{
    return(
        <div className=' gallery_main_div'>
           <TopHeader text1={'PORTFOLIO'} text2={'Photo Gallery'} />
        </div>
    )
}
export default Gallery;