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
    const navigate=useNavigate()
    const [isDropDownShow,setIsDropDownShow]=useState(false)
    const [nameGeneratedFromToken,setNameGeneratedFromToken]=useState("")
    
    useEffect(()=>{

        // setToken()
        try{
            
            const decodedToken= jwtDecode(localStorage.getItem("token"))
            setNameGeneratedFromToken(decodedToken.name)
        }catch(error){
            console.log(error)
        }

    },[])

    const handleDropDownMenu=()=>{
        setIsDropDownShow(!isDropDownShow)


    }
    
    const handleLogout=()=>{
        setIsDropDownShow(false)
        setNameGeneratedFromToken("")
        window.localStorage.removeItem("token")
        
        alert("Your Have Successfully Logged Out")

    }

    const handleLogin=()=>{
        navigate("/Login",{replace:true})
    }

    const handleRegisteration=()=>{
        navigate("/Register",{replace:true})
    }

    const handleAllCourseNavigation=()=>{
        navigate("/allCourses")
    }

    const handleHomeNavigation=()=>{
        navigate("/")
    }

    return (
        <>
            <header className='flex justify-center h-[75px] items-center  '>
                <nav className='w-[90vw] flex justify-between'>
                    <div className="font-semibold text-[25px] text-[#4906BF]">
                        A-Y-A Corporation
                    </div>
                    <ul className='flex gap-[15px] items-center'>
                        <li onClick={handleHomeNavigation} className="cursor-pointer hover:text-[#460FB0]">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-[#460FB0]">
                            Dashboard
                        </li>
                        <li onClick={handleAllCourseNavigation} className="cursor-pointer hover:text-[#460FB0]">
                            All Courses
                        </li>
                        <li className="cursor-pointer hover:text-[#460FB0]">
                            Resource
                        </li>
                        <li className="cursor-pointer hover:text-[#460FB0]">
                            Contact
                        </li>
                    </ul>
                    <div className="flex gap-[10px] items-center">
                        <img src={searchImg} alt="" className='h-[20px] w-[20px]' />
                        <div>
                            0.0$
                        </div>
                        <img src={shoppingImg} alt="" />
                        <img src={ProfileImg} alt="" />
                        




                        {

                            nameGeneratedFromToken ?
                            

                            <button onClick={handleDropDownMenu} className="bg-[#5E3FDE]  px-[10px] h-[35px] text-white rounded-[5px] flex items-center justify-center gap-[5px]" >Hello {nameGeneratedFromToken} <img src={iconDropDown} alt="" className="w-[14px] mt-[5px]" /></button>

                            
                            
                            :
 


                            props.isRegister ?

                                    <button className="bg-[#5E3FDE] w-[80px] h-[35px] text-white rounded-[5px]" onClick={handleLogin}>Login</button>
                                :
                                
                                    <button onClick={handleRegisteration} className="bg-[#5E3FDE] w-[80px] h-[35px] text-white rounded-[5px]" >Register</button>
                                
                        }
                    </div>
                </nav>
            </header>
            {
                isDropDownShow?   
                <div className="bg-white border-[2px]  border-gray-500 rounded-[5px] flex justify-center w-[100px] absolute right-[35px] top-[60px] ">
                 <button onClick={handleLogout}>Logout</button>
                </div>:<div></div>
            }
        </>
    )
}

export default Header