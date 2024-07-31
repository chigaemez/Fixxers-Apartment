import React from 'react'
import { stake } from '../../../assets/Image/Index'

const OurBesteller = () => {
    return (
        <div className='flex items-center justify-center bg-primary '>
            <div className='w-[80%] grid lg:grid-cols-2 grid-cols-1  my-[6rem] place-items-center'>
                <div className='flex flex-col w-[100%] z-[999] ml-[9rem] shadow-2xl bg-white h-[60vh] px-[30px] py-[3rem] '>
                    <h1 className='text-5xl font-serif text-slate-600  '>Our Besteller</h1>
                    <h1 className='text-xl font-serif my-[1rem] text-slate-600'>Medium roast steakwith brokkoli</h1>
                    <div className="flex items-start justify-center gap-4 ">
                        <hr className='w-[70%] rounded-full h-[1px] mt-3 bg-orange-600 border-none ' />
                        <div className="flex flex-col ">
                            <p className='text-xl font-serif font-light  text-slate-600'>On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea.

                            </p>
                            <p className='mt-5 text-xl font-serif font-light text-slate-600 '>It is a small comfortable hotel. Our staff offers an attentive high-quality service and is always ready to offer any help to guests. There is an amazing fusion of calm and tranquility at hotel with hectic outside.</p>
                        </div>

                    </div>
                </div>
                <div className="flex w-[100%]">
                    <img src={stake} alt="" className='w-[90%] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default OurBesteller
