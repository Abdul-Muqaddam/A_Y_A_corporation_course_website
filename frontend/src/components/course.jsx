import React from "react";
import { useState } from "react";
import MainButton from "./MainButton";
import courseImgFrontDevelopment from "../assets/course_img_frontenddevelopment.png"
import iconNoOfLessons from "../assets/ic_course_card_total_lesson_num.svg"
import iconCourseDuration from "../assets/ic_course_card_total_lesson_duration.svg"
import iconCertificateIS from "../assets/ic_course_card_total_lesson_certificate.svg"

function Course() {
    const [isAllCourse, setIsAllCourse] = useState(true)
    const handleCategoryToggle = () => {
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
            <div className="bg-gradient-to-r from-[#220359] to-[#4906BF] w-full py-16 px-4 sm:px-8 flex flex-col items-center gap-4">
                {/* Top Badge */}
                <div className="bg-[#EFEEFE] text-[#5751E1] text-sm rounded-full px-4 py-1">
                    Top Class Course
                </div>

                {/* Headline */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                    Explore Our World's Best Courses
                </h2>

                {/* Subheadline */}
                <p className="text-[#D1D0EB] text-center max-w-xl">
                    When known printer took a galley of type scrambled and made
                </p>

                {/* Category Toggle */}
                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="flex gap-4">
                        <span
                            onClick={handleCategoryToggle}
                            className={`cursor-pointer ${isAllCourse ? "text-white font-medium" : "text-[#7F7E97]"
                                }`}
                        >
                            All Courses
                        </span>
                        <span
                            onClick={handleCategoryToggle}
                            className={`cursor-pointer ${!isAllCourse ? "text-white font-medium" : "text-[#7F7E97]"
                                }`}
                        >
                            Development
                        </span>
                    </div>
                    <div className="w-[60vw] max-w-sm h-[2px] bg-white" />
                </div>

                {/* Course Card */}
                <div className="bg-white mt-8 w-full max-w-md rounded-lg p-5 flex flex-col gap-4 shadow-lg">
                    <img
                        src={courseImgFrontDevelopment}
                        alt="Course"
                        className="h-52 w-full object-cover rounded-md"
                    />

                    {/* Badge + Price */}
                    <div className="flex justify-between items-center">
                        <div className="bg-[#EFEFF2] text-xs px-3 py-1 font-semibold rounded-full">
                            Development
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="line-through text-sm text-gray-500">$29.00</span>
                            <span className="text-lg font-semibold text-[#5751E1]">$9.00</span>
                        </div>
                    </div>

                    {/* Course Title */}
                    <div className="text-lg font-semibold text-[#161439] leading-snug">
                        Learning JavaScript With <br /> Imagination
                    </div>

                    <hr className="border-gray-200" />

                    {/* Course Properties */}
                    <div className="flex flex-wrap gap-4 text-sm text-[#161439]">
                        {courseProperties.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src={item.img} alt="" className="h-4 w-4" />
                                <span>{item.attib}</span>
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
