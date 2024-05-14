import React from 'react'
import { Route, Routes } from "react-router-dom";
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home';
import Work from './Work/Work';

const AppRoutes = () => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/work-location' element={<Work />} />
    </Routes>

  )
}

export default AppRoutes