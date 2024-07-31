import React from 'react'
import { images } from '../../assets/Image/Index'

const About = () => {
    return (
        <div className=' bg-slate-50'>
            <div className="flex flex-col mx-auto">
                <div className=" grid lg:grid-cols-2 grid-cols-1  mx-auto w-[80%] my-16 ">
                    <div className="flex flex-col " data-aos="fade-up">
                        <h1 className='text-orange-600 flex mt-4  items-center gap-5'> <hr className='w-[50px] bg-orange-600 h-1 border-none rounded-full text-slate-800' /> WELCOME HOME</h1>
                        <h1 className='lg:text-6xl text-4xl font-bold font-serif  my-6 text-slate-700'>The Building You Never Need To Leave</h1>
                        <p className='lg:text-base text-lg space-x-20  text-slate-600'>he Hotel Spice is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</p>
                    </div>
                    <div className="flex" data-aos="fade-up">
                        <img src={images} alt="" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-9 w-[80%] my-16 ">
                    <div className="flex-1" data-aos="fade-up">
                        <img src={images} alt="" />
                    </div>
                    <div className="flex flex-col flex-1 " data-aos="fade-up">
                        <h1 className='text-orange-600 flex mt-4  items-center gap-5'> <hr className='w-[50px] bg-orange-600 h-1 border-none rounded-full text-slate-800  ' /> SERVICES</h1>
                        <h1 className='lg:text-6xl text-4xl font-bold font-serif  my-6 text-slate-700' text-slate-700>Is the right choice for all — who are searching the best place for relax</h1>
                        <p className='lg:text-base text-lg space-x-20 text-slate-600 '>The rooms are arranged on the first and second floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.</p>

                        <button className='btn bg-transparent hover:text-orange-600 hover:bg-transparent group w-[50%] text-slate-700 my-3 outline-none border-none flex items-center  '>
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
        </div>
    )
}

export default About
