import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

const Navbar:React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

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
            <Link className='navbar-app-link' href={"/contact"}>
              Contact
            </Link>
          </li>
          <li className='navbar-app-item social'>
            <ul className='navbar-app-social'>
              <li className='navbar-app-social-item'>
                <Link href={"/"}>
                  <FaTwitter color="#000" size="28" />
                </Link>
              </li>
              <li className='navbar-app-social-item'>
                <Link href={"/"}>
                  <FaGithub color="#000" size="28" />
                </Link>
              </li>
              <li className='navbar-app-social-item'>
                <Link href={"/"}>
                  <FaLinkedin color="#000" size="28" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;