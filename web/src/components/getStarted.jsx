import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import { useState, useContext } from "react";


import { GlobalContext } from '../context/context';
import './login.css';
function GetStarted() {


  

 

  return (
  <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase"><img src="../components/assets/logo.png" alt="logo" /></h2>
              <p className="text-white-50 mb-5">Imtiaz Super Market</p>

              
            

              
              <MDBBtn outline  color='white' className='mx-2 px-5' 
               size='lg'  style={{ color: 'greenyellow' }} >
                  <Link to={`/login`} style={{ color: 'greenyellow' }}> Get Started</Link>
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
                <Link to={`/signup`} style={{ color: 'greenyellow' }}> Register here</Link>
                  
                  </p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

      
    </MDBContainer>
  );
}




export default GetStarted;




