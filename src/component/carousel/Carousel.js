import React from 'react';
import react from 'react';
import './carousel.css';


const CarouselItem = (props) => {
    const { url } = props
    return (
        <div className='corousel_item'>
            <img height="100%"
                width="100%"
                alt=""
                src={url}
            />
        </div>
    )
}

const Carousel = (props) => {
    const [index, setIndex] = React.useState(0)
    const { data } = props;

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (data.length - 1 > index) {
                setIndex(index + 1)
            }
            else {
                setIndex(0)
            }
        }, 3000)
        return ()=>{
            clearInterval(interval)
        }

    })
    return (
        <div className='carousel_div'>
            <div className='item_div'
                style={{ transform: `translateX(-${index*100}%)` }}
            >
                {
                    data?.map((data, index) => {
                        return <CarouselItem key={index} url={data.url} />
                    })
                }
            </div>
        </div>

    )
}
export default Carousel;