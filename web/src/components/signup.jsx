import React from 'react';
 import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
 from 'mdb-react-ui-kit';
import { useState, useContext } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../context/context';


import './login.css';
function Signup() {


    let { state, dispatch } = useContext(GlobalContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`${state.baseUrl}/api/v1/signup`, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })

            toast('Signup Succuesful ', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log("signup successful");
           

        } catch (e) {
            console.log("e: ", e);
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


        // e.reset();
    }




    

  return (
    //
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your details!</p>

        
        <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-white' label='First Name' onChange={(e) => { setFirstName(e.target.value) }}
         id='formControlLg'type='Text' size="lg"  style={{ color: 'greenyellow' }}/>

          <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-white' label='Last Name' onChange={(e) => { setLastName(e.target.value) }}
         id='formControlLg' type='Text' size="lg"  style={{ color: 'greenyellow' }}/>

          <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-white' label='Email address'onChange={(e) => { setEmail(e.target.value) }}
         id='formControlLg' type='email' size="lg"  style={{ color: 'greenyellow' }}/>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' 
        labelClass='text-white' label='Password'  onChange={(e) => { setPassword(e.target.value) }}
         id='formControlLg' type='password' size="lg"  style={{ color: 'greenyellow' }}/>

        <p className="small mb-3 pb-lg-2"><Link to={`/forget-password`}
        style={{ fontWeight:   'bold' }} >Forget Password?</Link></p>
        <MDBBtn outline  color='white' className='mx-2 px-5' onClick={signupHandler} 
         size='lg'   style={{ color: 'greenyellow' }}>
          Signup
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
          <p className="mb-0">Don't have an account? 
          already have an account? <Link to={`/login`} style={{ color: 'greenyellow' }} >Login here</Link>
            
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
export default Signup;