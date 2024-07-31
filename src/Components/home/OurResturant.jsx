import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { FaFilePdf } from 'react-icons/fa'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ourApartmentData } from '../../data';
import { MdClose, MdFullscreen, MdIosShare, MdZoomIn, MdZoomOut } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward, IoIosShareAlt } from 'react-icons/io'

const OurResturant = () => {

    const [showGallery, setShowGallery] = useState(false)
    const [zoomed, setZoomed] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0)



    const handleZoomClick = () => {
        setZoomed(!zoomed);
        console.log("zoomed")
    };

    let mappedIndex = [];
    console.log(mappedIndex)


    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
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



    const slideLength = ourApartmentData.length;
    const autoScroll = false;
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
        <div className='flex items-center justify-center bg-primary'>
            <div className='flex items-center flex-col justify-center w-[80%]'>
                <div className="flex lg:flex-row flex-col my-5 items-center justify-center">
                    <div className='flex flex-col  lg:w-[80%] w-[95%]'>
                        <div className='flex flex-col '>
                            <h1 className='lg:text-6xl text-4xl font-semibold  text-slate-100'>Indoor Resturant</h1>
                            <p className='my-9 text-xl text-slate-300'><span className='font-medium text-xl my-6'>Price:</span> Free</p>
                        </div>
                        <div className='flex flex-col '>
                            <h1 className='lg:text-6xl text-4xl font-medium text-slate-100'>Child Care Center</h1>
                            <p className='my-9 text-xl text-slate-300'><span className='font-medium text-xl my-6'>Price: </span> <span>&#x20A6;</span>50 / Per Day / Per Guest </p>
                        </div>
                        <div className='flex flex-col '>
                            <h1 className='lg:text-6xl text-4xl font-medium text-slate-100'>Car Rental</h1>
                            <p className='my-9 text-xl text-slate-300'><span className='font-medium text-xl my-6'>Price: </span> <span>&#x20A6;</span>15,000 / Per Day / Per Accommodation </p>
                        </div>

                    </div>
                    <div className='flex flex-col justify-start lg:w-[80%] w-[99%] my-6'>
                        <h1 className='lg:text-5xl text-4xl text-slate-200 font-medium '>Our Resturant</h1>
                        <p className='text-slate-200 text-xl my-7'>The buffet breakfast is served in the lounge on the ground floor and also outside on our little patio.</p>
                        <div className='flex  items-center justify-center flex-col'>
                            <h1 className='text-xl font-medium text-slate-200'>MENU</h1>
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Main Course Menu (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Bar Book (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Breakfast Menu (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Wine List (pdf)</buttton>
                            <button className='btn bg-transparent relative hover:text-orange-600 hover:bg-transparent group w-[80%] text-slate-300 text-lg my-3 outline-none border-none flex items-center  '>
                                <div className=' z-[200] absolute left-1 group-hover:rotate-[-45deg] group-hover:bg-orange-500 border-orange-600 border  duration-300  rotate-45 w-9 h-9 bg-transparent ' />
                                <div className='absolute left-[-26px] group-hover:left-[2px] duration-300 group-hover:z-[300]'>
                                    <div className='w-[60px] h-[2px] bg-orange-600 group-hover:w-[30px] duration-300 group-hover:bg-white   ' />
                                    <div className='w-[15px] absolute right-[-4px] top-[-3px] rotate-[28deg] h-[2px] bg-orange-600 group-hover:bg-white ' />
                                    <div className='w-[15px] absolute right-[-4px] bottom-[-3px] rotate-[-28deg] h-[2px] bg-orange-600 group-hover:bg-white ' />
                                </div>

                                READ MORE 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-8 w-[100%] ">
                    <div className="flex lg:w-[80%]" ><h1 className='lg:text-6xl text-4xl font-medium text-slate-200 '>Inspired by the local atmosphere</h1></div>
                    <div className="flex lg:w-[70%] text-slate-50"><h1 className='text-xl lg:text-2xl'>The Hotel Spice is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</h1></div>
                </div>

                <Slider {...settings} className='w-[100%] my-[4rem] gap-[10rem]'>
                    {ourApartmentData.map((item, index) => (
                        <div className='relative group'>
                            <img src={item.image} key={index} onClick={() => setShowGallery(!showGallery)} alt={item.alt} className="lg:w-[90%] md:w-[90%] w-[100%] h-[40vh] hover:cursor-pointer hover:scale-110 duration-700" />
                        </div>
                    ))}
                </Slider>



            </div>
            {
                showGallery && (
                    <div className='  w-[100%]  fixed h-[100vh] top-0 right-0 z-[999]'>
                        <div className='  bg-black w-[100%]  h-[100vh] absolute   opacity-[0.8]' />


                        <div className='w-[100%] px-3 py-2 flex items-center justify-between z-[999]'>
                            <h1 className='text-white  font-semibold text-lg  z-[999]'> {mappedIndex}</h1>
                            <div className='flex items-center  gap-5'>
                                <MdFullscreen className='text-slate-300  font-semibold text-4xl cursor-pointer  hover:text-white  z-[999]' />
                                {
                                    zoomed ?
                                        <MdZoomOut className='text-slate-300  font-semibold text-3xl cursor-pointer  hover:text-white  z-[999]' onClick={handleZoomClick} />
                                        :
                                        <MdZoomIn className='text-slate-300  font-semibold text-3xl cursor-pointer  hover:text-white  z-[999]' onClick={handleZoomClick} />
                                }
                                <IoIosShareAlt className='text-slate-300  font-semibold text-3xl cursor-pointer  hover:text-white  z-[999]' />
                                <MdClose className='text-slate-300  font-semibold text-3xl cursor-pointer hover:text-white  z-[999]' onClick={() => setShowGallery(!showGallery)} />
                            </div>
                        </div>
                        <div>

                            {ourApartmentData.map((slide, index) => {
                                mappedIndex = index;
                                return (
                                    <div className={index === currentSlide ? "gallery currentGallery" : "slide"} key={index}>
                                        {index === currentSlide && (
                                            <>
                                                <IoIosArrowBack className='mx-auto text-4xl cursor-pointer' onClick={prevSLide} />
                                                <img src={slide.image} alt="" className={`h-[60vh] lg:w-[50%] w-[90%] rounded-lg object-cover cursor-grab hover:active:cursor-grabbing ${zoomed ? 'scale-[1.8]' : ""}`} draggable={false} />

                                                <IoIosArrowForward className='mx-auto  text-4xl cursor-pointer' onClick={nextSLide} />
                                            </>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OurResturant
