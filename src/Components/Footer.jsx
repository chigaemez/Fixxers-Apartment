import React from 'react'

const Footer = () => {
    return (
        <div className="hero min-h-[40vh] object-cover" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex flex-col items-center justify-center w-[100%]">
                <div className=" flex lg:flex-row flex-col w-[90%] gap-10 justify-between text-center text-neutral-content">
                    <div className='text-left lg:my-[6rem] mt-[5rem]'>
                        <h2 className='text-5xl text-white font-mono font-semibold'>ALBATROSS</h2>
                        <p className='lg:text-xs text-lg text-white font-mono '>PERMIUM HOTEL & SPA</p>
                    </div>
                    <div className='text-left w-[70%] lg:my-[6rem] lg:mx-20'>
                        <p className='text-lg text-white font-serif'>3015 Grand Ave, Coconut Grove,
                            Merrick Way, FL 12345</p>
                    </div>

                    <div className='flex flex-col w-[90%] gap-4 lg:my-[6rem]  justify-start items-start'>
                        <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                            <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                            About Fixxers Apartment
                        </h1>
                        <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                            <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                            Contact Us
                        </h1>
                        <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                            <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                            Hotel Amenities
                        </h1>
                        <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                            <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                            Resturant & Bar
                        </h1>

                    </div>
                    <div className='flex flex-col lg:w-[80%] w-[80%] '>
                        <h1 className='text-2xl text-white text-left font-medium my-[30px]'>
                            RESERVATIONS
                        </h1>
                        <div className='flex flex-col  gap-4  justify-start items-start'>
                            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                                <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                                t:1.954.546.6789
                            </h1>
                            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                                <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                                t:1.954.546.6789
                            </h1>
                            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                                <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                                t:1.954.546.6789
                            </h1>
                            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                                <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                                t:1.954.546.6789
                            </h1>
                            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-orange-600 duration-300 items-center gap-3 text-xl cursor-pointer '>
                                <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-orange-600 h-[2px] border-none' />{' '}
                                t:1.954.546.6789
                            </h1>
                        </div>
                    </div>



                </div>
                <footer className='border-t-2 w-full h-[10vh] bg-black mb-[-40px]  flex lg:flex-row flex-col md:flex-row  justify-center items-center'>
                    <h1 className='text-slate-200 '>
                        <span className='text-sm'>FIXXERS LUXURY APARTMENT &copy; 2024 All Rights Reserved. </span>
                    </h1>
                    <a href='https://orji-christopher.onrender.com' target="_blank" className='mx-2 text-sm'>
                        Designed by <span className='text-orange-500'>Orji Christopher</span>
                    </a>

                </footer>
            </div>

        </div>
    )
}

export default Footer
