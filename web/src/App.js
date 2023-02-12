import './App.css';
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from './context/context';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./components/signup"
import Login from './components/login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Loader from "./assets/loader.gif"
import axios from 'axios'
// import Home from './components/home';
import AdminHome from './components/admin-home';
import AddItem from './components/addItems';
import AdminAccount from './components/admin-account';
import UserHome from './components/user-home';

import GetStarted from './components/getStarted';

import ChangePassword from './components/changePassword'
import ForgetPassword from './components/forgetPassword'








function App() {




  let { state, dispatch } = useContext(GlobalContext);
  
 
  

  useEffect(() => {

    const getProfile = async () => {
      try {
        let response = await axios.get(
          `${state.baseUrl}/profile`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });

        console.log("response: ", response);

        dispatch({
         type: 'USER_LOGIN',
          payload: response.data
        })
      } catch (error) {

        console.log("axios error: ", error);

        dispatch({
         
          type: 'USER_LOGOUT'
        })
      }
    }
    getProfile();

  }, [])

  useEffect(() => {

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      console.log("interceptor");
      config.withCredentials = true;
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.status === 401) {
        dispatch({
          type: 'USER_LOGOUT'
        })
      }
      return Promise.reject(error);
    });
  }, [])


  return (
    <>
     
     {(state.isLogin === true && state.user.isAdmin === false) ?
         
         <Routes>
         <Route path="/" element={<UserHome />} />
      
        <Route path="*" element={<Navigate to="/" replace={true} />} />
       </Routes>
            : null
          }

      {(state.isLogin === false) ?
        <Routes>
          
          <Route path="/" element={<GetStarted />} />
          <Route path="login" element={< Login/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes> : null
      }
          
            {(state.isLogin === true) ?
         
         <Routes>
         <Route path="/" element={<AdminHome />} />
         <Route path='add-item' element={<AddItem />} />
         <Route path='admin-account' element={<AdminAccount />} />
       
        <Route path="*" element={<Navigate to="/" replace={true} />} />
       </Routes>
         : null
       }
        
  

      {/* {(state.isLogin === true) ?

        <Routes>
          <Route path="/" element={<Home />} />
          
        <Route path='change-password' element={<ChangePassword />} />
         <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        : null}

      {(state.isLogin === false) ?
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes> : null
      } */}

      {(state.isLogin === null) ?

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: '100vh' }}>
          <img width={300} src={Loader} alt="loading" />
        </div>

        : null}


<ToastContainer />

    </>
  );
}

export default App;