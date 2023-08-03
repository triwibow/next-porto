import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

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
          {show ? (
            <IoClose 
              size="24"
              color="#1F2428"
            />
          ):(
            <FaBars 
              size="19"
              color="#1F2428"
            />
          )}
        </button>
      </div>
      <div className={`navbar-app-collapse ${show && ('show')}`}>
        <ul className='navbar-app-nav'>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"/"}>
              Home
            </Link>
          </li>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"/about"}>
              About
            </Link>
          </li>
          <li className='navbar-app-item'>
            <Link className='navbar-app-link' href={"/techstack"}>
              Tech Stack
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