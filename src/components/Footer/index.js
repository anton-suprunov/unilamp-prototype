import React from 'react'
import Link from 'gatsby-link'

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      
      <div className="footer__copy">
        &copy; 2018 Unilamp Norden
        <br />
        AS. 992 846 070. 
        <br />
        Industriveien 11, 1481 Hagan
      </div>
      
      <ul className="footer__nav-list">
        <li className="footer__nav-li footer__nav-li_title">About Us</li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">Who We are</a>
        </li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">Partners</a>
        </li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">etc</a>
        </li>
      </ul>

      <ul className="footer__nav-list">
        <li className="footer__nav-li footer__nav-li_title">Info</li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">Who We are</a>
        </li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">Partners</a>
        </li>
        <li className="footer__nav-li">
          <a href="#" className="footer__nav-link">etc</a>
        </li>
      </ul>

      <ul className="footer__nav-list">
        <li className="footer__nav-li footer__nav-li_title">Contact Us</li>
        <li className="footer__nav-li footer__nav-li_info">
          Telefonnummer: 
          <br />
          <strong>+47 67 494 770</strong>
          <br />
          <br />
          Forespørsel: 
          <br />
          <strong>post@unilamp.no</strong>
        </li>
      </ul>

      <ul className="footer__nav-list">
        <li className="footer__nav-li footer__nav-li_title">Need Assistance?</li>
        <li className="footer__nav-li footer__nav-li_info">
          Support:
          <br />
          <strong>+47 67 494 770</strong>
          <br />
          <br />
          Sales:
          <br />
          <strong>+47 67 494 770</strong>
        </li>
      </ul>

    </div>
  </footer>
)

export default Footer