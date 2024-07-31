import React from 'react'
import Header from '../../Header'

const Hero = () => {
    return (
        <div className="hero min-h-[100vh] object-cover " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <Header />
            <div className="lg:w-[50%] w-[97%] font-serif text-center">
                <h1 className="mb-5 lg:text-7xl text-5xl  font-bold text-slate-200">Hotel Amenities</h1>
                <p className="mb-5 text-white text-2xl">Indulge your taste buds at our Albatross restaurant and bar. Request what you want and our professional chefs will cook for you. Enjoy your food with wonderful view from restaurants terrace.</p>
                <button className="btn btn-primary bg-orange-400 border-none text-white text-xl lg:text-lg">Get Started</button>
            </div>
        </div>
    )
}

export default Hero
