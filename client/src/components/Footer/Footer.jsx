import React, { useRef, useState } from 'react'
import './Footer.css'
import axios from 'axios';
import {toast} from 'react-toastify';

import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const [recipient_email, setEmail] = useState("");
  const formRef = useRef(null);
  // const [subject, setSubject] = useState("");
  // const [message, setMessages] = useState("");

  const sendMail = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if(recipient_email){
      axios.post('https://puzzle-africa-s-website-react-version.vercel.app/subscribe', {
        recipient_email
      }).then(() => {
        toast.success("Successfully Subscribed");
        // alert('Successfully Subscribed');
        setEmail(""); // Clear the input field
        formRef.current.reset(); // Reset the form
      }).catch((error) => {
        // alert('Ooopsy daisy...')
        toast.error("Ooopsy daisy... Guess Network Error, Please try again")
      });
      // return;
    } else {
      toast.error("Fill in subscription field to continue");
      // return toast("Fill in subscription field to continue");
    }
  }

  return (
    <div>
      {/* Footer */}
      <footer className="main-footer">
        
        <div className="container footer-container contact">
          <div className="grid_container">
            <div className="whitelogo">
              <img src="./img/White curved logo.png" alt="" width={200}/>
            </div>
            <div className="whitelogo-mobile">
              <img src="./img/White curved logo.png" alt="" width={150}/>
            </div>
            
            <div className="moblie_flex_container">
              <div className="quick_link_header">
                <ul>
                  <li className="list_header company">Company</li>
                  <ul className='inner-ul'>
                    <li className="list_children FAQ"><NavLink to="/FAQ">FAQ</NavLink></li>
                    <li className="list_children">Businesses</li>
                    <li className="list_children privacy"><NavLink to="/privacy/policy">Privacy Policy</NavLink></li>
                  </ul>
                </ul>
              </div>
  
              <div className="quick_link_header">
                <ul className='quick_link_ul'>
                  <li className="list_header quick_link">Quick Link</li>
                  <ul className='inner-ul'>
                    <li className="list_children about"><NavLink to="/about">About</NavLink></li>
                    <li className="list_children IG"><a href="https://www.instagram.com/puzzleafrica/">Instagram</a></li>
                  </ul>
                </ul>
              </div>

              <form method="post" onSubmit={sendMail} ref={formRef}>
                <div className="subscribe-input">
                  <ul>
                    <li className="list_header Sub">Subscribe</li>
                    <input 
                    name="senderEmail" 
                    type="email" 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email@email.com" 
                    id='email'/>
                    <button 
                      type="submit" 
                      className='button'
                    >&rarr;</button>
                  </ul>
                </div>
              </form>
            </div>
            
          </div> 
        </div>
        <section className='bottom-footer'>
          <div className="horizontal-line"></div>
        
          <div className=" bottom-footer-elements">
            
            <div className="Copyright">Copyright ©2022 FlowUI.co</div>

            <div className="social-media">
              <a href="https://web.facebook.com/profile.php?id=61552299771461">
                <img src="/img/articles/Icons/PuzzleFacebook.png" alt=""/>
              </a>
              <a href="#">
                <img src="./img/articles/Icons/PuzzleTwitter2.png" alt=""/>
              </a>
              <a href="https://www.instagram.com/puzzleafrica/">
                <img src="./img/articles/Icons/PuzzleIG.png" alt=""/>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
