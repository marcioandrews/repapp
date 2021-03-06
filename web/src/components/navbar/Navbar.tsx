import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../../styles/components/navbar/Navbar.css';
import '../../styles/Global.css';
import '../../styles/Variables.css';
import Dropdown from './Dropdown';
import logoImg from '../../assets/logo.svg';
import logoImgW from '../../assets/logoW.svg';
import DarkMode from '../DarkModeButton';

function Navbar() {
    
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

const changeBackground = () => {
    if(window.scrollY >= 50) {
        setNavbar(true)
        } else {
          setNavbar(false)
        }
}

window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <Link to="/WorkSpace" className='navbar-logo' onClick={closeMobileMenu}>
        {navbar ? <img src={logoImg} alt="Repapp" /> : <img src={logoImgW} alt="Repapp" />}
          {/* <i className='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servi??os <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Criar Conta
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>

          </li>
        </ul>
        <Button />
        <DarkMode />
      </nav>
    </>
  );
}

export default Navbar;