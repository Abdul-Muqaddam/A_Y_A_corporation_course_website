import React from "react";
import { useState } from "react";
import MainButton from "./MainButton";
import courseImgFrontDevelopment from "../assets/course_img_frontenddevelopment.png"
import iconNoOfLessons from "../assets/ic_course_card_total_lesson_num.svg"
import iconCourseDuration from "../assets/ic_course_card_total_lesson_duration.svg"
import iconCertificateIS from "../assets/ic_course_card_total_lesson_certificate.svg"

function Course() {
    const [isAllCourse,setIsAllCourse]=useState(true)
    const handleCategoryToggle=()=>{
        setIsAllCourse(!isAllCourse)
    }
    const courseProperties = [
        {
            img: iconNoOfLessons,
            attib: "05",
        },
        {
            img: iconCourseDuration,
            attib: "11h 20m",
        },
        {
            img: iconCertificateIS,
            attib: "22",
        },
    ];
    return (
        <>
            <div className="bg-gradient-to-r from-[#220359] to-[#4906BF] h-[130vh] w-[100%]  flex flex-col items-center justify-center gap-[10px]">
                <div className="bg-[#EFEEFE] text-[#5751E1] text-[16px] rounded-[30px] px-[15px] py-[5px]">
                    Top Class course
                </div>
                <div className="text-[white] text-[36px] font-semibold">
                    Explore Our World's Best Courses
                </div>
                <div className="text-[#6D6C80]">
                    When known printer took a galley of type scrambl edmake
                </div>
                <div>
                    <div className="flex gap-[10px] justify-center">
                        <span onClick={handleCategoryToggle} className={`${isAllCourse?"text-[#ffffff] font-medium":"text-[#7F7E97]"} cursor-pointer `}>All Courses</span>
                        <span onClick={handleCategoryToggle} className={`${isAllCourse?" text-[#7F7E97]":"text-[#ffffff] font-medium"} cursor-pointer`}>Development</span>
                    </div>
                    <div className="w-[30vw] h-[0.5vh] bg-[white]"></div>

                </div>
                <div className="bg-[white] flex flex-col gap-[10px] px-[20px] py-[20px] rounded-[10px]">
                    <img src={courseImgFrontDevelopment} className="h-[200px] rounded-[10px]" alt="" />
                    <div className="flex justify-between">
                        <div className="bg-[#EFEFF2] text-[13px] px-[10px] flex items-center font-semibold rounded-[50px]">Development</div>

                        <div className="flex gap-[5px] items-center">
                            <span className="line-through text-[14px]">$29.00</span>
                            <span className="text-[18px] font-semibold text-[#5751E1]">$9.00</span>

                        </div>
                    </div>
                    <div className="text-[18px] text-[#161439] font-semibold">
                        Learning JavaScript With <br /> Imagination
                    </div>
                    <hr />
                    <div className="flex gap-[10px]">

                        {courseProperties.map((item) => (
                            <div className="flex gap-[5px]">
                                <img src={item.img} alt="" />
 
                                <div>{item.attib}</div>
                            </div>
                        ))}
                    </div>
                    <MainButton />
                </div>
            </div>
        </>
    );
}

export default Course;
