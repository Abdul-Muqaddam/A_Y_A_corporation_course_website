import React from "react";
import tutorPic from "../assets/pic_pricing.png"
function Pricing() {
    return (
        <>
            <div class="min-h-screen bg-[#4906BF] flex flex-col items-center justify-center px-4 py-10">
                {/* <!-- Title --> */}
                <h1 class="text-white text-4xl font-bold mb-2">PRICING</h1>
                <p class="text-white text-lg mb-10">Choose the plan that’s right for you</p>

                {/* <!-- Pricing Card --> */}
                <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 text-center">
                    {/* <!-- Header and Image --> */}
                    <div class="flex items-center justify-between mb-6">
                        <div class="text-left">
                            <h2 class="text-2xl font-bold text-[#4906BF]">Front-End Development</h2>
                            <p class="text-4xl font-extrabold text-[#4906BF] mt-2">$9</p>
                            <p class="text-gray-600">one-time payment</p>
                        </div>
                        <img src={tutorPic} alt="Instructor" class="w-24 h-24 object-cover rounded-full bg-yellow-400 p-1"/>
                    </div>

                    {/* <!-- Features --> */}
                    <ul class="text-left space-y-3 mb-6">
                        <li class="flex items-center text-gray-700"><span class="text-[#4906BF] mr-2">✔️</span> HTML, CSS, JavaScript + more</li>
                        <li class="flex items-center text-gray-700"><span class="text-[#4906BF] mr-2">✔️</span> 12-week course</li>
                        <li class="flex items-center text-gray-700"><span class="text-[#4906BF] mr-2">✔️</span> Full access to materials</li>
                        <li class="flex items-center text-gray-700"><span class="text-[#4906BF] mr-2">✔️</span> Completion certificate</li>
                    </ul>

                    {/* <!-- Button --> */}
                    <Link to="#" class="block w-full bg-[#4906BF] hover:bg-[#4906BF] text-white font-semibold py-3 rounded-full transition duration-300">
                        Get Started
                    </Link>

                    {/* <!-- Guarantee --> */}
                    <p class="text-sm text-gray-500 mt-4">7-day money-back guarantee</p>
                </div>
            </div> 

        </>
    )
}
export default Pricing