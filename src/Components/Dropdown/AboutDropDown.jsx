import React from 'react'
import { Link } from 'react-router-dom';

const AboutDropDown = () => {

  const scrollpage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className=' absolute w-[23rem] z-[999] top-[3.0rem] lg:left-[-2rem] left-[1rem] p-4  hidden group-hover:block hover:block'>
        <ul className=' relative flex flex-col items-start my-3 rounded-b-md border-none  m bg-white'>
          <li className=' gap-6  w-full b mt-4 border-b-2'>
            <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
              <div className='block w-full'>
                <Link to='/about' className='font-semibold text-gray-700 text-base w-full'>
                  About Fixxers Apartment
                </Link>
              </div>
            </div>
          </li>

          <li className=' gap-6  w-full b mt-4 border-b-2'>
            <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
              <div className='block w-full'>
                <Link to='/contact' className='font-semibold text-gray-700 text-base w-full'>
                  Contact Us
                </Link>
              </div>
            </div>
          </li>
          <li className=' gap-6  w-full b mt-4 border-b-2'>
            <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
              <div className='block w-full'>
                <Link to='' className='font-semibold text-gray-700 text-base w-full'>
                  Gallery
                </Link>
              </div>
            </div>
          </li>
          <li className=' gap-6  w-full b mt-4 border-b-2'>
            <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
              <div className='block w-full'>
                <Link to='/amenities' className='font-semibold text-gray-700 text-base w-full'>
                  Hotel Amenities
                </Link>
              </div>
            </div>
          </li>
          <li className=' gap-6  w-full b mt-4 border-b-2'>
            <div className='flex gap-3 w-full cursor-pointer hover:shadow-sm px-2 py-2 rounded-lg'>
              <div className='block w-full'>
                <Link to='/bar' className='font-semibold text-gray-700 text-base w-full'>
                  Resturant & Bars
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default AboutDropDown
