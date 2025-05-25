import React from "react";
import mainImg from "../assets/hero_section_main_img.png"
import MainButton from "./MainButton";


function Hero() {
    return (
        <>
            <main className="bg-gradient-to-r from-[#220359] to-[#4906BF] w-[100%] h-[120vh] flex items-center justify-between px-[10vw]">
                <div className="flex flex-col gap-[10px]">
                    <div className="font-bold text-[40px] text-[white] ">
                        Learning is <span className="bg-[#FFC224] px-[8px]">What you</span><br />
                        Make of it. Make it Yours <br />
                        at Website.
                    </div>
                    <div>
                        <MainButton/>
                    </div>
                </div>
                <img src={mainImg} alt="" className="h-[400px] w-[400px] rounded-[30px]" />

            </main>
        </>
    )
}
export default Hero