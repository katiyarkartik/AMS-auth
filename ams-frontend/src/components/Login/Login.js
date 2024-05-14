import React, { useState } from 'react'
import authService from '../../services/auth.js';
import {useNavigate} from "react-router-dom";
import "./Login.css";

const Login = ({ toggleLoginPage }) => {
  
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({employeeEmail:'',employeePassword:''});

  const handleLogin=async(e)=>{
    e.preventDefault();
    
    authService.handleLogin(employee)
    .then((response)=>{
      console.log("Login successful", response.data);
      navigate('/work-location')
    })
    .catch((error)=>{
      console.error("Error logging in:", error);
      alert("Invalid credentials")
    })

  }


  return (
    <div className='login-form d-flex justify-content-center w-100'>
      <div className='w-100 d-flex flex-column align-items-center gap-4'>
      <form onSubmit={handleLogin} className='w-50 login-form' >
        <h3 className='text-center py-2'>LOGIN</h3>
        <label> Email</label>
        <input  className='w-100 p-1 mb-3' onChange={(e)=>{setEmployee({...employee,[employee.employeeEmail]:e.target.value})}}/>
        <label>Password</label>
        <input  className='w-100 p-1 mb-3' onChange={(e)=>{setEmployee({...employee,[employee.employeePassword]:e.target.value})}}/>
        <p className='fw-medium forgot-password'>Forgot Password ?</p>
        <input type='submit' value='Login'  className='w-100 login-btn py-1'/>
      </form>
      <button onClick={toggleLoginPage} className='border-0 register-tab '>Haven't registered yet? <span className='fw-medium'>Register Here</span></button>

      </div>
    </div>
  )
}

export default Login