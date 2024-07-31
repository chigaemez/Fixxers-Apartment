import React from 'react'

const NewsDropDown = () => {
    return (
        <div>
            <div className=' absolute z-[999] w-[20rem] top-[3.0rem] left-[-2rem] p-4  hidden group-hover:block hover:block'>
                <ul className=' flex flex-col items-start my-3 rounded-b-md border-none  m bg-white'>
                    <li className=' gap-6  w-full b mt-4 border-b-2'>
                        <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
                            <div className='block w-full'>
                                <a href='' className='font-semibold text-gray-700 text-base w-full'>
                                    News Default View
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className=' gap-6  w-full b mt-4 border-b-2'>
                        <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
                            <div className='block w-full'>
                                <a href='' className='font-semibold text-gray-700 text-base w-full'>
                                    Single Post
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default NewsDropDown
