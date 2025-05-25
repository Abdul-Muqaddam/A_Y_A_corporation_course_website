import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Register() {

    const navigate=useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        fname: "",
        lname: "",
        uname: "",
        email: "",
        pass: "",
        passconfirm: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "", // Clear error message on input
        }));
    };

    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.fname) newErrors.fname = "First name is required";
        if (!data.lname) newErrors.lname = "Last name is required";
        if (!data.uname) newErrors.uname = "Username is required";
        if (!data.email) newErrors.email = "Email is required";
        else if (!emailRegex.test(data.email)) newErrors.email = "Invalid email format";
        if (!data.pass) newErrors.pass = "Password is required";
        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.pass)) newErrors.pass = "Password must be at least 8 characters long and include an uppercase letter, a digit, and a special character."
        if (!data.passconfirm) newErrors.passconfirm = "Please confirm your password";
        else if (data.pass !== data.passconfirm) newErrors.passconfirm = "Passwords do not match";

        return newErrors;
    };

    const handleRegister = async (e) => {
        console.log(data.pass.length)
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsLoading(true)
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, data)
                console.log(response.data)
                console.log(data)
                if (response.status == 201) {
                    setIsLoading(false)
                    navigate("/Login",{replace:true})
                }
            } catch (error) {
                setIsLoading(false)
                if(error.status==400){
                    alert("User is already exsiste")
                }
                console.log(error)
            }

            // Proceed with registration logic (e.g. API call)
        }
    };

    return (
        <>
            <div className={`${isLoading?"overflow-hidden":""}`} >

                {
                    isLoading ?
                        <Box sx={{ display: 'flex', position: "fixed", zIndex: 1, alignItems: "center",  justifyContent: "center", width: "100%", height: "150vh", backgroundColor: "#00000080" }}>
                            <CircularProgress sx={{ position:"relative",bottom:100, color: "#390594" }} />
                        </Box> : <div></div>
                }
                <Header isRegister={true} />
                <form className="flex justify-center w-[100%] my-[20px]" onSubmit={handleRegister}>
                    <div className="flex flex-col gap-[10px] w-[350px]">
                        <label className="font-bold">First Name</label>
                        <input type="text" name="fname" placeholder="First Name"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.fname && <span className="text-red-500 text-sm">{errors.fname}</span>}

                        <label className="font-bold">Last Name</label>
                        <input type="text" name="lname" placeholder="Last Name"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.lname && <span className="text-red-500 text-sm">{errors.lname}</span>}

                        <label className="font-bold">User Name</label>
                        <input type="text" name="uname" placeholder="User Name"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.uname && <span className="text-red-500 text-sm">{errors.uname}</span>}

                        <label className="font-bold">E-Mail</label>
                        <input type="text" name="email" placeholder="E-Mail"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                        <label className="font-bold">Password</label>
                        <input type="password" name="pass" placeholder="Password"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.pass && <span className="text-red-500 text-sm">{errors.pass}</span>}

                        <label className="font-bold">Password confirmation</label>
                        <input type="password" name="passconfirm" placeholder="Password Confirmation"
                            className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                            onChange={handleChange} />
                        {errors.passconfirm && <span className="text-red-500 text-sm">{errors.passconfirm}</span>}

                        <div className="flex gap-[5px] items-start">
                            <input className="mt-[7px]" type="checkbox" required />
                            <span>By signing up, I agree with the website's</span>
                        </div>
                        <div className="text-[#7456F1] cursor-pointer">Terms and Conditions</div>

                        <button type="submit" className="bg-[#7456F1] h-[30px] flex justify-center items-center text-white rounded-[3px]">
                            Register
                        </button>
                    </div>
                </form>
                <Footer />
            </div>
        </>
    );
}

export default Register;
