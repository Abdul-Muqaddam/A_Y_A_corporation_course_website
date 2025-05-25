import React from "react";
import facebookicon from "../assets/ic_Facebook_footer.svg"
import youtubeicon from "../assets/ic_Youtube_footer.svg"
import instaicon from "../assets/ic_Instagram_footer.svg"

function Footer(){
    return(
        <>
        <footer className="flex items-center justify-around text-[white] bg-gradient-to-r h-[60vh] from-[#220359] to-[#4906BF]">
            <div>
                <div className="my-[20px] font-bold text-[28px]">A-Y-A Corporation</div>
                <div className="flex">
                    <div className="bg-[#7456F1] w-[5px] rounded-[3px]"></div>
                    <div className="mx-[20px] flex flex-col gap-[10px]">
                        <div className="font-bold">Give a man a fish and you feed him for a day;<br />
                                teach a man to fish and you feed him for a <br />
                            lifetime.”</div>
                        <div>—Maimonides</div>
                    </div>
                </div>
            </div>
            <ul>
                <li className="font-semibold text-[20px] cursor-pointer">All Pages</li>
                <li className="cursor-pointer">All Courses</li>
            </ul>

        </footer>
        <div className="flex justify-around my-[20px]">
            <div>
                Copyright © 2025 @A-Y-A Corporation
            </div>
            <div className="flex gap-[10px]">
                <img src={facebookicon} alt="" />
                <img src={youtubeicon} alt="" />
                <img src={instaicon} alt="" />
            </div>
        </div>
        </>
    )
}

export default Footer