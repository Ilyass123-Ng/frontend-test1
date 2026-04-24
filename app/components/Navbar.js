"use client";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';

export function NavigationBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light mt-3 mx-3 rounded-pill d-flex justify-content-between'>
        <div className='container-fluid px-4 py-1 d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
           <img src="./logo.jpeg" alt="logo" className='img-fluid rounded-circle mx-2' width={40} height={40}/>
           <span className='navbar-brand'>Youcare</span>
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
                <button className='btn rounded-circle mx-1 bg-light'><i className="fa-solid fa-gear"></i></button>
                <button className='btn rounded-circle mx-1 bg-light'><i className="fa-regular fa-bell"></i></button>
                <button className="btn rounded-circle bg-light">
                    <img src="./user-profile.png" alt="user" className='img-fluid rounded-circle' width={40} height={40}/>
                </button>
            </div>
        </div>
    </nav>
  );
}