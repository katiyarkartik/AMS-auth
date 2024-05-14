import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Work from './Work/Work';
import LoginPage from '../pages/Auth/loginPage';
import RegisterPage from '../pages/Auth/registerPage';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/work-location' element={<Work />} />
      </Routes>
  

  )
}

export default AppRoutes