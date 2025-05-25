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
            <div >
                <div className="flex flex-col w-[100%] pt-[100px] gap-[20px] pb-[15px] items-center overflow-x-hidden">


                    <MainText text={"Our Top Features"} />

                    <h1 className="font-semibold text-[36px]">
                        Achieve Your Goal With SkillGrow
                    </h1>
                    <p className="text-[#6D6C80] text-center">
                        when an unknown printer took a galley of type and scrambled make <br />
                        specimen book has survived not only five centuries
                    </p>
                    <div className=" flex w-[100vw] justify-evenly">
                        {
                            benefitsCards.map((item) => (
                                <div style={{ boxShadow: `8px 8px ${item.shadowColor}` }} className={`${item.bgColor} rounded-[20px] w-[35vw] h-[200px] flex flex-col gap-[15px] px-[50px] py-[40px] justify-center`}>
                                    <div className="flex items-center justify-between gap-[10px]">
                                        <div>
                                            <img src={item.icon} alt="" />
                                            <div className="font-semibold text-[22px]">{item.label}</div>
                                        </div>
                                        <div>
                                            <img src={sparkleImg} alt="" />
                                        </div>
                                    </div>
                                    <div className="max-w-[25vw]">
                                        {item.description}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-between w-[100%] py-[100px] px-[100px] items-center">
                    <img className="h-[550px] " src={benefitsMainPicture} alt="" />
                    <div className="flex flex-col gap-[10px]">
                        <MainText text={"Get More About Us"} />
                        <div className="flex items-start">
                            <span className="font-semibold text-[36px] text-[#161439]">
                                Thousand Of Top <br /> Now in One Place
                            </span>
                            <span className="bg-[#FFC224] text-[#ffffff] text-[36px] font-semibold px-[5px] rounded-[5px]">
                                Courses
                            </span>
                        </div>
                        <div className="text-[#6D6C80] text-[16px]">
                            Groove’s intuitive shared inbox makes it easy for team members to
                            <br />
                            organize, prioritize and.In this episode of the Smashing Pod we’re
                            <br />
                            talking about Web Platform Baseline.
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            {benefits.map((item) => (
                                <div className="flex gap-[15px]">
                                    <img className="h-[30px] w-[30px] " src={item.img} alt="" />
                                    <span className="text-[#161439] font-semibold text-[18px]">
                                        {item.label}
                                    </span>
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