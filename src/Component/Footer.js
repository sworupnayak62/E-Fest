import React from 'react';
import '../css/footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <span><ImLocation className="fa fa-map-marker" /></span>
          <span>Street, full address, state/province, country, pincode</span>
        </section>
        <section>
          <span><BsFillTelephoneFill className="fa fa-phone" /></span>
          <span>(+91) 7978575241</span>
        </section>
        <section>
          <span><MdEmail className="fa fa-envelope" /></span>
          <span>sit.edcell@gmail.com</span>
        </section>
      </div>
      <span class="border-shape"></span>
      <div class="bottom_content">
        <section className='social-links-footer'>
          <span className="fa fa-envelope"><FaFacebook /></span>
          <span className="fa fa-envelope"><FaInstagram /></span>
          <span className="fa fa-envelope"><FaTwitter /></span>
          <span className="fa fa-envelope"><FaLinkedin /></span>


        </section>
        <section className='footer-links'>
          <a href="#">Home</a>
          <a href="#">Faq</a>
          <a href="#">Gallery</a>
          <a href="#">Events</a>
          <a href="#">Teams</a>
        </section>
      </div>
      <div className="copyright">
        Copyright © 2023 websitename - All rights reserved
      </div>
    </footer >
  )
}
