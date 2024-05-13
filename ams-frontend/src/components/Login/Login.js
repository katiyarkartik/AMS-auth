import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "./Login.css";

const Login = ({ toggleLoginPage }) => {

  const [employeeEmail,setEmployeeEmail]=useState("");
  const [employeePassword,setEmployeePassword]=useState("");
  const navigate = useNavigate();

  const handleLogin=async(e)=>{
   
    
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/employee/login', {
        employeeEmail,
        employeePassword
      });
      console.log("Login successful", response.data);
      navigate('/work-location')
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid credentials")

    }
    



  }


  return (
    <div className='login-form d-flex justify-content-center w-100'>
      <div className='w-100 d-flex flex-column align-items-center gap-4'>
      <form onSubmit={handleLogin} className='w-50 login-form' >
        <h3 className='text-center py-2'>LOGIN</h3>
        <label> Email</label>
        <input  className='w-100 p-1 mb-3' onChange={(e)=>{setEmployeeEmail(e.target.value)}}/>
        <label>Password</label>
        <input  className='w-100 p-1 mb-3' onChange={(e)=>{setEmployeePassword(e.target.value)}}/>
        <p className='fw-medium forgot-password'>Forgot Password ?</p>
        <input type='submit' value='Login'  className='w-100 login-btn py-1'/>
      </form>
      <button onClick={toggleLoginPage} className='border-0 register-tab '>Haven't registered yet? <span className='fw-medium'>Register Here</span></button>

      </div>
    </div>
  )
}

export default Login