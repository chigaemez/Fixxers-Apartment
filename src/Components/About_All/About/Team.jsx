import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { teamData } from '../../../data'

const Team = () => {
    return (
        <div className='flex items-center justify-center bg-slate-100'>

            <div className='flex flex-col items-center justify-center w-[80%] '>
                <h1 className='lg:text-5xl text-4xl my-[2rem] text-slate-600 font-semibold font-mono'>Our Friendly Team</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  place-items-center  gap-5 w-full">
                    {
                        teamData.map((teams, index) => (
                            <div className=" card w-full bg-base-100 shadow-xl h-[60vh] lg:mx-5 my-[5rem] hover:scale-[1.1] duration-500">
                                <figure><img src={teams.image} alt="Shoes" className='w-[100%] h-[40vh]' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {teams.Name}
                                    </h2>
                                    <p>{teams.Role}</p>
                                    <div className="card-actions justify-between my-4">
                                        <div className="badge badge-outline "><FaFacebook /></div>
                                        <div className="badge badge-outline"><FaInstagram /></div>
                                        <div className="badge badge-outline"><FaTwitter /></div>
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

export default Team
