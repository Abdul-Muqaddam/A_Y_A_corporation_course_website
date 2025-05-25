import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/login'
import ForgetPassword from './components/forgetPassword'
import AllCourses from './components/allCourses'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/Register' element={<Register/>}/>   
      <Route path='/Login' element={<Login/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='/allCourses' element={<AllCourses/>}/>
    </Routes>
    </>
  )
}

export default App
