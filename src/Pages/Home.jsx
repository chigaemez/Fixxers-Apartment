import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/home/Hero'
import About from '../Components/home/About'
import Suites from '../Components/home/Suites'
import OverView from '../Components/home/OverView'
import Residences from '../Components/home/Residences'
import OurApartment from '../Components/home/OurApartment'
import Testimonias from '../Components/home/Testimonias'
import OurResturant from '../Components/home/OurResturant'
import News from '../Components/home/News'
import NewsAndEvent from '../Components/home/NewsAndEvent'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div className=' h-screen'>
            <Header />
            <Hero />
            <About />
            {/* <Suites /> */}
            <OverView />
            <Residences />
            <OurApartment />
            <Testimonias />
            <OurResturant />
            <News />
            <NewsAndEvent />

            <Footer />
        </div>
    )
}

export default Home
