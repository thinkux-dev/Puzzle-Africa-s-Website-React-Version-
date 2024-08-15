import { Route, Routes, Navigate } from 'react-router-dom';

// import 'stream-chat-react/dist/css/index.css'
// import './App.css'
import FAQ from './pages/FAQ/FAQ';
import Website from './pages/Website';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import About from './pages/About/About';
import { Suspense, useState } from 'react';
import Layout from './components/Layout/Layout';
import { createContext } from "react";
import Auth from './pages/Auth/Auth';
import OTPInput from "./components/OTPInput";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Feedback from './pages/Feedback/Feedback';
// import Cookies from 'universal-cookie';
// import {StreamChat} from 'stream-chat';
import { useSelector } from 'react-redux';


// const cookies = new Cookies();
// const authToken = cookies.get("token");

// if(authToken){
//   client.connectUser({
//     id: cookies.get('userId'),
//     name: cookies.get('username'),
//     fullName: cookies.get('fullName'),
//     image: cookies.get('avatarURL'),
//     userEmail: cookies.get('userEmail'),
//     hashedPassword: cookies.get('hashedPassword'),
//     phoneNumber: cookies.get('phoneNumber'),
//   }, authToken)
// }


// import Recovered from "./components/Recovered";
import {Reset} from "./components/Reset";
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';

export const RecoveryContext = createContext();

function App() {
  const user = useSelector((state) => state.authReducer.authData)
  console.log("user From App.jsx", user)

  // const [page, setPage] = useState("login");
  const [userEmail, setEmail] = useState('');
  const [otp, setOTP] = useState('');

  
  // Set recipientEmail when sending OTP
  const sendOTP = async () => {
    if (userEmail) {
      try {
        // Your existing code to send OTP
        setEmail(userEmail); // Set recipientEmail
      } catch (error) {
        console.error('Error sending recovery email:', error);
      }
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <RecoveryContext.Provider value={{ otp, setOTP, setEmail, userEmail }}>
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout/>}>

              <Route path='/' element={<Website/>}/>

              <Route path='/FAQ' element={<FAQ/>}/>

              <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>

              <Route path='/refund/policy' element={<RefundPolicy/>}/>

              <Route path='/about' element={<About/>}/>

              <Route path="/auth" element={user ? <Navigate to='../feedback'/>  
              :  <Auth />}/>

              <Route path="/feedback" element={user ? <Feedback/>
              : <Navigate to='../auth'/>} />

              <Route path="/forgot-password" element={<OTPInput />} />

              <Route path="/reset-password" element={<Reset />} />
              
            </Route>
          </Routes>
        </Suspense>
        <ToastContainer/>
      </>
    </RecoveryContext.Provider>
  );
}

export default App;