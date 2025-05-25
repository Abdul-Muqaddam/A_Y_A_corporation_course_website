import React from "react";
import rightArrow from "../assets/ic_hero_section_right_arrow.svg"

function MainButton() {
    const handleEnrollNow=()=>{
        console.log("clicked enroll now")
    }
    return (
        <>
            <button onClick={handleEnrollNow} style={{boxShadow:"4px 6px #050071"}} className="w-[145px] px-[20px] py-[10px] rounded-[50px] flex text-[white] bg-[#5751E1] items-center gap-[10px]">
                <span > Enroll Now</span> <img src={rightArrow} alt="" />
            </button>
        </>
    )
}
export default MainButton