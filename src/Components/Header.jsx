import React, { useEffect, useState } from 'react'
import { Logo } from '../assets/Image/Index'
import AboutDropDown from './Dropdown/AboutDropDown'
import RoomsDropDown from './Dropdown/RoomsDropDown'
import NewsDropDown from './Dropdown/NewsDropDown'
import { Link } from 'react-router-dom'

const Header = () => {
    const [open, setOpne] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Attach event listener to window scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu);
    };

    const scrollpage = () => {
        window.scrollTo(0, 0);
    }


    return (
        <>
            <div className={`${scrolled ? "navbar justify-between border-b-2 w-[100%]  bg-transparent  z-[999] absolute top-0 right-0" : 'fixed top-0 navbar justify-between border-b-2   bg-transparent  z-[999]'}`}>
                <Link to="/" onClick={scrollpage}>
                    <img src={Logo} alt="logo" className="w-[70%] " />
                </Link>

                {/* Responsive Toggle */}
                <div className="lg:hidden block space-y-1 cursor-pointer" onClick={handleMenuClick}>
                    <div
                        className={`w-[25px] h-[4px] bg-slate-100 transition-all  duration-500  ${toggleMenu ? 'rotate-45 translate-y-2' : ''}`}
                    ></div>
                    <div
                        className={`w-[25px] h-[4px] bg-slate-100 transition-all duration-1000 ${toggleMenu ? 'hidden' : ''}`}
                    ></div>
                    <div
                        className={`w-[25px] h-[4px] bg-slate-100 transition-all duration-500  ${toggleMenu ? '-rotate-45' : ''}`}
                    ></div>
                </div>

                {/* Responsive Menu */}
                {toggleMenu && (
                    <div className="lg:hidden w-full flex absolute top-16 right-0 bg-white ['2 ] bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-md py-10 px-10">
                        <ul className="flex flex-col space-y-10 ">
                            <Link to="/">
                                <li className="hover:text-primary2 text-slate-600 transition-all cursor-pointer text-xl">Home</li>
                            </Link>
                            <a className="group">
                                <li className="hover:text-primary2 text-slate-600 transition-all cursor-pointer text-xl">
                                    About
                                </li>
                                <ul>
                                    <AboutDropDown />
                                </ul>
                            </a>

                            <li className=''>
                                <a to="" className="group ">
                                    <li className=" hover:text-primary2 text-slate-600 transition-all cursor-pointer text-xl">
                                        <a href="#">News</a>
                                    </li>

                                    <NewsDropDown />

                                </a>
                            </li>
                            <li className=''>
                                <a to="" className="group ">
                                    <li className=" relative  text-slate-600  cursor-pointer text-xl">
                                        <a href="#">Room </a>
                                    </li>
                                    <RoomsDropDown />
                                </a>
                            </li>
                            <Link >
                                <li className="hover:text-primary2 text-slate-600 transition-all cursor-pointer text-xl">LOGIN</li>
                            </Link>
                        </ul>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className='lg:flex hidden items-center justify-between lg:w-[90%]'>

                    <ul className="menu menu-horizontal px-1" >
                        <li className=''>
                            <a to="" className="group ">
                                <li className=" relative  text-white  cursor-pointer text-lg">
                                    <a href="#">Home
                                    </a>
                                </li>
                            </a>
                        </li>
                        <li className=''>
                            <a to="" className="group ">
                                <li className=" relative  text-white  cursor-pointer text-lg">
                                    <a href="#">About
                                    </a>
                                </li>
                                <AboutDropDown />
                            </a>
                        </li>
                        <li className=''>
                            <a to="" className="group ">
                                <li className=" relative  text-white  cursor-pointer text-lg">
                                    <a href="#">Room </a>
                                </li>
                                <RoomsDropDown />
                            </a>
                        </li>
                        <li className=''>
                            <a to="" className="group ">
                                <li className=" relative  text-white  cursor-pointer text-lg">
                                    <a href="#">News</a>
                                </li>

                                <NewsDropDown />

                            </a>
                        </li>
                        <li className=''>
                            <a to="" className="group ">
                                <li className=" relative  text-white  cursor-pointer text-lg">
                                    <a href="#">Typography
                                    </a>
                                </li>
                            </a>
                        </li>


                    </ul>
                    <button className='btn bg-transparent w-[10%] text-white'>Contact</button>
                </div>
            </div>
        </>
    )
}

export default Header
