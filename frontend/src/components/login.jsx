import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Login() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({

        email: "",
        pass: "",

    });

    const [errors, setErrors] = useState({});

    const handleForgetPassword=()=>{
        navigate("/forgetPassword")
    }

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


        if (!data.email) newErrors.email = "Email is required";
        else if (!emailRegex.test(data.email)) newErrors.email = "Invalid email format";
        if (!data.pass) newErrors.pass = "Password is required";

        return newErrors;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsLoading(true)
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, data)
                console.log(response.data.token)
                
                window.localStorage.setItem("token",response.data.token)

                // const token=response.data.token
                // const decoded=jwtDecode(token)
                // console.log(decoded.name)
                // console.log(decoded.email)


                if (response.status == 200) {
                    setIsLoading(false)
                    navigate("/", { replace: true })
                }
            } catch (error) {
                setIsLoading(false)
                if (error.status == 401) {
                    alert("Credentials are wrong")
                }
                else if (error.status == 400){
                    alert("Email is not registered Please Register first")
                }
                console.log(error)
            }

            // Proceed with registration logic (e.g. API call)
        }
    };

    return (
        <>
            {
                isLoading?
                <Box sx={{ position:"fixed", alignItems:"center", justifyContent:"center", display: 'flex',top:0,right:0,left:0, bottom:0,background:"#00000080" }}>
                <CircularProgress />
            </Box>:<div></div>
            }
            <Header isLogin={true} />
            <form className="flex justify-center w-[100%] my-[20px]" onSubmit={handleRegister}>
                <div className="flex flex-col gap-[10px] w-[350px]">
                    <label className="font-bold">Email</label>
                    <input type="email" name="email" placeholder="Email"
                        className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                        onChange={handleChange} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    <label className="font-bold">Password</label>
                    <input type="password" name="pass" placeholder="Password"
                        className="border-2 border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px] focus:outline-none"
                        onChange={handleChange} />
                    {errors.pass && <span className="text-red-500 text-sm">{errors.pass}</span>}
                    <div className="flex justify-between">

                        <div className="flex gap-[6px]">
                            <input type="checkbox" />
                            <div className="font-semibold">
                                Keep me signed in
                            </div>
                        </div>
                        <div onClick={handleForgetPassword} className=" cursor-pointer text-[#7456F1] font-semibold">
                            Forgot Password?
                        </div>
                    </div>
                    <button type="submit" className="bg-[#7456F1] h-[30px] flex justify-center items-center text-white rounded-[3px]">
                        Login
                    </button>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Login