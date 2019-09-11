import React from "react";
import NasaLogo from '../../images/logo.png';
import {MdPersonOutline, MdSearch} from 'react-icons/md';
import {FaAngleDoubleDown} from 'react-icons/fa';
import './nav.css';

function Nav() {
  return (
    <div className="nav-navbar">
      <div><img src={NasaLogo}  alt="nasa_logo"/></div>
      <nav>
        <a href="#">SUBSCRIBE</a>
        <a href="#"><MdPersonOutline style={{fontSize:"1.8rem"}} /></a>
        <a href="#"><MdSearch style={{fontSize:"1.8rem"}} /></a>
        <a className="menu" href="#">Menu</a>
        <a href="#"><FaAngleDoubleDown style={{fontSize:"1.2rem"}}  /></a>
      </nav>
    </div>
  );
}

export default Nav;
