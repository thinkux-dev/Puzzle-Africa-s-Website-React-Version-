import React from 'react'
import './ServicePartners.css'

const ServicePartners = () => {
  return (
    <div>
      <div className="service_partners">
        <h1>Our <span>Partners</span></h1>
        <div className="paddings innerWidth flexCenter companies">
          <img src="./img/articles/companies/Google svg.png" alt="Google"/>
          <img src="./img/articles/companies/cac logo.png" alt="CAC"/>
          <img src="./img/articles/companies/discover books by simsak.png" alt="simsak"/>
        </div>
      </div>

      {/* Start Business */}
      <div className="Start_Business">
        <div className="Get_Started">
          <h1>
            Get Started By Launching <br/>
            <span>Your Business</span>
          </h1>
          <center>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_wpm09k2uTQ2X_-ADw5R_joers34JnQVHTLzJ61QhcqVTjw/viewform" className='space-between'>
              <img src="./img/Launch your business black.png" alt="Launch Business" className="button"/>
            </a>
          </center>
        </div>
      </div>
    </div>
  )
}

export default ServicePartners
