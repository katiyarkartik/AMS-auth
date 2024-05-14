import React, { useState } from 'react'
import authService from '../../services/auth';


const Register = ({ toggleLoginPage }) => {
  const [employee, setEmployee] = useState({
    employeeFullName: '',
    employeeEmail: '',
    employeePhoneNo: '',
    employeeAadhar: '',
    employeePassword: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const validation = () => {

    if (!employee || !employee.employeeFullName || !employee.employeeEmail || !employee.employeePhoneNo || !employee.employeeAadhar || !employee.employeePassword || !confirmPassword) {
      return false;
    }

    if (employee.employeePassword !== confirmPassword) {
      return false;
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (!validateEmail(employee.employeeEmail)) {
      return false;
    }

    if (employee.employeePhoneNo.length !== 10) {
      return false;
    }
    if (employee.employeeAadhar.length !== 12) {
      return false;
    }
    return true;
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(employee);
    if (validation()) {
      await authService.handleRegister(employee)
        .then((response) => {
          console.log("Register successful", response);
          alert("successfully registered");
          
        })
        .catch((error) => {
          console.error("Error logging in:", error);
          alert("Invalid credentials")
        })
    }
    else {
      console.log("error register");
      alert("some error")
    }

  }


  return (
    <div className='login-form d-flex justify-content-center w-100'>
      <div className='w-100 d-flex flex-column align-items-center gap-4'>
        <form onSubmit={handleRegister} className='w-50 login-form' >
          <h3 className='text-center py-2'>SIGN UP</h3>

          <label>Enter Full Name</label>
          <input type='text' className='w-100 p-1 mb-3' onChange={(e) => { setEmployee({ ...employee, employeeFullName: e.target.value })}} />

          <label>Enter Email</label>
          <input type='email' className='w-100 p-1 mb-3' onChange={(e) => { setEmployee({ ...employee, employeeEmail: e.target.value }) }} />

          <label>Enter Phone Number</label>
          <input type='number' className='w-100 p-1 mb-3' onChange={(e) => { setEmployee({ ...employee, employeePhoneNo: e.target.value }) }} />

          <label>Enter Aadhar</label>
          <input type='number' className='w-100 p-1 mb-3' onChange={(e) => { setEmployee({ ...employee,employeeAadhar: e.target.value }) }} />

          <label>Password</label>
          <input type='password' className='w-100 p-1 mb-3' onChange={(e) => { setEmployee({ ...employee, employeePassword: e.target.value }) }} />

          <label>Confirm Password</label>
          <input type='password' className='w-100 p-1 mb-3' onChange={(e) => setConfirmPassword(e.target.value)} />

          <input type='submit' value='SignUp' className='w-100 login-btn py-1' />
        </form>
        <button onClick={toggleLoginPage} className='border-0 register-tab '>Already Registered? <span className='fw-medium'>Login</span></button>

      </div>
    </div>
  )
}

export default Register