import React from 'react'
import Link from 'gatsby-link'

import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li className="header__nav-li">
            <a href="#" className="header__nav-link">Produkter</a>
          </li>
          <li className="header__nav-li">
            <a href="#" className="header__nav-link">Bli inspirert</a>
          </li>
          <li className="header__nav-li">
            <a href="#" className="header__nav-link">About Us</a>
          </li>
          <li className="header__nav-li">
            <a href="#" className="header__nav-link">Kontakt</a>
          </li>
          <li className="header__nav-li">
            <a href="#" className="header__nav-link">Support</a>
          </li>
        </ul>
      </nav>
      <nav className="header__actions">
        <a href="#" className="header__action header__action_search"></a>
        <a href="#" className="header__action header__action_user"></a>
        <a href="#" className="header__action header__action_lang"></a>
      </nav>
    </div>
  </header>
)

export default Header