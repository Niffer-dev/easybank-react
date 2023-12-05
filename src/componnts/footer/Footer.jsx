import React from 'react'
import footerlogo from "../../assets/elogo.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div>
            <img src={footerlogo} alt="" />
            <div className='footer-icons'>
                <Link to="/">
                    <i class="ri-facebook-box-line"></i>
                </Link>

                <Link to="/">
                    <i class="ri-twitter-line"></i>
                </Link>

                <Link to="/">
                    <i class="ri-instagram-line"></i>
                </Link>
            </div>
        </div>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Contacts</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
        </ul>
       
        <ul>
            <li>
                <Link to="/">Careers</Link>
            </li>
            <li>
                <Link to="/">Supports</Link>
            </li>
            <li>
                 <Link to="/">Privacy Policy</Link>
            </li>
        </ul>

        <div className='footer-btn'>
            <button>Request Invite</button>
            <p>&copy; Easybanking. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer