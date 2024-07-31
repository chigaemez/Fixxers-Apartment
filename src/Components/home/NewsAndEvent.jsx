import React from 'react'
import { FaArrowLeft, FaArrowRight, } from 'react-icons/fa';

const NewsAndEvent = () => {
    return (
        <div className='flex justify-center items-center bg-slate-200'>
            <div className='lg:w-[80%] w-[95%] flex items-center justify-center my-6'>
                <div className='flex lg:flex-row flex-col gap-6 items-center justify-between'>
                    <h1 className='text-5xl text-slate-600'> New & Events</h1>
                    <p className='text-2xl lg:w-[50%] w-full text-center text-slate-600'>With our Italian dishes cooked by professional chefs you will be feeling as if you are at authentic Italian restaurant.</p>
                    <div className='flex gap-8 '>
                        <FaArrowLeft className='text-2xl text-slate-600' />
                        <FaArrowRight className='text-2xl text-slate-600' />
                    </div>
                </div>


            </div>
        </div >
    )
}

export default NewsAndEvent
