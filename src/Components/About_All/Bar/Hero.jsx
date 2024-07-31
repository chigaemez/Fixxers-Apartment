import React from 'react'
import Header from '../../Header'
import { istockphoto } from '../../../assets/Image/Index'

const Hero = () => {
    return (
        <div className="hero min-h-[100vh] object-cover " style={{ backgroundImage: `url(${istockphoto})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <Header />
            <div className="lg:w-[50%] w-[97%] font-serif text-center">
                <h1 className="mb-5 lg:text-7xl text-5xl  font-bold text-slate-200">Restaurant & Bar</h1>
                <p className="mb-5 text-white text-2xl">Indulge your taste buds at our Albatross restaurant and bar. Request what you want and our professional chefs will cook for you. Enjoy your food with wonderful view from restaurants terrace.</p>

            </div>
        </div>
    )
}

export default Hero
