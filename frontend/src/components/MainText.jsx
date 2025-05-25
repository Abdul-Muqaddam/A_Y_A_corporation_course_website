import React from "react";

function MainText(props) {
    return (
        <>
            <h6 className="w-fit text-[#5751E1] px-[15px] bg-[#EFEEFE] rounded-[30px]">
                {props.text}
            </h6>
        </>
    )
}
export default MainText