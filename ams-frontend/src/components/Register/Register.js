import React from 'react'

const Register = ({ toggleLoginPage }) => {
  return (
    <div className='login-form d-flex justify-content-center w-100'>
      <div className='w-100 d-flex flex-column align-items-center gap-4'>
      <form className='w-50 login-form' >
        <h3 className='text-center py-2'>SIGN UP</h3>
      
        <label>Enter Full Name</label>
        <input  className='w-100 p-1 mb-3'/>
        <label>EmployeeID</label>
        <input  className='w-100 p-1 mb-3'/>
        <label>Password</label>
        <input  className='w-100 p-1 mb-3'/>
        <label>Confirm Password</label>
        <input  className='w-100 p-1 mb-3'/>
       
        <input type='submit' value='SignUp'  className='w-100 login-btn py-1'/>
      </form>
      <button onClick={toggleLoginPage} className='border-0 register-tab '>Already Registered? <span className='fw-medium'>Login</span></button>

      </div>
    </div>
  )
}

export default Register