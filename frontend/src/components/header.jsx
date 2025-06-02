import React, { useEffect, useState } from "react";
import searchImg from '../assets/ic_landing_page_search.svg'
import shoppingImg from '../assets/ic_landing_page_shopping.svg'
import ProfileImg from '../assets/ic_landing_page_profile.svg'
import iconDropDown from "../assets/ic_drop_down.svg"
import { Link, replace } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
function Header(props) {
    const navigate = useNavigate()
    const [isDropDownShow, setIsDropDownShow] = useState(false)
    const [nameGeneratedFromToken, setNameGeneratedFromToken] = useState("")
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {

        // setToken()
        try {

            const decodedToken = jwtDecode(localStorage.getItem("token"))
            setNameGeneratedFromToken(decodedToken.name)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const handleDropDownMenu = () => {
        setIsDropDownShow(!isDropDownShow)


    }

    const handleLogout = () => {
        setIsDropDownShow(false)
        setNameGeneratedFromToken("")
        window.localStorage.removeItem("token")

        alert("Your Have Successfully Logged Out")

    }

    const handleLogin = () => {
        navigate("/Login", { replace: true })
    }

    const handleRegisteration = () => {
        navigate("/Register", { replace: true })
    }

    const handleAllCourseNavigation = () => {
        navigate("/allCourses")
    }

    const handleHomeNavigation = () => {
        navigate("/")
    }

    const handleContactUs = ()=>{
        navigate("/ContactUs")
    }

    const handleAboutUs =() =>{
        navigate("/AboutUs")
    }
    return (
        <>
            <header className='bg-white shadow-md'>
                <nav className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[75px] flex justify-between items-center'>
                    <div className="font-semibold text-[22px] text-[#4906BF]">
                        A-Y-A Corporation
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex gap-4 items-center text-sm font-medium'>
                        <li onClick={handleHomeNavigation} className="cursor-pointer hover:text-[#460FB0]">Home</li>

                        <li onClick={handleAllCourseNavigation} className="cursor-pointer hover:text-[#460FB0]">All Courses</li>
                        
                        <li className="cursor-pointer hover:text-[#460FB0]" onClick={handleAboutUs}>About Us</li>
                        <li className="cursor-pointer hover:text-[#460FB0]" onClick={handleContactUs}>Contact Us</li>

                    </ul>

                    {/* Right Side */}
                    <div className="hidden md:flex gap-4 items-center">
                        <img src={searchImg} alt="Search" className='h-5 w-5' />
                        <span>0.0$</span>
                        <img src={shoppingImg} alt="Cart" className='h-5 w-5' />
                        <img src={ProfileImg} alt="Profile" className='h-6 w-6 rounded-full' />

                        {nameGeneratedFromToken ? (
                            <button
                                onClick={handleDropDownMenu}
                                className="bg-[#5E3FDE] px-3 py-1 text-white rounded flex items-center gap-1"
                            >
                                Hello {nameGeneratedFromToken}
                                <img src={iconDropDown} alt="" className="w-3 mt-[2px]" />
                            </button>
                        ) : props.isRegister ? (
                            <button className="bg-[#5E3FDE] w-[80px] py-1 text-white rounded" onClick={handleLogin}>
                                Login
                            </button>
                        ) : (
                            <button className="bg-[#5E3FDE] w-[80px] py-1 text-white rounded" onClick={handleRegisteration}>
                                Register
                            </button>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg className="w-6 h-6 text-[#4906BF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white px-4 pb-4 space-y-2">
                        <ul className="space-y-2 text-sm font-medium">
                            <li onClick={handleHomeNavigation} className="cursor-pointer hover:text-[#460FB0]">Home</li>
                            <li className="cursor-pointer hover:text-[#460FB0]">Dashboard</li>
                            <li onClick={handleAllCourseNavigation} className="cursor-pointer hover:text-[#460FB0]">All Courses</li>
                            <li className="cursor-pointer hover:text-[#460FB0]">Resource</li>
                            <li className="cursor-pointer hover:text-[#460FB0]">Contact</li>
                        </ul>
                        <div className="mt-2 flex flex-col gap-2">
                            {nameGeneratedFromToken ? (
                                <button
                                    onClick={handleDropDownMenu}
                                    className="bg-[#5E3FDE] py-2 text-white rounded"
                                >
                                    Hello {nameGeneratedFromToken}
                                </button>
                            ) : props.isRegister ? (
                                <button className="bg-[#5E3FDE] py-2 text-white rounded" onClick={handleLogin}>
                                    Login
                                </button>
                            ) : (
                                <button className="bg-[#5E3FDE] py-2 text-white rounded" onClick={handleRegisteration}>
                                    Register
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Dropdown (Logout) */}
                {isDropDownShow && (
                    <div className="absolute right-4 top-[75px] bg-white border border-gray-300 shadow-md px-4 py-2 rounded-md z-10">
                        <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">Logout</button>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header