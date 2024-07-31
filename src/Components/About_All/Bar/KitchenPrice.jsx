import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { images } from '../../../assets/Image/Index'

const KitchenPrice = () => {
    return (
        <div className='flex items-center justify-center bg-white'>
            <div className="flex items-center justify-between w-[80%]">
                <div className="flex items-center justify-center w-[90%] relative">
                    <div className="flex w-[40%] h-[40vh] left-0   border  absolute ">
                        <div className=' flex w-[100%] h-[40vh]  m-[-10px] border'>

                        </div>
                    </div>
                    <img src={images} alt="" className='w-[80%] z-40 h-[50vh]' />
                </div>
                <div className='flex flex-col justify-start lg:w-[90%] w-[99%] my-6'>
                    <h1 className='lg:text-5xl mx-[4rem] text-4xl text-slate-600 font-medium '>Italian Kitchen</h1>
                    <p className='text-slate-600 mx-[4rem] text-xl my-7'>The buffet breakfast is served in the lounge on the ground floor and also outside on our little patio.</p>
                    <div className='flex  items-start  justify-center flex-row'>
                        <h1 className='text-xl mx-[4rem] font-medium text-slate-600'>PRICE</h1>
                        <div className="flex flex-col items-center justify-center w-[90%] ">
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Main Course Menu (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Bar Book (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Breakfast Menu (pdf)</buttton>
                            <hr className='w-[100%]' />
                            <buttton className='btn w-[100%] hover:text-slate-300 my-3 text-lg  bg-white text-slate-700 flex items-center gap-6 justify-start' > <FaFilePdf /> Wine List (pdf)</buttton>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitchenPrice
