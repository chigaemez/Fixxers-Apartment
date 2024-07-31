import React, { useEffect, useState } from 'react'
import { images, images2, images3 } from '../../assets/Image/Index'
import { roomsData } from '../../data'
import { FaSpeakap, FaShoppingBag, FaWeight } from 'react-icons/fa'

const Residences = () => {
    const [currentSlide, setCurrentSlide] = useState([1])

    const slideLength = roomsData.length;
    const autoScroll = true;
    let slideInterval;
    let InterTime = 5000;
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
        <div className='flex flex-col relative items-center bg-slate-50 justify-center'>
            <div className="relative flex lg:flex-row flex-col  items-center bg-slate-50 justify-center">
                <div className=' flex-1 '>
                    <img src={images} alt="" className='lg:w-[100%] w-[100%] object-cover lg:h-[90vh] h-[50vh] ' />
                </div>
                <div className="flex  lg:w-[45%] w-[90%] text-center h-[90vh] flex-col lg:px-[5rem] pt-[7rem]  ">
                    <hr className='w-[10%] h-[1px] flex self-center border-none bg-orange-700' />
                    <h1 className='text-5xl  my-6 font-semibold text-slate-700'>Residences</h1>
                    <p className='text-base text-slate-600 w-[100%]'>Spacious light-filled condominium residences, with panoramic views. An architectural wonder designed by Jean Nouvel.</p>
                </div>
                <div className='absolute lg:w-[50%] w-[70%]  bottom-[6rem]  lg:right-[10rem] h-[40vh] bg-black' >
                    {
                        roomsData.map((item, index) => (
                            <div className={index === currentSlide ? "residence currentresidence" : "residence"} key={index}>

                                <div className='flex lg:flex-row-reverse flex-col w-full h-full '>
                                    <img src={item.image} alt="" className='lg:w-[50%] w-full' />
                                    <div className='flex flex-col lg:px-10 px-4 bg-[#50493b] lg:w-[50%] w-full py-10'>
                                        <h1 className='text-sm font-light text-white '>REFLECT & RELAX</h1>
                                        <h1 className='text-4xl font-medium text-white my-5'>{item.header}</h1>
                                        <p className='text-white'>{item.dec}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                    <div className=' flex flex-col absolute lg:right-[-2.8rem] right-[-1.8rem] gap-1 top-[7rem]'>
                        {Array.from({ length: 3 }).map((item, index) => (
                            <div className={currentSlide === index + 1 ? " w-[10px] h-[10px] rounded-full bg-[#50493b] " : "w-[10px] h-[10px] border border-white rounded-full bg-slate-400"} key={index}></div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative flex lg:flex-row-reverse flex-col mt-[7rem] items-center bg-slate-50 justify-center">
                <div className=' flex-1 '>
                    <img src={images3} alt="" className='w-[100%] object-cover  lg:h-[90vh] h-[60vh]  ' />
                </div>
                <div className="flex items-center justify-center  lg:w-[50%] w-[90%] h-[90vh] flex-col lg:pl-[14rem] lg:pt-[7rem]  ">
                    <div className='flex items-center justify-center gap-10 '>
                        <FaSpeakap className='text-7xl p-3 w-[80px] h-[80px] rounded-full bg-slate-500' />
                        <div className='flex flex-col'>
                            <h1 className='text-slate-800 text-xl font-medium'>RESTAURANTS</h1>
                            <p className='w-[70%] text-slate-600'>Extensive in-house amenities, staff and services elevate the living experience</p>

                        </div>
                    </div>
                    <div className='flex items-center my-[7rem] justify-center gap-10 '>
                        <FaShoppingBag className='text-7xl p-3 w-[80px] h-[80px] rounded-full bg-slate-500' />
                        <div className='flex flex-col'>
                            <h1 className='text-slate-800 text-xl font-medium'>KITCHEN</h1>
                            <p className='w-[70%] text-slate-600'>The building’s personalized services and carefully conceived amenities</p>

                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-10 '>
                        <FaWeight className='text-7xl p-3 w-[80px] h-[80px] rounded-full bg-slate-500' />
                        <div className='flex flex-col'>
                            <h1 className='text-slate-800 text-xl font-medium'>FITNESS CENTER</h1>
                            <p className='w-[70%] text-slate-600'>Nothing works better to help you work out the kinks than a quick session</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Residences
