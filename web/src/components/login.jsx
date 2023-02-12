import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../context/context';
import './login.css';
function Login() {

  let { state, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler =async (e) =>{
      
    e.preventDefault();

    try {
        let response = await axios.post(`${state.baseUrl}/api/v1/login`, {
            email: email,
            password: password
        }, {
            withCredentials: true
        })
        toast('Login Succuesful ', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        dispatch({
            type: 'USER_LOGIN',
            payload: response.data.profile,
        })
       
        console.log("Login  successful");
       

    }
    catch (err) {
        console.log("err: ", err);
        toast.error('Error', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }



 }


  return (
  <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <p  style={{ color: '#61B846', fontSize: "25px" }}>SAYLANI WELFARE</p>
              <p style={{ color: '#024F9D' }}>ONLINE DISCOUNT STORE</p>
              
              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
              labelClass='text-black' label='Email address'onChange={(e) => { setEmail(e.target.value) }}
               id='formControlLg' type='email' size="lg"  style={{ color: 'black' }}/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
              labelClass='text-black' label='Password'  onChange={(e) => { setPassword(e.target.value) }}
               id='formControlLg' type='password' size="lg"  style={{ color: 'black' }}/>

              <p className="small mb-3 pb-lg-2"><Link to={`/forget-password`}style={{ fontWeight: 
                'bold' }}  >Forget Password?</Link></p>

              <MDBBtn outline  color='white' className='mx-2 px-5' onClick={loginHandler} 
               size='lg'   style={{ color: 'white', background:'#61B846' , 
               width:'226px' , boxShadow:'0px 4px 4px 5px #D4D3D3;', borderRadius:'15px', fontSize:'15px' , 
             lineHeight:'25px', fontWeight:'600'}}
               >
                Login
              </MDBBtn>
             


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
  );
}




export default Login;




