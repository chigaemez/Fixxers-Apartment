import React from 'react'
import Header from '../../Header'

const Hero = () => {
  return (
    <div className="hero min-h-[100vh] object-cover " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <Header />
      <div className="lg:w-[50%] w-[97%] font-serif text-center">
        <h1 className="mb-5 lg:text-7xl text-5xl  font-bold text-slate-200">About Fixxers Apartment</h1>
        <p className="mb-5 text-white text-2xl">Fixxers Apartment is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position from where to explore surroundings</p>
        <button className="btn btn-primary text-white text-xl">Get Started</button>
      </div>
    </div>


  )
}

export default Hero
