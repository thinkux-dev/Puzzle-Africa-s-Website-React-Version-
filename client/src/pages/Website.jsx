import React from 'react'
// import '../App.css'
import Hero from '../components/Hero/Hero';
import BusinessTools from '../components/BusinessTools/BusinessTools'
import BusinessEducation from '../components/BusinessEducation/BusinessEducation'
import ServicePartners from '../components/ServicePartners/ServicePartners'
// import FeedbackButton from '../components/FeedbackButton/FeedbackButton'

const Website = () => {
  return (
    <div>
        {/* <FeedbackButton/> */}
        <Hero/>
        <BusinessTools/>
        <BusinessEducation/>
        <ServicePartners/>
    </div>
  )
}

export default Website
