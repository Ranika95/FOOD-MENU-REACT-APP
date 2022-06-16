import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <nav class="navbar bg-secondary my-navbar">
              <div class="nav-container">
                 <a class="navbar-brand" href="/#">
                    <img src={logo} alt="" width="50" class="d-inline-block align-text-top"/> <span>BdMeal</span>
                 </a>
                 <a href="/menu">Menu</a>
                 <a href="/order">Order</a>
                 <a href="/offers">Offers</a>
              </div>
           </nav>
        </div>      
    );
};

export default Header;
