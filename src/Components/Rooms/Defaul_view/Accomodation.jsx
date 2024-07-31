import React from 'react'
import { images } from '../../../assets/Image/Index'
import { FaUserFriends, FaWifi, FaEye } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

const Accomodation = () => {
  return (
    <div className='flex items-center  justify-center bg-primary w-[100% ]'>
      <div className="flex flex-col mt-[7rem] items-center justify-center w-[80%]">
        <h1 className='text-5xl text-slate-100 font-serif my-[4rem]' >Accommodations</h1>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex w-[100%] flex-col ">
            <img src={images} alt="" className='object-cover w-[80%] h-[80vh]' />
            <div className="flex flex-col bg-white w-[80%] px-5">
              <h1 className='text-5xl font-serif font-medium my-7 text-slate-700'>Luxury Single Room</h1>
              <p className='text-2xl text-orange-500 font-medium'>₦60,000  <span className='text-lg'>/ per night</span></p>
              <p className='text-slate-600 text-lg my-8 tracking-wide leading-loose'>Are you in search of the perfect blend of comfort, style, and sophistication in Ibadan? Look no further than our exquisite Luxury Single Room nestled in the heart of this vibrant city. This meticulously designed apartment offers a unique living experience that combines modern amenities with a touch of opulence. Key Features: Elegant Interior Design: […]</p>
              <div className="grid grid-cols-2 gap-[1rem]">
                <p className='text-xl flex items-center gap-2'><FaUserFriends className='text-orange-400' /> Adults: 2</p>
                <p className='text-xl flex items-center gap-2'><FaWifi className='text-orange-400' /> Terrace, Wi-Fi</p>
                <p className='text-xl flex items-center gap-2'><FaPerson  className='text-orange-400' /> Children: 2</p>
                <p className='text-xl flex items-center gap-2'><FaEye className='text-orange-400' /> View: City View</p>
              </div>
            </div>

          </div>


          <div className='w-[60%] gap-[40px] h-[70vh] flex flex-col items-center justify-center bg-white'>
            <div className="flex flex-col mx-auto justify-center w-full">
              <label className='text-left ml-[25px] text-slate-700 '>Check-in: *</label>
              <input type="date" placeholder='Check-in Date ' className='w-[90%] mx-auto h-[50px] rounded px-3 outline-none bg-slate-100 border text-slate-700 ' />
            </div>
            <div className="flex flex-col mx-auto justify-center w-full">
              <label className='text-left ml-[25px] text-slate-700 '>Check-in: *</label>
              <input type="date" placeholder='Check-in Date ' className='w-[90%] mx-auto h-[50px] rounded px-3 outline-none bg-slate-100 border text-slate-700 ' />
            </div>

            <div className="flex flex-col mx-auto justify-center w-full">
              <label className='text-left ml-[25px] text-slate-700 '>No. of Adults: *</label>
              <select name="Adult" id="" className='w-[90%] mx-auto h-[50px] rounded px-3 outline-none bg-slate-100 border text-slate-700 '>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="flex flex-col mx-auto justify-center w-full">
              <label className='text-left ml-[25px] text-slate-700 '>No. of Children: *</label>
              <select name="Adult" id="" className='w-[90%] mx-auto h-[50px] rounded px-3 outline-none bg-slate-100 border text-slate-700 '>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="flex flex-col mx-auto items-center justify-center w-full">
              <button className='btn w-[90%] text-xl hover:bg-orange-600 outline-none bg-primary border-none '>
                Search
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Accomodation
