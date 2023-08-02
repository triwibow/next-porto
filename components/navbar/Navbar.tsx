import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Navbar:React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='navbar-app container'>
      <div className='navbar-app-brand'>
        <Link href={"/"}>
          <img 
            src='/images/logo.svg'
            className='navbar-app-logo'
          />
        </Link>
        <button 
          className='navbar-app-toggle'
          onClick={() => setShow(!show)}
        >
          <FaBars 
            size="19"
            color="#1F2428"
          />
        </button>
      </div>
      <div className={`navbar-app-collapse ${show && ('show')}`}>
        <ul className='navbar-app-nav'>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"#"}>
              Home
            </Link>
          </li>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"#"}>
              About
            </Link>
          </li>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"#"}>
              Technologies
            </Link>
          </li>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"#"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;