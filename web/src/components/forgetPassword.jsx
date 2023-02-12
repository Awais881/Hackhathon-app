
import { useState, useContext } from "react";
import { GlobalContext } from '../context/context';
import {
    MDBBtn, MDBContainer,MDBRow,MDBCol, MDBIcon,MDBInput,MDBCard,MDBCardBody
  }
  from 'mdb-react-ui-kit';

import { Routes, Route, Link, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './changePassword.css'
import axios from "axios";


function ForgetPassword() {
    let { state, dispatch } = useContext(GlobalContext);



    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [isOtpSent, setIsOtpSent] = useState(false);


    const sendOtp = async (e) => {
      e.preventDefault();

      try {
          let response = await axios.post(`${state.baseUrl}/api/v1/forget-password`, {
              email: email,
          }, {
              withCredentials: true
          })
          toast.success('sent otp Sucessfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          console.log(response.data.message);
         setIsOtpSent(true)

      } catch (e) {
          console.log("e: ", e); 
          toast.error('Send Otp  error', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }


      // e.reset();
  }
    const ForgetPass = async (e) => {
      e.preventDefault();

      try {
          let response = await axios.post(`${state.baseUrl}/api/v1/check-otp`, {
              email: email,
              otp: otp,
              newPassword: newPassword

          }, {
              withCredentials: true
          })
          toast.success('Changed Sucessfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          console.log(response.data.message);
         setIsOtpSent(true)

      } catch (e) {
          console.log("e: ", e); 
          toast.error('Changed error', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }


      // e.reset();
  }


    return (
        <>
     
{/*       
     <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Tweets</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Forget Password</h3>
            <form onSubmit={sendOtp} >
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' 
            id='formControlLg' type='email' size="lg"
            onChange={(e) => { setEmail(e.target.value) }}
            />
          

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'  type="submit">Send Otp</MDBBtn>
            </form>
            {(isOtpSent) ? <>
          
        <form onSubmit={ForgetPass}>
          < br />
        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='enter otp'
     id='formControlLg' type='text' size="lg"
            onChange={(e) => { setOtp(e.target.value) }}
        /> 

            <br />
        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password'
        id='formControlLg' type='password' size="lg"
    onChange={(e) => { setNewPassword(e.target.value) }}
    /> 
        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'  type="submit">Submit</MDBBtn>
       </form> 
    </>
    : null}
            <p className='ms-5'>Don't have an account? <Link to={`/signup`}>Register here</Link></p>

          </div>
        
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

      <ToastContainer />
    </MDBContainer> */}
     <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

      <p  style={{ color: '#61B846', fontSize: "25px" }}>SAYLANI WELFARE</p>
        <p style={{ color: '#024F9D' }}>ONLINE DISCOUNT STORE</p>
       <form onSubmit={sendOtp} >
        <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-black' label='Email address'onChange={(e) => { setEmail(e.target.value) }}
         id='formControlLg' type='email' size="lg"  style={{ color: 'black' }}/>
<MDBBtn outline  color='white' className='mx-2 px-5' type='submit'
         size='lg'   style={{ color: 'white', background:'#61B846' , 
         width:'226px' ,  borderRadius:'15px', fontSize:'15px' , 
       lineHeight:'25px', fontWeight:'600'}}
         >
          Send otp
        </MDBBtn>
        </form>


 
            {(isOtpSent) ? <>
          
        <form onSubmit={ForgetPass}>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-black' label='Password'  onChange={(e) => { setOtp(e.target.value) }}
         id='formControlLg' type='password' size="lg"  style={{ color: 'black' }}/>

          <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-black' label='Password'    onChange={(e) => { setNewPassword(e.target.value) }}
         id='formControlLg' type='password' size="lg"  style={{ color: 'black' }}/>
<MDBBtn outline  color='white' className='mx-2 px-5' type='submit'
         size='lg'   style={{ color: 'white', background:'#61B846' , 
         width:'226px' ,  borderRadius:'15px', fontSize:'15px' , 
       lineHeight:'25px', fontWeight:'600'}}
         >
          Send otp
        </MDBBtn>
        </form>
</>
: null }

        <p className="small mb-3 pb-lg-2"><Link to={`/forget-password`}style={{ fontWeight: 
          'bold' }}  >Forget Password?</Link></p>

        {/* <MDBBtn outline  color='white' className='mx-2 px-5' 
         size='lg'   style={{ color: 'white', background:'#61B846' , 
         width:'226px' ,  borderRadius:'15px', fontSize:'15px' , 
       lineHeight:'25px', fontWeight:'600'}}
         >
          Login
        </MDBBtn> */}
       


        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

        <div>
        <p className="mb-0"   style={{ color: 'black' }}>Don't have an account? 
          <Link to={`/signup`} style={{ color: '#61B846' }}> Register here</Link>
            
            </p>

        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

<ToastContainer />
</MDBContainer> 
    </>
    )
}

export default ForgetPassword;
