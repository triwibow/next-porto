import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { Container } from 'reactstrap'

const Navbar:React.FC = () => {
  return (
    <div className='container'>
      <div className='navbar-app'>
        <Link href={"/"}>
          <img 
            src='/images/logo.svg'
            className='navbar-app-logo'
          />
        </Link>
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
        <button className='navbar-app-toggle'>
          <FaBars 
            size="19"
            color="#1F2428"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;