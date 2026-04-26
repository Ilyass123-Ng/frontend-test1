"use client";
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function NavigationBar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg navbar-light mt-3 mx-3 rounded-5 nav-cust fade-in'>
      <div className='container-fluid px-2 px-md-4 py-1'>
        {/* logo youcare */}
        <div className='d-flex align-items-center'>
          <img src="./logo_none_background.png" alt="logo" className='img-fluid rounded-circle mx-2' width={35} height={35} />
          <span className='navbar-brand fw-bold m-0 d-none d-sm-inline'>Youcare</span>
        </div>

        <div className='d-flex align-items-center ms-auto order-lg-last'>
          <button onClick={toggleTheme} className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}>
            <i className={`fa-solid ${isDark ? 'fa-sun text-warning' : 'fa-moon text-primary'}`}></i>
          </button>
          <button className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}><i className="fa-solid fa-gear"></i></button>
          <button className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}><i className="fa-regular fa-bell"></i></button>
          <button className="btn rounded-circle bg-light p-0 border-0 shadow-sm ms-1 ms-md-2" style={{ width: '35px', height: '35px', overflow: 'hidden' }}>
            <img src="./user-profile.png" alt="user" className='img-fluid' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </button>

          {/* button humburguer   */}
          <button className="navbar-toggler border-0 shadow-none ms-2 p-0" type="button" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
          </button>
        </div>

        {/*liste des liens*/}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav py-2 py-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active text-center rounded-pill mx-lg-2 px-3 mb-1 mb-lg-0' href='#'>Dashboard</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-bluebarry text-center rounded-pill mx-lg-2 px-3 mb-1 mb-lg-0' href='#'>Patient</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-bluebarry text-center rounded-pill mx-lg-2 px-3 mb-1 mb-lg-0' href='#'>Appointment</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-bluebarry text-center rounded-pill mx-lg-2 px-3' href='#'>Repport</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}