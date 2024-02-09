import React from 'react'


import '../App.css'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import BusinessTools from '../components/BusinessTools/BusinessTools'
import BusinessEducation from '../components/BusinessEducation/BusinessEducation'
import ServicePartners from '../components/ServicePartners/ServicePartners'
import Footer from '../components/Footer/Footer'

const Website = () => {
  return (
    <div>
      <Hero/>
      <BusinessTools/>
      <BusinessEducation/>
      <ServicePartners/>
    </div>
  )
}

export default Website
