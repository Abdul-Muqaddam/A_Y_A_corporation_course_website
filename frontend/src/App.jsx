import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/login'
import ForgetPassword from './components/forgetPassword'
import AllCourses from './components/allCourses'
import Pricing from './components/pricing'
import TermsAndCondition from './components/termsandcondition'
import PrivacyPolicy from './components/privacypolicy'
import RefundPolicy from './components/refundpolicy'
import ContactUs from './components/contactUs'
import AboutUs from './components/AboutUs'
import CourseDetails from './components/courseDetails'
import {ToCloseProvider} from "../src/context/toClosecontext"

function App() {
  return (
    <>
      <ToCloseProvider>
    <Routes>

      <Route path='/' element={<Home/>}/>   
      <Route path='/Register' element={<Register/>}/>   
      <Route path='/Login' element={<Login/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='/allCourses' element={<AllCourses/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/TermsAndCondition' element={<TermsAndCondition/>}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/CourseDetails' element={<CourseDetails/>}/>
    </Routes>
      </ToCloseProvider>
    </>
  )
}

export default App
