import React, { useEffect, useState } from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  // const getMenuStyles = (menuOpened) => {
  //   if (document.documentElement.clientWidth <= 800){
  //     return {right: !menuOpened && "-100%"}
  //   }
  // }

  const getMenuStyles = (menuOpened) => {
    if (menuOpened) {
      return { right: 0 };
    } else {
      return { right: "-200%" };
    }
  };
  return (
      <div>
          <section className='h-wrapper'>
              <div className='flexCenter paddings innerWidth h-container'>
                <NavLink to='/'>
                  <img src='./img/curved puzzle logo.png' alt='logo' width={150} className="nav_logo"/>
                </NavLink>
                  
                  <OutsideClickHandler
                  onOutsideClick={closeMenu}
                  >
                    <div className='flexCenter h-menu'
                    style={getMenuStyles(menuOpened)}
                    >
                        <a href=''>The Puzzle Business Community</a>
                        <a href=''>
                            The Mart<span>coming soon</span>
                        </a>
                        <a href='' className="business_payments">
                            Puzzle Business<span>New!!!</span>
                        </a>
                        <NavLink to="/FAQ">FAQ</NavLink>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe_wpm09k2uTQ2X_-ADw5R_joers34JnQVHTLzJ61QhcqVTjw/viewform'>
                            <img
                                src='./img/Launch your business header.png'
                                alt='logo'
                                width={150}
                                className='launch_business'
                                />
                        </a>
                    </div>
                  </OutsideClickHandler>

                  <div className="menu-icon" onClick={toggleMenu}>
                    <BiMenuAltRight size={30}/>
                  </div>
              </div>
              
          </section>
      </div>
  );
};

export default Header;
