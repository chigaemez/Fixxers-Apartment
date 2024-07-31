import React, { useEffect, useState } from 'react'

import { roomsData } from '../../data';



const Suites = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

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
        <div className='flex items-center justify-center '>
            <div className='flex flex-col items-center w-[80%] justify-center  my-10' >
                <h1 className='text-3xl font-mono  text-orange-600'>Rooms & Suites</h1>


                <div
                    className=' suit flex gap-9 overflow-auto w-[100%] h-[40vh] my-9 carousel carousel-center rounded-box '
                    onScroll={nextSLide}

                >
                    {
                        roomsData.map((room, index) => {
                            return (

                                <>
                                    <img src={room.image} alt={room.header} className='w-[45%]' />

                                </>


                            )
                        })
                    }
                </div>

            </div>
        </div >
    )
}

export default Suites
