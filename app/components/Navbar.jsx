"use client";
import { useTheme } from '../context/ThemeContext';

export function NavigationBar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className='navbar navbar-expand-lg navbar-light mt-3 mx-3 rounded-pill d-flex justify-content-between nav-cust fade-in'>
        <div className='container-fluid px-4 py-1 d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
           <img src="./logo_none_background.png" alt="logo" className='img-fluid rounded-circle mx-2' width={40} height={40}/>
           <span className='navbar-brand fw-bold'>Youcare</span>
           </div>

            <div className='d-flex align-items-center' id='navbarNav'>
                <ul className='navbar-nav d-flex justify-content-between'>
                    <li className='nav-item'>
                        <a className='nav-link active text-bluebarry bg-nav rounded-pill mx-2' href='#'>Dashboard</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-bluebarry bg-nav rounded-pill mx-2' href='#'>Patient</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-bluebarry bg-nav rounded-pill mx-2' href='#'>Appointment</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-bluebarry bg-nav rounded-pill mx-2' href='#'>Repport</a>
                    </li>
                </ul>   
            </div>
            <div className='d-flex align-items-center'>
                <button 
                  onClick={toggleTheme} 
                  className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' 
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className={`fa-solid ${isDark ? 'fa-sun text-warning' : 'fa-moon text-primary'}`}></i>
                </button>
                <button className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' style={{ width: '40px', height: '40px' }}><i className="fa-solid fa-gear"></i></button>
                <button className='btn rounded-circle mx-1 bg-light border-0 shadow-sm' style={{ width: '40px', height: '40px' }}><i className="fa-regular fa-bell"></i></button>
                <button className="btn rounded-circle bg-light p-0 border-0 shadow-sm ms-2" style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                    <img src="./user-profile.png" alt="user" className='img-fluid' style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
                </button>
            </div>
        </div>
    </nav>
  );
}