import React from 'react'

// import Header from '../../components/Header/Header'
import './About.css'

const About = () => {
  return (
    <div>
      {/* About Content */}
      <div class="about-section">
        <h1>About <span>Puzzle</span> Africa</h1>
        <p>At Puzzle Africa, we are passionate about empowering business owners with innovative software solutions to streamline their operations and enhance their success. Our mission is to provide intuitive tools and exceptional services that enable entrepreneurs to focus on what they do best – growing their businesses.</p>
      </div>

      <div class="vision-section">
        <h2>Our Vision</h2>
        <p>We envision a world where every business owner has access to cutting-edge technology that simplifies complex tasks, increases efficiency, and fosters growth. By harnessing the power of software, we aim to revolutionize the way businesses operate in Africa and beyond.</p>
      </div>

      <div class="products-section">
        <h2>Our Products</h2>
        <div class="product">
          <h3>Invoicing App</h3>
          <p>Our Invoicing App is designed to simplify the billing process for businesses of all sizes. With user-friendly features and customizable templates, it allows users to create, send, and track invoices effortlessly. Say goodbye to manual invoicing and hello to streamlined financial management.</p>
        </div>
        <div class="product">
          <h3>System Delivery Assistance App</h3>
          <p>The System Delivery Assistance App is your trusted companion for managing deliveries and logistics with ease. From route optimization to real-time tracking, it empowers businesses to deliver products and services promptly while ensuring customer satisfaction every step of the way.</p>
        </div>
        <div class="product">
          <h3>Business Service Assistance App</h3>
          <p>Our Business Service Assistance App offers a comprehensive suite of tools to support various aspects of business operations. From inventory management to customer relationship management (CRM), it provides solutions tailored to meet the unique needs of modern entrepreneurs.</p>
        </div>
      </div>

      <div class="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Innovation: </strong> We are committed to continuous innovation, striving to stay ahead of the curve and anticipate the evolving needs of our clients.</li>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Quality: </strong> We adhere to the highest standards of quality in everything we do, ensuring that our products and services exceed expectations.</li>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Customer-Centricity: </strong> We prioritize the needs of our customers above all else, delivering personalized solutions and unparalleled support to foster long-term relationships.</li>
        </ul>
      </div>

      <div class="why-choose-section">
        <h2>Why Choose Puzzle Africa?</h2>
        <ul>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Expertise: </strong> With years of experience in the software industry, our team brings unparalleled expertise and insights to every project.</li>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Reliability: </strong> We pride ourselves on our reliability and consistency, delivering results that you can count on, time and time again.</li>
          <li><strong><i class="material-icons checkIcon">check_circle</i> Passion: </strong> Our passion for what we do drives us to go above and beyond for our clients, making their success our top priority.</li>
        </ul>
      </div>

      <div class="contact-section">
        <h2>Get in Touch</h2>
        <p>Ready to take your business to the next level? Contact Puzzle Africa today to learn more about our software solutions and how we can help you achieve your goals.</p>
      </div>
    </div>
  )
}

export default About
