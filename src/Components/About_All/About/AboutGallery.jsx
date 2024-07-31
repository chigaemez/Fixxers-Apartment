import React from 'react'
import { images, images2, images3 } from '../../../assets/Image/Index'

const AboutGallery = () => {
    return (
        <div className='flex items-center justify-center bg-primary'>
            <div className='w-[80%] items-center justify-center flex flex-col my-[6rem]'>
                <div className="flex w-[100%] items-center justify-center my-[5rem] lg:gap-5 gap-3">
                    <img src={images} alt="" className='w-[20%] lg:h-[30vh] h-[20vh] object-cover' />
                    <img src={images2} alt="" className='w-[20%] lg:h-[50vh] h-[30vh] object-cover' />
                    <img src={images3} alt="" className='w-[35%] lg:h-[70vh] h-[40vh] object-cover' />
                    <img src={images} alt="" className='w-[20%] lg:h-[50vh] h-[30vh] object-cover' />
                    <img src={images2} alt="" className='w-[20%] lg:h-[30vh] h-[20vh] object-cover' />

                </div>

                <div className='flex lg:flex-row flex-col items-center justify-between gap-[3rem]'>
                    <h1 className=' text-xl font-medium text-slate-100 w-[100%]'>
                        HISTORY OF THE ALBATROSS
                    </h1>
                    <h1 className='text-xl font-mono text-white'>
                        Albatross has a rich history with many interesting facts and occasions that had an impact on its establishment. But through the whole period of its formation Spice was always liked by visitors.
                    </h1>
                    <h1 className='text-xl font-mono text-white'>
                        Albatross hitory begins in 1809 when a rich man named John Douglas bought a huge piece of land to fulfilled his father’s will – to build the place where people can relax and forget about their problems.
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default AboutGallery
