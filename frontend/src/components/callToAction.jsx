import React from "react";
import CTAimg from "../assets/img_CTA_become_student.png"
import MainButton from "./MainButton";

function CallToAction(){
    return(
        <>
        <div className="flex items-center justify-center py-[20px]">
            <div className="flex items-center border-2 border-[#BDBDBD] rounded-[16px] ">
                <img className="w-[300px]" src={CTAimg} alt="" />
                <div className="flex flex-col gap-[10px] mx-[20px]">
                <div className="font-semibold text-[28px]">
                    Become a Student
                </div>
                <p className="text-[#6D6C80]">
                    Join millions of people from around the world <br />
                    learning together. Online learning.
                </p>
                <MainButton/>
                </div>
            </div>
        </div>
        </>
    )
}
export default CallToAction