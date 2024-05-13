import React from 'react'
import "./Work.css";
import workingRemotely from "../../assets/images/workingRemote.png";
import workOffice from "../../assets/images/workOffice.png";
import ibmLogo from "../../assets/images/IBM_LOGO.png";
const Work = () => {
  return (
    <div className='vh-100 w-100 d-flex position relative'>
        <img src={ibmLogo} alt='Ibm logo' className='position-absolute top-0 start-0 px-4 mx-3 col-2'/>
        <div className='work-from-home  w-50  d-flex flex-column align-items-center justify-content-center' >
            <div className=' w-auto d-flex flex-column align-items-center rounded p-3 m-5 shadow'>
            <div className=' p-auto  d-flex align-items-center justify-content-center'>
                <img className='w-75 work-img' src={workingRemotely}/>
            </div>
            <button className='bg-primary border-0 px-4 py-3 rounded-2 text-light fw-medium shadow hover '>Working Remotely</button>
            </div>
        </div> 
        <div className='work-from-office w-50  d-flex flex-column align-items-center justify-content-center' >
            <div className='w-auto d-flex flex-column align-items-center rounded p-3 m-5 shadow'>
            <div className=' p-auto  d-flex align-items-center justify-content-center'>
                <img className='w-75 work-img' src={workOffice}/>
            </div>
            <button className='bg-success border-0 px-4 py-3 rounded-2 text-light fw-medium shadow hover '>Work From Office</button>
            </div>
        </div> 
    </div>
  )
}

export default Work