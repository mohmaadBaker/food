import React from 'react';
import logo from './LOGO.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>Menu-Us</b>
      </span>
    </div>
    <p>
      <b>Food To Your Home</b>
    </p>
  </div>
);

export default Logo;
