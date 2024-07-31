import React, { useEffect, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { sliderData } from '../../data'
import Header from '../Header'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let InterTime = 6000;
    const nextSLide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)

    }


    const prevSLide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    function auto() {
        slideInterval = setInterval(nextSLide, InterTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <div className="hero min-h-[40vh] object-cover " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>

            <div className="hero-overlay bg-opacity-60"></div>

            <div className='  lg:w-[90%] w-[90%]  p-4 md:p-8 mt-[6rem] mx-auto rounded-lg  flex flex-col'>
                <div className="lg:w-[100%] w-[100%]   md:w-[100%] h-[80vh]  relative overflow-hidden ">
                    <button className="btn btn-circle hover:bg-transparent hover:text-white border-none absolute bg-slate-100 text-slate-700 text-lg font-semibold z-[899] lg:bottom-[10%] md:bottom-[0%]  bottom-[0%] lg:left-[31.9rem]   left-[0.5rem]" onClick={prevSLide} > <GoArrowLeft /></button>
                    <button className="btn btn-circle hover:bg-transparent hover:text-white border-none absolute bg-slate-100 text-slate-700 text-lg font-semibold z-[899] lg:bottom-[10%] md:bottom-[0%]  bottom-[0%] lg:right-[31.9rem]   right-[0.5rem]" onClick={nextSLide} > <GoArrowRight /></button>
                    {sliderData.map((slide, index) => {
                        return (
                            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                                {index === currentSlide && (
                                    <>
                                        <div className='bg-black w-full h-full z-[998] absolute opacity-[0.4]' />
                                        <img src={slide.image} alt="" className=' lg:h-[90vh] h-[70vh] rounded-lg object-cover ' />

                                        <div className=' absolute top-[4rem]  left-5 z-[999]  ' data-aos="zoom-in-up">
                                            <p className='text-xl lg:w-[30%] w-[80%] text-slate-200'><span>&#8220;</span>{slide.dec}</p>
                                            <hr className='w-[50%] my-3 h-1 bg-slate-300' />
                                            <h1 className='text-gray-300 lg:text-7xl text-4xl lg:w-[50%] w-[100%] font-mono font-semibold my-4'>{slide.heading}</h1>

                                            <button className='btn bg-transparent lg:w-[20%] w-[50%] lg:text-xl text-xl text-white'>Explore Now</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className='flex items-start justify-between lg:w-[50%] w-[100%]   '>
                    <div className="flex items-center justify-between w-full mt-6">
                        <a href="#">.FACEBOOK</a>
                        <a href="#">.INSTAGRAM</a>
                        <a href="#">.TWITTER</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
