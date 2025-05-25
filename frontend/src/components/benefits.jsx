import React from "react";
import expertTutoricon from "../assets/ic_benefits_cards_expert_tutor.svg"
import costEffectiveIcon from "../assets/ic_benefits_cards_expert_cost_effective.svg"
import sparkleImg from "../assets/ic_benefits_cards_sparkle.svg"
import benefitsMainPicture from "../assets/img_benefits_section_main.png"
import checklisticon from "../assets/ic_benefits_checklist.svg"
import MainText from "./MainText";
import MainButton from "./MainButton"

function Benefits() {

    const benefitsCards = [
        {
            icon: expertTutoricon,
            label: "Expert Tutors",
            description: "when an unknown printer took a galley offer type and scrambled makes.",
            bgColor: "bg-[#F1FDFF]",
            shadowColor: "#C9E4E9",

        },
        {
            icon: costEffectiveIcon,
            label: "Effective Courses",
            description: "when an unknown printer took a galley offer type and scrambled makes.",
            bgColor: "bg-[#EDEAFF]",
            shadowColor: "#D9D5F1",
        }
    ]

    const benefits = [
        {
            img: checklisticon,
            label: "The Most World Class Instructors",
        },
        {
            img: checklisticon,
            label: "Access Your Class anywhere",
        },
        {
            img: checklisticon,
            label: "Flexible Course Plan",
        },
    ];


    return (
        <>
            <div>
                {/* Section: Top Features */}
                <div className="flex flex-col w-full pt-[100px] gap-5 pb-4 items-center overflow-x-hidden px-4 sm:px-8">
                    <MainText text="Our Top Features" />
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-[36px] text-center">
                        Achieve Your Goal With SkillGrow
                    </h1>
                    <p className="text-[#6D6C80] text-center max-w-2xl">
                        when an unknown printer took a galley of type and scrambled make <br className="hidden sm:block" />
                        specimen book has survived not only five centuries
                    </p>

                    {/* Feature Cards */}
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-6 w-full">
                        {benefitsCards.map((item, index) => (
                            <div
                                key={index}
                                style={{ boxShadow: `8px 8px ${item.shadowColor}` }}
                                className={`${item.bgColor} rounded-[20px] w-full sm:w-[80%] md:w-[40%] lg:w-[30%] max-w-[350px] h-[200px] flex flex-col gap-4 px-6 py-8 justify-center`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img src={item.icon} alt="icon" />
                                        <div className="font-semibold text-[20px]">{item.label}</div>
                                    </div>
                                    <img src={sparkleImg} alt="sparkle" />
                                </div>
                                <div className="text-sm text-[#161439]">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section: About Us */}
                <div className="flex flex-col lg:flex-row justify-between items-center py-[80px] px-6 sm:px-12 lg:px-[100px] gap-10">
                    <img className="h-[300px] md:h-[400px] lg:h-[550px] object-cover rounded-[20px]" src={benefitsMainPicture} alt="Main" />

                    <div className="flex flex-col gap-4 max-w-2xl">
                        <MainText text="Get More About Us" />
                        <div className="flex flex-wrap items-start gap-2 text-2xl sm:text-3xl font-semibold text-[#161439]">
                            <span>Thousand Of Top</span>
                            <span className="bg-[#FFC224] text-white px-2 rounded-md">Courses</span>
                        </div>
                        <p className="text-[#6D6C80] text-[16px]">
                            Groove’s intuitive shared inbox makes it easy for team members to
                            <br className="hidden md:block" />
                            organize, prioritize and. In this episode of the Smashing Pod we’re
                            <br className="hidden md:block" />
                            talking about Web Platform Baseline.
                        </p>

                        {/* Benefits List */}
                        <div className="flex flex-col gap-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <img className="h-6 w-6" src={item.img} alt="" />
                                    <span className="text-[#161439] font-semibold text-[18px]">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <MainButton />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Benefits