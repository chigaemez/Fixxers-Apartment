import React from 'react'
import { images2 } from '../../../assets/Image/Index'

function WriteUp() {
    return (
        <div className='flex bg-white items-center justify-center '>
            <div className="flex lg:flex-row flex-col w-[80%] my-[5rem] items-center justify-center">
                <div><img src={images2} alt="" className='w-[90%]  ' /></div>
                <div className='flex flex-col w-[100%] mx-6'>
                    <div className='flex w-[100%] my-9 lg:my-0 items-center justify-center'>

                        <div className=''>
                            <h1 className='text-3xl font-serif text-slate-700'><span className='text-9xl'>s</span> plendid terrace, where you can relax and immerse yourself into upcoming morning of a new wonderful day in the atmosphere of Venetian daily life,</h1>
                        </div>

                    </div>
                    <h1 className='text-xl text-gray-600 my-7'>
                        On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea or just read.
                    </h1>
                    <h1 className='text-xl text-gray-600 my-7'>
                        It is a small comfortable hotel. Our staff offers an attentive high-quality service and is always ready to offer any help to guests. There is an amazing fusion of calm and tranquility at hotel with hectic outside.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default WriteUp
