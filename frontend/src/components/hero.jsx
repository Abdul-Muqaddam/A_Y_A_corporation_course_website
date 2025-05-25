import React from "react";
import mainImg from "../assets/hero_section_main_img.png"
import MainButton from "./MainButton";


function Hero() {
    return (
        <>
            <main className="bg-gradient-to-r from-[#220359] to-[#4906BF] w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-[10vw] py-12 gap-8">
                {/* Text Section */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className="font-bold text-[28px] sm:text-[32px] md:text-[40px] text-white leading-snug">
                        Learning is <span className="bg-[#FFC224] px-2">What you</span><br />
                        Make of it. Make it Yours <br />
                        at Website.
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <MainButton />
                    </div>
                </div>

                {/* Image Section */}
                <img
                    src={mainImg}
                    alt="Main Visual"
                    className="w-[250px] sm:w-[300px] md:w-[400px] h-auto rounded-[30px]"
                />
            </main>

        </>
    )
}
export default Hero