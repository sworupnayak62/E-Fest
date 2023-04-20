import React from 'react';
import '../css/footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BiLinkAlt } from 'react-icons/bi';
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
          <span>Silicon Institute of Technology,
            Silicon Hills, Patia,
            Bhubaneswar – 751024
            Odisha, India.</span>
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
          <a href="https://www.facebook.com/entrepreneurship.cell.1"><span className="fa fa-envelope"><FaFacebook /></span></a>
          <a href="https://www.instagram.com/sit.edcell/"><span className="fa fa-envelope"><FaInstagram /></span></a>
          <a href="https://silicon.ac.in/entrepreneurship-dev-cell/"><span className="fa fa-envelope"><BiLinkAlt /></span></a>
          <a href="https://www.linkedin.com/company/entrepreneurshipdevelopmentcellsitbbsr/about/"><span className="fa fa-envelope"><FaLinkedin /></span></a>
        </section>

        <section className='footer-links'>
          <a href="/">Home</a>
          <a href="#faq">Faq</a>
          <a href="#gallery">Gallery</a>
          <a href="#event">Events</a>
          <a href="/team">Teams</a>
        </section>
      </div>
      <div className="copyright">
        Copyright © 2023 SIT,Entrepreneurship Development Cell - All rights reserved
      </div>
    </footer >
  )
}
