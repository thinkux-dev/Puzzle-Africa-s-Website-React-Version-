import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
// import FeedbackButton from '../FeedbackButton/FeedbackButton'

const Layout = () => {
  const location = useLocation(); // Get the current location

  // Conditionally render the footer based on the current route path
  const renderHeader = () => {
    if (location.pathname !== '/feedback') {
      return <Header />;
    }
    return null;
  };
  // Conditionally render the footer based on the current route path
  const renderFooter = () => {
    if (location.pathname !== '/feedback') {
      return <Footer />;
    }
    return null;
  };

  return (
    <div>
      <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                {renderHeader()}
                {/* <Header /> */}
                {/* <FeedbackButton /> */}
                <Outlet />
                {/*To fetch the rest of the website children. E.g, The hero, residencies etc... */}
            </div>
            {/* <Footer/> */}
            {renderFooter()}
        </>
    </div>
  )
}

export default Layout
