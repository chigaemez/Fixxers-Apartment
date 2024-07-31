import React from 'react'
import Header from '../../Header'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[100%] bg-primary'>
            <Header />


            <div className='flex items-center justify-center w-[90%] h-[60vh]' >
                <div className=' flex lg:flex-row flex-col items-center justify-between '>
                    <div className='w-[100%]'>
                        <h1 className='text-7xl text-slate-100'>Contact us</h1>
                    </div>
                    <div className='flex flex-col lg:w-[50%] text-left w-[90%] my-[2rem] lg:my-0 lg:mx-[8rem] text-xl text-slate-100'>
                        <a href="+2348039624508"> t: 2348039624508</a>
                        <a href="2348033324444">t: 2348033324444</a>
                    </div>
                    <div className='flex flex-col lg:w-[80%] text-left w-[90%] text-slate-100'>
                        <p className='text-xl'>Plot 84 , Army Post Housing Estate, Eleyele,Ibadan.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
