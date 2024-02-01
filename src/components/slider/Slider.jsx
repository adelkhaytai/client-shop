import React from 'react'
import Slider from "react-slick";

const SliderBar = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
  return (
    <div >
        <Slider
         {...settings}
        
        //  className="xl:w-[40rem]  lg:w-[30rem] md:w-[56rem] sm:w-[40rem] sm:block"
        >
            {/* <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" /> */}
            <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />   
            <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg" alt="" />
        </Slider>
        
    </div>
  )
}

export default SliderBar