import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

const OverView = () => {
    const [roomCount, setRoomCount] = useState(0);
    const [carCount, setCarCount] = useState(0);
    const [apartCount, setApartCount] = useState(0);
    const [squdCount, setSqudCount] = useState(0);
    const [roomendValue, setRoomendValue] = useState(7)
    const [carEndValue, setCarEndValue] = useState(3)
    const [apartEndValue, setApartendValue] = useState(5)
    const [squdEndValue, setSqudEndValue] = useState(200)

    const { ref: myRef, inView } = useInView();





    useEffect(() => {
        if (inView) {
            const Roominterval = setInterval(() => {
                if (roomCount < roomendValue) {
                    setRoomCount(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(Roominterval);
                }
            }, 300);

            return () => clearInterval(Roominterval);
        }
    }, [roomCount, roomendValue, 300, inView]);

    useEffect(() => {
        if (inView) {
            const carInterval = setInterval(() => {
                if (carCount < carEndValue) {
                    setCarCount(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(carInterval);
                }
            }, 500);

            return () => clearInterval(carInterval);
        }
    }, [carCount, carEndValue, 500, inView]);



    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (apartCount < apartEndValue) {
                    setApartCount(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(interval);
                }
            }, 500);

            return () => clearInterval(interval);
        }
    }, [apartCount, apartEndValue, 500, inView]);


    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (squdCount < squdEndValue) {
                    setSqudCount(prevCounter => prevCounter + 1);
                } else {
                    clearInterval(interval);
                }
            }, 5);
            return () => clearInterval(interval);
        }


    }, [squdCount, squdEndValue, 5, inView]);



    return (

        <div className='w-[100%] flex flex-col items-center bg-white justify-center' >
            <div className='flex flex-col items-center justify-center my-9 '>
                <hr className='h-[1px] bg-orange-600 border-none w-[10%] mt-[50px]' />
                <h1 className='lg:text-base text-xl text-orange-800 font-medium my-4'>Project Overview</h1>
                <h1 className='lg:text-6xl text-4xl font-semibold  text-slate-700  my-5'>What Makes A Home?</h1>
                <p className='text-center lg:w-[40%] text-xl w-[95%]  text-slate-600 my-3'>This attractive new neighbourhood for young families and active people delivers
                    fresh contemporary living with numerous free-time opportunities.
                    Ovocne sady’s high- quality and practical apartments with functional architecture, public spaces, and excellent options for sport and relaxation – all just steps from your new home.</p>
            </div>

            <div className='lg:w-[80%] w-[90%] my-[30px] place-items-center gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ' ref={myRef}  >

                <div className=' lg:h-[200px] h-[200px]  flex items-center justify-center lg:w-[80%]  w-[100%] bg-orange-50   border-white'>
                    <h1 className='text-orange-800 font-bold  absolute text-5xl flex flex-col items-center justify-center '> {inView ? squdCount : 'no'} <span className='text-sm'>SQUARE AREAS</span></h1>
                </div>
                <div className=' lg:h-[200px] h-[200px]  flex items-center justify-center lg:w-[80%] w-[100%]  bg-orange-50    border-white'>
                    <h1 className='text-orange-800 font-bold  absolute text-5xl flex flex-col items-center justify-center '>{inView ? carCount : 'no'} <span className='text-sm'>CAR PARKING</span></h1>
                </div>
                <div className=' lg:h-[200px] h-[200px]  flex items-center justify-center lg:w-[80%] w-[100%]  bg-orange-50    border-white'>
                    <h1 className='text-orange-800 font-bold  absolute text-5xl flex flex-col items-center justify-center '>{inView ? apartCount : 'no'} <span className='text-sm'>APARTMENTS</span></h1>
                </div>
                <div className=' lg:h-[200px] h-[200px]  flex items-center justify-center lg:w-[80%] w-[100%] bg-orange-50    border-white'>
                    <h1 className='text-orange-800 font-bold  absolute text-5xl flex flex-col items-center justify-center '>{inView ? roomCount : 'no'} <span className='text-sm'>ROOMS</span></h1>
                </div>



            </div>

        </div >
    )


}

export default OverView
