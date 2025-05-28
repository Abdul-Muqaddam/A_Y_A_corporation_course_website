import React from "react";
import CTAimg from "../assets/img_CTA_become_student.png";
import MainButton from "./MainButton";

function CallToAction() {
    return (
        <div className="flex items-center justify-center py-[20px] px-4">
            <div className="flex flex-col md:flex-row items-center border-2 border-[#BDBDBD] rounded-[16px] p-4 md:p-6 max-w-[1000px] w-full">
                <img className="w-[100%] md:w-[300px] mb-4 md:mb-0 md:mr-6" src={CTAimg} alt="Become a Student" />
                <div className="flex flex-col gap-[10px] text-center md:text-left">
                    <div className="font-semibold text-[24px] md:text-[28px]">
                        Become a Student
                    </div>
                    <p className="text-[#6D6C80] text-[14px] md:text-[16px]">
                        Join millions of people from around the world <br className="hidden md:block" />
                        learning together. Online learning.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <MainButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
