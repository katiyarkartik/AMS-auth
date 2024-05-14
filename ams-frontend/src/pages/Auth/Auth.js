import React from 'react'
import { useState } from 'react'
import "./Auth.css"
import addAttendance from "../../assets/images/add-attendance.png";
import workingRemotely from "../../assets/images/working-remotely.png";
import confirmAttendance from "../../assets/images/confirm-attendance.png"
import late from "../../assets/images/late.png";
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import ibmLogo from "../../assets/images/IBM_LOGO.png";
const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);
  const toggleLoginPage=()=>{
    setLoginPage(prevState=>!prevState)
  }
  
  return (
    <div className='auth-page w-100 d-flex position-relative '>
      <div className='ibm-logo-nav position-absolute'>
          <img src={ibmLogo}  alt='Ibm logo'/>
        </div>
      <div className='auth-page-banner-section col-7   '>
        
       
        <div className='auth-banner-top-section text-dark'></div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className='carousel-item-container'>
                <div className='auth-banner-img'>
                  <img src={workingRemotely} className="d-block w-100" alt="..." />
                </div>
                <h4 className='fw-bold'>Lorem Ipsum</h4>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
              </div>
            </div>

            <div className="carousel-item ">
              <div className='carousel-item-container'>
                <div className='auth-banner-img'>
                  <img src={addAttendance} className="d-block w-100" alt="..." />

                </div>
                <h4 className='fw-bold'>Lorem Ipsum</h4>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
              </div>
            </div>

            <div className="carousel-item ">
              <div className='carousel-item-container'>
                <div className='auth-banner-img'>
                  <img src={confirmAttendance} className="d-block w-100" alt="..." />
                </div>
                <h4 className='fw-bold'>lorem</h4>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
              </div>
            </div>
            <div className="carousel-item ">
              <div className='carousel-item-container'>
                <div className='auth-banner-img'>
                  <img src={late} className="d-block w-100" alt="..." />
                </div>
                <h4 className='fw-bold'>lorem</h4>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='auth-banner-bottom-section '></div>
      </div>
      <div className='auth-form-section col-5 d-flex justify-content-center align-items-center'>
        <div>
        {loginPage &&
          <Login toggleLoginPage={toggleLoginPage} />
        }
        {!loginPage && <Register toggleLoginPage={toggleLoginPage} />}
        </div>
      </div>
    </div>
  )
}

export default Auth;