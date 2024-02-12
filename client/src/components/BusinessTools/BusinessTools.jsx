import React from 'react'
import './BusinessTools.css'

const BusinessTools = () => {
  return (
    <div className='businesstool-margin'>
      <div className="business_tools flexCenter flex-container">
        <div className="business_puzzle">
          {/* left Side */}
          <h2>
              Join Other <span className="business">Businesses</span><br />
              Using <span className="puzzle">Puzzle</span> Tools
          </h2>

          {/* right side */}
          <img
              src='./img/articles/Group Features.png'
              alt='features'
              width={100}
          />
        </div>
      </div>

      {/* Other section */}
      <section className="container">
          <div className="section_container">
            <h1 className="puzzle-tools"><span>Puzzle </span> Helps You</h1>
            <div className="launch_grow_manage">
                <h2 className="launch">Launch</h2>
                <h2 className="grow">Grow</h2>
                <h2 className="manage">Manage</h2>
            </div>

            <h1 className="business">
                Your <span className="span_business">Business</span>
            </h1>

            {/* Desktop View */}
            <div className='desktop_img'>
              <img
                  src="./img/articles/Your business(Web view).png"
                  alt="Your Business"
                  className="your_business"
                  width={1000}
              />
            </div>
            {/* Mobile Image (hidden by default, shown only in mobile view) */}
            <div className="your_business_mobile" id="youtubeContainer">
              <img src="./img/articles/Your business(Mobile view).png" alt="Mobile Business Image"/>
            </div>

            {/* Track Sales */}
            <div className="track_sales">
              {/* Left side  */}
              <div className="leftside">
                  <h1>
                      Track Sales And <span>Manage </span>Your <br />
                      Business Professionally From <br />
                      Mobile Phone
                  </h1>
                  <ul className="puzzle_values">
                      <li className="values">
                        <i className="material-icons checkIcon">check_circle</i>
                        Create Invoices And Receipts
                      </li>
                      <li className="values">
                          <i className="material-icons checkIcon">check_circle</i>
                          Manage And Follow Up Customers
                      </li>
                      <li className="values">
                          <i className="material-icons checkIcon">check_circle</i>
                          Professional And Customized Business Management
                      </li>
                  </ul>
                  <div className="waitlist">
                      <li className="join_now"><a href="#">Join Waitlist Now</a></li>
                      <li className="coming_soon">Coming Soon</li>
                  </div>
              </div>

              {/* Right side */}
              <img
                  src="./img/articles/Track Sales & Manage Business.png"
                  alt="Track sales"
              />
            </div>

          <div className="Business_Education">
            
            {/* Left Side */}
            <img
                src="./img/articles/Business Education with img.png"
                alt="Business Education"
            />

            {/* Right side */}
            <div className="leftside">
              <h1>
                  Real <span>Business Education </span> <br/>
                  And Community You Need <br />
                  To <span>Grow</span> Your Business
              </h1>
              <p>
                The World Is Evolving Business Is Changing As ELL, It Can Be <br/>
                Overwhelming, So We Have Curated All The Information And     <br/>
                Community To Help You Thrive In Business, From Marketing, <br/>
                To Sales, To Social Media Marketing, We Have The Best <br/>
                Resources For You
              </p>
              <div className="Start_Learning">
                  <a href="#" className="join_now">Start Learning And Building With Other Business Owners</a>
              </div>
            </div>
          </div>

          {/* Mobile Side */}
          <div className="Business_Education_mobile">
            {/* Left side */}
            <div className="leftside">
              <h1>
                  Real <span>Business Education </span> <br/>
                  And Community You Need <br />
                  To <span>Grow</span> Your Business
              </h1>
              <p>
                The World Is Evolving Business Is Changing As ELL, It Can Be <br/>
                Overwhelming, So We Have Curated All The Information And <br/>
                Community To Help You Thrive In Business, From Marketing, <br/>
                To Sales, To Social Media Marketing, We Have The Best <br/>
                Resources For You
              </p>
              <div className="Start_Learning">
                  <li className="join_now"><a href="#">Start Learning And Building With Other Business Owners</a></li>
              </div>
            </div>

            {/* Right side */}
            <img
                src="./img/articles/Business Education with img.png"
                alt="Business Education"
            />  
          </div>

          {/* Register Your Business */}
          <div className="Business_Registration">
            {/* Left Side */}
            <div className="leftside">
              <h1>
                  <span>Launch</span> And Register Your <br />
                  Business Anywhere In The <br />
                  World
              </h1>
              <ul className="Registrations">
                  <li className="types">
                    <i className="material-icons checkIcon">check_circle</i>
                    UK And USA Business Register
                  </li>
                  <li className="types">
                      <i className="material-icons checkIcon">check_circle</i>
                      Google Business Registration
                  </li>
                  <li className="types">
                      <i className="material-icons checkIcon">check_circle</i>
                      Local C.A.C Business Registration
                  </li>
              </ul>
              <div className="Start_Learning">
                  <li className="join_now"><a href="#">Register And Launch Your Business Now</a></li>
              </div>
            </div>

            {/* Right Side */}
            <img
              src="./img/articles/CAC&GOOGLE Registration.png"
              alt="Register Business"
            />
          </div>
          </div>
        </section>
    </div>
  )
}

export default BusinessTools
