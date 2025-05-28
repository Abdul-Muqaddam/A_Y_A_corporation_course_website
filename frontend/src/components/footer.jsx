import React from "react";
import facebookicon from "../assets/ic_Facebook_footer.svg"
import youtubeicon from "../assets/ic_Youtube_footer.svg"
import instaicon from "../assets/ic_Instagram_footer.svg"
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate=useNavigate()

    const handleTermAndCondition=()=>{
        navigate("/TermsAndCondition")
    }

    const handlePrivacyPolicy=()=>{
        navigate("/PrivacyPolicy")
    }
    const handleRefundPolicy=()=>{
        navigate("/RefundPolicy")
    }
    return (
        <>
            <footer className="bg-gradient-to-r from-[#220359] to-[#4906BF] text-white py-10 px-4 sm:px-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
                    {/* Logo and Quote Section */}
                    <div>
                        <div className="font-bold text-2xl mb-4">A-Y-A Corporation</div>
                        <div className="flex items-start">
                            <div className="bg-[#7456F1] w-1 h-full rounded-md mr-4" />
                            <div className="flex flex-col gap-2">
                                <p className="font-bold leading-snug">
                                    “Give a man a fish and you feed him for a day; <br />
                                    teach a man to fish and you feed him for a lifetime.”
                                </p>
                                <span>— Maimonides</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-2">
                        <li className="font-semibold text-lg cursor-pointer ">All Pages</li>
                        <li className="cursor-pointer hover:text-[#d4d3d3]">All Courses</li>
                        <li className="cursor-pointer hover:text-[#d4d3d3]" onClick={handleTermAndCondition}>Terms of service</li>
                        <li className="cursor-pointer hover:text-[#d4d3d3]" onClick={handlePrivacyPolicy}>Privacy policy</li>
                        <li className="cursor-pointer hover:text-[#d4d3d3]" onClick={handleRefundPolicy}>Refund policy</li>
                    
                    </ul>
                </div>
            </footer>

            {/* Bottom Footer Strip */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-4 text-sm text-white bg-[#1A0143]">
                <div className="text-center md:text-left mb-2 md:mb-0">
                    Copyright © 2025 @A-Y-A Corporation
                </div>
                <div className="flex gap-4">
                    <img src={facebookicon} alt="Facebook" className="h-5 w-5 cursor-pointer" />
                    <img src={youtubeicon} alt="YouTube" className="h-5 w-5 cursor-pointer" />
                    <img src={instaicon} alt="Instagram" className="h-5 w-5 cursor-pointer" />
                </div>
            </div>

        </>
    )
}

export default Footer