import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Header />
                <Outlet />{" "}
                {/*To fetch the rest of the website children. E.g, The hero, residencies etc... */}
            </div>
            <Footer />
        </>
    </div>
  )
}

export default Layout
