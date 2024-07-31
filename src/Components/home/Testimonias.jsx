import React from 'react'
import { MdTipsAndUpdates } from 'react-icons/md'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonias } from '../../data';

const Testimonias = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Adjust scrolling speed as needed
        autoplay: true,
        autoplaySpeed: 5000, // Adjust autoplay speed as needed
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false // Hide arrows
    };

    return (
        <div className=" min-h-[70vh] object-cover relative" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay w-full h-[70vh] absolute bg-opacity-60"></div>
            <div className=" flex items-center justify-center text-center text-neutral-content">
                <Slider {...settings} className="lg:w-[70%] md:w-[70%]  flex items-center justify-center h-[70vh]   w-[95%]">
                    {testimonias.map((testimony, index) => (
                        <div className=' text-white  flex items-center justify-center' key={index}>
                            <MdTipsAndUpdates className='text-6xl mx-auto   ' />
                            <h1 className='text-4xl my-8'>{testimony.dec}</h1>
                            <p className='text-3xl text-orange-400'>{testimony.Name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonias
