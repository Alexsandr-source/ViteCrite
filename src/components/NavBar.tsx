import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/scss/NavBar.scss';

function NavBar() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Company logo" />
        <nav>
          <ul className='header__nav'>
            <li>
              <NavLink to='/' className={({ isActive }) =>
                isActive ? 'header__link header__link-active' : 'header__link'
              }>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to='/about' className={({ isActive }) =>
                isActive ? 'header__link header__link-active' : 'header__link'
              }>
                About us
              </NavLink>
            </li>

            <li>
              <NavLink to='/service' className={({ isActive }) =>
                isActive ? 'header__link header__link-active' : 'header__link'
              }>
                Service
              </NavLink>
            </li>

            <li className="has-dropdown">
              <span className="header__link">Page</span>
              <ul className="dropdown">
                <li><NavLink to='/our-team' className="dropdown__link">Our Team</NavLink></li>
                <li><NavLink to='/pricing-plan' className="dropdown__link">Pricing Plan</NavLink></li>
                <li><NavLink to='/privacy-policy' className="dropdown__link">Privacy Policy</NavLink></li>
                <li><NavLink to='/tems-and-conditions' className="dropdown__link">Tems & Conditions</NavLink></li>
                <li><NavLink to='/faq' className="dropdown__link">FAQ</NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to='/blog' className={({ isActive }) =>
                isActive ? 'header__link header__link-active' : 'header__link'
              }>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink
          to='/contact-us'
          className={({ isActive }) =>
            isActive ? 'header__button header__link-active' : 'header__button'
          }
        >
          Contact us
        </NavLink>
      </header>
    </>
  );
}

export default NavBar;
