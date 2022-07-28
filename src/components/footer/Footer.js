import { Button } from 'reactstrap'
import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content d-flex'>
            <p>lorem ipsum dolor sit amet consecutive adipisc lorem ipsum dolor sit amet consecutive adipisc.</p>
            <div className='input-butn'>
                <input placeholder='Your email address' />
                <Button>Sign in</Button>
            </div>
        </div>
        <div className='footer-links d-flex'>
            <div className='f-links'>
                <a>About</a>
                <a>Privacy</a>
                <a>T&C</a>
            </div>
            <p className='copyright'>copyright @ coin'd</p>
            <div className='f-icons'>
                <a><FaFacebook /></a>
                <a><FaInstagram /></a>
                <a><FaTwitter /></a>
                <a><FaLinkedin /></a>
            </div>
        </div>
    </div>
  )
}
