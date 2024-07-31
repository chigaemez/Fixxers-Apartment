import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5'
import { ourApartmentData } from '../../data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive'

const OurApartment = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1704,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center  bg-gray-100 ">
            <div className='my-10 flex flex-col items-center justify-center'>
                <hr className='w-[50%] h-[3px] bg-orange-600 border-none ' />
                <h1 className='text-4xl text-slate-600 font-medium'>Rooms & Suits</h1>
            </div>
            <Slider {...settings} className='w-[90%] my-[4rem] gap-[10rem]'>
                {ourApartmentData.map((item, index) => (
                    <div className='relative group'>
                        <img src={item.image} alt={item.alt} className="lg:w-[90%] md:w-[90%] w-[100%] h-[40vh] hover:cursor-pointer" key={index} />
                        <div className='opacity-0 group-hover:translate-x-5 group-hover:bg-white cursor-pointer -translate-x-6 group-hover:opacity-[1] border-[3px] flex items-center justify-center border-white h-[55px] mx-5 w-[55px] rotate-[45deg] absolute top-[9rem] hover:rotate-[135deg] duration-500'></div>
                        <FaArrowLeft className=' absolute top-[10.2rem] group-hover:text-slate-700 group-hover:translate-x-5 -translate-x-6 mx-9 text-xl opacity-0 group-hover:opacity-[1] duration-500' />
                        <div className='opacity-0 group-hover:-translate-x-5 group-hover:bg-white translate-x-6 group-hover:opacity-[1] border-[3px] flex items-center justify-center border-white h-[55px] mx-5 w-[55px] rotate-[45deg] absolute top-[9rem] right-[60px] hover:rotate-[135deg] duration-500'></div>
                        <FaArrowRight className=' absolute top-[10.2rem] group-hover:text-slate-700 group-hover:-translate-x-5 translate-x-6 mx-9 text-xl opacity-0 group-hover:opacity-[1] duration-500 right-[60px]' />

                        <div className="flex flex-col ">
                            <h1 className='text-2xl text-slate-600 my-2'>{item.Name}</h1>
                            <h1 className='text-2xl text-slate-600'><span>&#x20A6;</span>{item.Price} / Per night</h1>
                            <div className='flex items-center gap-6'>
                                <p className='flex items-center text-slate-600  gap-3'><IoEyeSharp className='text-orange-600' />{item.entry}</p>
                                <p className='flex items-center text-slate-600  gap-3'><FaPerson className='text-orange-600' />{item.acomodate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default OurApartment
