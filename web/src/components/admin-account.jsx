import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
from 'mdb-react-ui-kit';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useContext } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../context/context';
import './admin.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";

function AdminAcccount() {

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
              
            <p  style={{ color: '#61B846', fontSize: "25px" }}> <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" 
            alt="pic"  className='profile'/> </p>
              <p style={{ color: '#024F9D' }} className="profile-name">Mr. Admin</p>
              
              
             


              <div className='admin-icons'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                <Link to={`/`}><HomeIcon/> </Link> 
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                <Link to={`/add-item`}><AddIcon/> </Link> 
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'black' }}>
                <Link to={`/admin-account`}><PersonIcon/> </Link> 
                 </MDBBtn>
              </div>
             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

      <ToastContainer />
    </MDBContainer>
  );
}




export default AdminAcccount;









