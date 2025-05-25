import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
function ForgetPassword() {
    const [email,setEmail]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleForgetButton=()=>{
        console.log(email)
    }
    return (
        <>
            <Header />
            <div className="flex flex-col gap-[10px] items-center justify-center my-[20px]">
            <h1 className="text-[28px] font-bold">
                Forget Password
            </h1>
            <div className=" text-center">
                Please enter your email address to <br /> reset your password
            </div>
            <input onChange={handleEmail} type="email" placeholder="Email" className=" w-[350px] focus:outline-none border-[2px] border-[#DCDFE5] py-[5px] px-[5px] rounded-[5px]" />
            <button onClick={handleForgetButton} className="w-[350px] rounded-[5px] bg-[#460FB0] py-[7px] text-[white]">
                Reset Password
            </button>
            </div>
            <Footer />
        </>
    )
}
export default ForgetPassword