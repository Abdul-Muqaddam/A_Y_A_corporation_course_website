import React, { useEffect, useState } from "react";
import Header from './header'

import Hero from './hero'
import Benefits from './benefits'
import Course from './course'
import CallToAction from './callToAction'
import Footer from './footer'
 
function Home(){
    const [token,setToken]=useState("")
    useEffect(()=>{

        setToken(        window.localStorage.getItem("token"))
    },[])


    return(
        <>
            <Header/>
            <Hero/>
            <Benefits/>
            <Course/>
            {
                !token?
                <CallToAction/>:<div></div>
            }
            <Footer/>
        </>
    )
}
export default Home