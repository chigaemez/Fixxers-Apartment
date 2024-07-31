import React from 'react'
import { images } from '../../../assets/Image/Index'

const Form = () => {
    return (
        <div className='flex items-center justify-center bg-white'>
            <div className="flex lg:flex-row flex-col lg:w-[80%] w-[90%] items-center justify-center my-[8rem] ">
                <div>
                    <img src={images} alt="" className='w-[100%] h-[80vh] object-cover rounded-lg' />
                </div>
                <div className='bg-slate-100 rounded-md shadow-lg h-[70vh] lg:w-[70%] w-[100%] lg:ml-[-50px] '>
                    <form className='flex flex-col items-center justify-center'>
                        <label className="form-control w-[97%] gap-2 flex items-center justify-center flex-row mx-2">
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text text-slate-600 text-lg ">Your Name?</span>
                                </div>
                                <input type="text" placeholder="Type Your Name" className="input input-bordered w-full " />
                            </div>
                            <div className='w-full'>
                                <div className="label">
                                    <span className="label-text text-slate-600 text-lg">Your Email?</span>
                                </div>
                                <input type="email" placeholder="Type Your Email" className="input input-bordered w-full " />
                            </div>

                        </label>
                        <div className='w-[97%]  my-[5rem]'>
                            <div className="label">
                                <span className="label-text text-slate-600 text-lg">What is your Message?</span>
                            </div>
                            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-[100%] resize-none " ></textarea>
                        </div>

                        <button className="btn btn-wide">Send</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
