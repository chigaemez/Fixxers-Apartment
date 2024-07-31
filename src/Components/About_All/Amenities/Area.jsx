import React from 'react'
import { amenities } from '../../../data'
import { MdWifi } from 'react-icons/md'
import { wifiArea } from '../../../assets/Image/Index'

const Area = () => {
    return (
        <div className='flex  items-center justify-center bg-slate-50'>
            <div className="flex w-[80%]">

                <div className="grid grid-cols-1 md:grid-cols-2  my-[8rem] lg:grid-cols-3 w-[100%] place-items-center">
                    {
                        amenities.map((item, index) => (
                            <div className='relative perspective ' key={index}>
                                <div className='hover:my-rotate-y-180 preserve-3d  duration-1000 flex-col  flex w-full h-[50vh] relative text-center  border bg-transparent items-center justify-center '>
                                    <div className="hero my-rotate-y-180  backface-hidden h-[100vh] object-cover " style={{ backgroundImage: `url(${wifiArea})` }}>
                                        <div className="hero-overlay bg-opacity-60"></div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h1 className='text-2xl font-medium text-white'>
                                                {item.Header}
                                            </h1>
                                            <p className='my-6 text-xl w-[90%] text-white'>{item.dec}</p>
                                        </div>
                                    </div>
                                    <div className="flex  backface-hidden flex-col bg-gray-50 h-full  items-center justify-center absolute">
                                        <MdWifi className='text-5xl text-orange-300 my-5' />
                                        <h1 className='text-2xl font-medium text-slate-600'>

                                            {item.Header}
                                        </h1>
                                        <p className='my-6 text-xl w-[90%] text-slate-600'>{item.dec}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Area
