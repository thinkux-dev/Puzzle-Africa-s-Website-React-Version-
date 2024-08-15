import React, { useRef, useState } from "react";
import "./Auth.css";
import Logo from "../../../src/img/LogoLogo.png";
import { useContext } from "react";
import { RecoveryContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "stream-chat-react";

import Cookies from 'universal-cookie';
import axios from 'axios';
// import { useSelector } from "react-redux";
// import {StreamChat} from 'stream-chat';

const cookies = new Cookies();

// const initialState = {
//     fullName: '',
//     username: '',
//     password: '',
//     userEmail: '',
//     confirmPassword: '',
//     phoneNumber: '',
//     avatarURL: '',
// }

const Auth = () => {
    const username = useRef();
    const userEmail = useRef();
    const password = useRef();
    const confirmpass = useRef();
    const avatarURL = useRef();
    const phoneNumber = useRef();
    const fullName = useRef();
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.authReducer.loading);
    // const user  = useSelector((state) => state.authReducer.authData);

    // const [form, setForm] = useState(initialState)
    const [isSignup, setIsSignup] = useState(true);
    // const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    // const [recipientEmail, setRecipientEmail] = useState('');

    const { setEmail } = useContext(RecoveryContext);
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value})
    // }


    const handleSubmit = (e) => {
        // setConfirmPass(true)
        e.preventDefault();

        // Save recipient email to state
        // setEmail(userEmail.current.value);
        setEmail(userEmail);

        // console.log("user.userEmail", user.userEmail)

        // const { userEmail } = form;
        
        // const {
        //     username, 
        //     password, 
        //     phoneNumber,
        //     userEmail,
        //     avatarURL, 
        //     fullName
        // } = form; 

        // console.log('userEmail value:', userEmail);
      

        // Check if passwords match
        // if (isSignup && password !== confirmpass) {
        //     setPasswordsMatch(false);
        //     return;
        // }
        // // Check if passwords match
        // if (!isSignup && !password) {
        //     setPasswordsMatch(false);
        //     return;
        // }

        
        if (isSignup) {
            if(password.current.value !== confirmpass.current.value){
                confirmpass.current.setCustomValidity("Password don't match")
            } else {
                const user = {
                    username: username.current.value,
                    userEmail: userEmail.current.value,
                    password: password.current.value,
                    phoneNumber: phoneNumber.current.value,
                    fullName: fullName.current.value,
                    avatarURL: avatarURL.current.value
                }
                dispatch(signUp(user));
            }
        } else {
            dispatch(logIn({ 
                userEmail: userEmail.current.value, 
                password: password.current.value,
                username: username.current.value,
            }));
        }
    };
    // console.log("user=>", user)


    // const resetForm = () => {
    //     setConfirmPass(true);
    //     setData({
    //         email: "",
    //         username: "",
    //         password: "",
    //         confirmpass: "",
    //     });
    // };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }


    const sendOTP = async () => {
        if (userEmail.current.value) {
            try {
                // setEmail(userEmail.current.value);
                setEmail(userEmail);
                const newOTP = Math.floor(1000 + Math.random() * 9000);
                const response = await axios.post("http://localhost:5000/send_recovery_email", {
                    // recipient_email: userEmail.current.value,
                    recipient_email: userEmail,
                    // You can generate OTP here or on the backend, depending on your preference
                    // For simplicity, I'll generate a random 4-digit OTP here
                    OTP: newOTP
                });
                // setRecipientEmail(form.userEmail); // Save recipient email to state
                console.log(response.data); // Log the response from the backend
                cookies.set('OTP', newOTP)
                console.log('OTP', newOTP)
                navigate("/forgot-password"); // Navigate to the OTP input page or any other page as needed
            } catch (error) {
                console.error('Error sending recovery email:', error);
            }
        } else {
            alert("Please enter your email");
        }
    };
    
    // Call the sendOTP function when the user clicks on the "Forgot Password?" link
    const navigateToOtp = () => {
        sendOTP();
    };

    return (
      <>
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        
        <div className='Auth'>
            {/* Left side */}
            <div className='a-left'>
                <img src={Logo} alt='' />
                <div className='Webname'>
                    <h1>Puzzle Africa</h1>
                    <h6>Login to give a live chat feedback</h6>
                </div>
            </div>

            {/* Right side */}
            <div className='a-right loginRight'>
                <form className='infoForm authForm' onSubmit={handleSubmit}>
                    <h3>{isSignup ? "Sign Up" : "Log In"}</h3>

                    <div>
                        {isSignup && (
                            <input 
                                type="text" 
                                name='fullName'
                                minLength='3'
                                placeholder='Full Name'
                                className='infoInput loginInput'
                                // onChange={handleChange}
                                ref={fullName}
                                required
                            />
                        )}
                        <input
                            type='text'
                            required
                            className='infoInput loginInput'
                            name='username'
                            placeholder='Username'
                            // onChange={handleChange}
                            // value={data.username}
                            ref={username}
                        />
                        
                    </div>

                    {/* {!isSignup && (
                        <input
                            type='password'
                            required
                            minLength='6'
                            placeholder='Password'
                            className='infoInput loginInput'
                            name='password'
                            onChange={handleChange}
                            // value={data.password}
                            // ref={password}
                        />
                    )} */}

                    <div>
                        <input
                            type='email'
                            onChange={(e) => {
                                setEmail(e.target.value);
                                // handleChange(e);
                            }}
                            required
                            className='infoInput loginInput'
                            placeholder='Email address'
                            name='userEmail'
                            // onChange={handleChange}
                            // value={form.userEmail}
                            ref={userEmail}
                        />
                        {emailExists && (
                            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                                Email already exists. Please use a different email.
                            </div>
                        )}
                    </div>

                    <div>
                        {isSignup && (
                            <input 
                                type="text" 
                                name='phoneNumber'
                                placeholder='Phone Number'
                                className='infoInput loginInput'
                                // onChange={handleChange}
                                ref={phoneNumber}
                                required
                            
                            />
                        )}
                        {isSignup && (
                            <input 
                                type="text" 
                                name='avatarURL'
                                placeholder='Avatar URL'
                                className='infoInput loginInput'
                                // onChange={handleChange}
                                ref={avatarURL}
                                required
                                
                            />
                        )}
                    </div>

                    <div>
                        <input
                            type='password'
                            required
                            minLength='6'
                            placeholder='Password'
                            className='infoInput loginInput'
                            name='password'
                            // onChange={handleChange}
                            // value={data.password}
                            ref={password}
                        />
                        {/* {!isSignup && !passwordsMatch && (
                            <div style={{ color: 'red' }}>Wrong Password</div>
                        )} */}
                        {isSignup && (
                            <input
                                type='password'
                                required
                                placeholder='Confirm Password'
                                className='infoInput loginInput'
                                name='confirmPassword'
                                // onChange={handleChange}
                                // value={data.confirmpass}
                                ref={confirmpass}
                            />
                        )}

                        {/* {isSignup && !passwordsMatch && (
                            <div style={{ color: 'red' }}>Password don't match</div>
                        )} */}
                    </div>

                    <div >
                        <p style={{ fontSize: "14px", textDecoration: "none",  marginLeft: '-0.5rem'}}>
                            {isSignup
                                ? "Already have an account? "
                                : "Don't have an account? "
                            }
                            <span
                                style={{ cursor: "pointer", textDecoration: "none"}}
                                onClick={switchMode}
                                className='SignupLoginHere'
                            >
                                {isSignup ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                    
                    <span 
                        className="loginForgot SignupLoginHere"
                        style={{ fontSize: "12px", cursor: "pointer", textDecoration: "none", marginTop: '-2.5rem'}}
                        onClick={() => navigateToOtp()}
                    >
                        {!isSignup
                            ? 'Forgot Password?' : ''
                        }
                    </span>
                    
                    <button 
                    className='Authbutton infoButton' 
                    type='submit' 
                    disabled={loading}
                    >
                        {loading ? "Loading..." : isSignup ? "Signup" : "Login"}
                    </button>
                    
                </form>
            </div>
        </div>
      </>
    );
};

export default Auth;