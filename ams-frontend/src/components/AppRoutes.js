import React from 'react'
import {Route, Routes} from "react-router-dom";
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home';
import Work from './Work/Work';

const AppRoutes = () => {

  return (
    <Routes>
   
        <Route path='/' element={<Auth/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/work-location' element={<Work/>} />
    
    </Routes>
  
  )
}

export default AppRoutes