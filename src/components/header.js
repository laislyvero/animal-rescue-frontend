import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css-files/header.css';

const Header = () => {
    return (
        <div>  
            <NavLink to = '/' activeClassName='is-active'id='header' exact ={true}> Home </NavLink>
            <NavLink to = '/newanimal' activeClassName= 'is-active' id='header'> Register animal</NavLink>
            <NavLink to = '/contactus' activeClassName='is-active' id='header'>Contact Us</NavLink>
            <NavLink to = '/aboutus' activeClassName='is-active' id='header'>About Us</NavLink>
            <NavLink to = '/donate' activeClassName='is-active' id='header'>Donate</NavLink>
            <NavLink to = '/adopt' activeClassName='is-active' id='header'>Adopt</NavLink>
        </div>
      );
};
 
export default Header;