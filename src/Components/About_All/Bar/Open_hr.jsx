import React from 'react'
import { chef } from '../../../assets/Image/Index'

const Open_hr = () => {
    return (
        <div className='flex items-center justify-center bg-white '>
            <div className='w-[80%] grid lg:grid-cols-2 grid-cols-1  my-[6rem] place-items-center'>
                <img src={chef} alt="" className='w-[100%] object-cover' />
                <div className='flex flex-col w-[100%] z-[999]  shadow-2xl bg-white h-[60vh] px-[30px] py-[3rem] '>
                    <h1 className='text-5xl font-serif text-slate-600  '>Opening Hours</h1>
                    <h1 className='text-xl font-serif my-[3rem] text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
                    <div className="flex items-center justify-center  ">
                        <div className="flex flex-col w-[20%]  border h-[20vh] mb-[-26px]">
                            <p className='w-[100%] border-b h-[10vh] items-center flex justify-center text-slate-600'>MON : FRI</p>
                            <p className='w-[100%] items-center h-[10vh]  flex justify-center text-slate-600'>SAT : SUN</p>
                        </div>
                        <table className=' table-auto w-[100%]  '>
                            <thead>
                                <tr>
                                    <th className='text-slate-600'> BREAKFAST</th>
                                    <th className='text-slate-600'>LUNCH</th>
                                    <th className='text-slate-600'>DINNER</th>
                                </tr>
                            </thead>
                            <tbody className='border '>

                                <tr className='border'>
                                    <td className=' h-[10vh] text-center text-slate-600'>08:00 – 11:00</td>
                                    <td className=' h-[10vh] text-center text-slate-600'>11:00 – 2:30</td>
                                    <td className=' h-[10vh] text-center text-slate-600'>5:00 – 11:00</td>
                                </tr>
                                <tr>

                                    <td className=' h-[10vh] text-center text-slate-600'>08:00 – 11:00</td>
                                    <td className=' h-[10vh] text-center text-slate-600'>11:00 – 2:30</td>
                                    <td className=' h-[10vh] text-center text-slate-600'>5:00 – 11:00</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Open_hr
