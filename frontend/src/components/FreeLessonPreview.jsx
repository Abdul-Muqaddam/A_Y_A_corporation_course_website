import React, { useContext } from "react";
import icCross from "../assets/ic_cross.svg"
import {ToCloseContext} from  "../context/toClosecontext" 
const FreeLessonPreview = (props) => {
    const {isfreelessonPreview, setIsfreelessonPreview}=useContext(ToCloseContext)

    const handleCross=()=>{
        setIsfreelessonPreview(false)
    }
    return (
        <>
            {
                <div className="h-[100vh] w-[100%] bg-[#000000a1] fixed top-0 z-10 flex items-center justify-center">
                    <div className="p-[30px] bg-gradient-to-r from-[#220359] to-[#4906BF] w-[45vw] h-[70vh] rounded-3xl flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <p className="text-white text-2xl font-semibold">Course Preview</p>
                            <img src={icCross} alt="" className="h-[20px] mt-2" onClick={handleCross} />
                        </div>
                        <div className="text-white text-xl ">
                            {props.title}
                        </div>
                        <iframe
                            width="100%"
                            height="252"
                            src={props.videoLink}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            }
        </>
    )
}
export default FreeLessonPreview