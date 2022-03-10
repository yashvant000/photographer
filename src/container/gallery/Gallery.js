import react from 'react';
import TopHeader from '../../component/topHeader/TopHeader';
import './gallery.css';
import Card from '../../component/card/Card'

const Gallerydata = [
    {url:require('../../assets/galleryPhoto/1.jpeg')},
    {url:require('../../assets/galleryPhoto/2.jpeg')},
    {url:require('../../assets/galleryPhoto/3.jpeg')},
    {url:require('../../assets/galleryPhoto/4.jpeg')},
    {url:require('../../assets/galleryPhoto/5.jpg')},
    {url:require('../../assets/galleryPhoto/6.jpeg')},
    {url:require('../../assets/galleryPhoto/7.jpeg')},
    {url:require('../../assets/galleryPhoto/8.jpeg')},
    {url:require('../../assets/galleryPhoto/9.jpeg')},
    {url:require('../../assets/galleryPhoto/10.jpeg')},
    {url:require('../../assets/galleryPhoto/11.jpeg')},
    {url:require('../../assets/galleryPhoto/12.jpeg')},
    {url:require('../../assets/galleryPhoto/13.jpeg')},
    {url:require('../../assets/galleryPhoto/14.jpeg')},
    {url:require('../../assets/galleryPhoto/15.jpeg')},
    {url:require('../../assets/galleryPhoto/16.jpeg')},
    {url:require('../../assets/galleryPhoto/17.jpeg')},
    {url:require('../../assets/galleryPhoto/18.jpg')},
    {url:require('../../assets/galleryPhoto/19.jpeg')},
    {url:require('../../assets/galleryPhoto/20.jpeg')},
    {url:require('../../assets/galleryPhoto/21.jpeg')},
    {url:require('../../assets/galleryPhoto/22.jpeg')},
    {url:require('../../assets/galleryPhoto/23.jpeg')},
    {url:require('../../assets/galleryPhoto/24.jpeg')},
    {url:require('../../assets/galleryPhoto/25.jpeg')},
    {url:require('../../assets/galleryPhoto/26.jpeg')},
    {url:require('../../assets/galleryPhoto/27.jpeg')},
]

const Gallery= ()=>{
    return(
        <div className=' gallery_main_div'>
           <TopHeader text1={'PORTFOLIO'} text2={'Photo Gallery'} />
           <div className='gallery_img_view'>
               {
                   Gallerydata.map((data,index)=>{
                       return<Card url={data.url}/>
                   })
               }

           </div>
        </div>
    )
}
export default Gallery;