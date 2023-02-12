import React from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody,MDBInput,MDBIcon}
from 'mdb-react-ui-kit';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box'



import { useState, useContext } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../context/context';
import './admin.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";

function AdminItem() {

  let { state, dispatch } = useContext(GlobalContext);
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");  
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState(null)
  const [toggleReload, setToggleReload] = useState("");

  const addProducts = async (e) => {
    e.preventDefault();
    let fileInput = document.getElementById("picture");
    console.log("fileInput: ", fileInput.files[0]);
    let formData = new FormData();
  formData.append("myFile", fileInput.files[0])
  formData.append("item", item)
  formData.append("unit", unit)
  formData.append("price", price)
  formData.append("description", description)
  
  console.log(formData.get("text"));
  axios({
    method: 'post',
    url: `${state.baseUrl}/product`,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
})
    .then(res => {
      setToggleReload(!toggleReload);
        console.log(`upload Success` + res.data);
        toast.success('Added Sucessfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    })
    .catch(err => {
        console.log("error: ", err);
        toast.error("Can't Tweet", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    })
}


  return (
  <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              
            <p  style={{ color: '#61B846', fontSize: "25px" }}> <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" 
            alt="pic"  className='profile'/> </p>
              <p style={{ color: '#024F9D' }} className="profile-name">Mr. Admin  <hr /></p>
              
              
              <p className='hr'>_____________________________________________</p>   


           
                <h5>Add New  Items</h5>
               
            <div>
            <form onSubmit={addProducts}>
            <label htmlFor="myFile">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pl: 1,
                pr: 1,
                marginTop: 2,
                width: { lg: "190px", sm: "150px", xs: "250px" },
                backgroundColor: "gray",
                borderRadius: "15px",
              }}
            >
              <CameraAltIcon sx={{ fontSize: "4em", m: 4 }} />
              <input
                type="file"
                style={{
                  display: "none",
                }}
                id="myFile"
                onChange={(e)=>setImage(e.target.files[0])}
              />
            </Box>
            </label>
        <br /> <br />
     <input type="text" name="" id=""   className='item' placeholder='Item Name'
     onChange={(e) => { setItem(e.target.value) }}
     
     />
       <input type="text" name="" id=""   className='des' placeholder='Description'
     onChange={(e) => { setDescription(e.target.value) }}
     />
   <div>
   <p>Unit Name</p>
   <input type="text" name="" id=""   className='unit' placeholder='Unit Name Kg/Kilo'
     onChange={(e) => { setUnit(e.target.value) }} />
   <p>Unit Price</p>

   <input type="text" name="" id=""   className='price' placeholder='Price'
     onChange={(e) => { setPrice(e.target.value) }}/>


     <MDBBtn outline  color='white' className='mx-2 px-5' type='submit'
               size='lg'   style={{ color: 'white', background:'#61B846' , 
               width:'226px' ,  borderRadius:'15px', fontSize:'15px' , 
             lineHeight:'25px', fontWeight:'600'}}
               >
                Add Product
              </MDBBtn>

   </div>
              </form>

            </div>

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




export default AdminItem;









