import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Logo from "../assets/Logo.png"

import { GlobalContext } from '../context/context';
import './login.css';
function GetStarted() {


  

 

  return (
  <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase"> <img width={200} src={Logo} alt=""  /></h2>
              <p  style={{ color: '#61B846', fontSize: "25px" }}>SAYLANI WELFARE</p>
              <p style={{ color: '#024F9D' }}>ONLINE DISCOUNT STORE</p>

              
            

              
              <MDBBtn outline  color='white' className='mx-2 px-5' 
               size='lg'  style={{ color: '#61B846' , background:'#61B846'}}  >
                  <Link to={`/login`} style={{ color: 'white', background:'#61B846' , 
                  width:'226px' , borderRadius:'15px', fontSize:'15px' , 
                lineHeight:'25px', fontWeight:'600'
                }}> Get Started</Link>
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

      
    </MDBContainer>
  );
}




export default GetStarted;




