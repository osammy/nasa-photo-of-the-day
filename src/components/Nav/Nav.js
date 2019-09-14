import React from "react";
import NasaLogo from "../../images/logo.png";
import { MdPersonOutline, MdSearch } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import styled from "styled-components";
// import "./nav.css";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  padding: 20px 0;
  margin-bottom: 20px;
  background:#000;

  nav {
    display: flex;
    justify-content: space-between;
    width: 300px;
    

    a {
      color: #000;
      text-decoration: none;
      font-size: 0.9rem;
      color:#fff;
      display: flex;
      align-items: center;
    }
  }

  .menu {
    font-weight:bold;
  }
`;

function Nav() {
  return (
    <NavBar>
      <div>
        <img src={NasaLogo} alt="nasa_logo" />
      </div>
      <nav>
        <a href="#">SUBSCRIBE</a>
        <a href="#">
          <MdPersonOutline style={{ fontSize: "1.8rem" }} />
        </a>
        <a href="#">
          <MdSearch style={{ fontSize: "1.8rem" }} />
        </a>
        <a className="menu" href="#">
          Menu
        </a>
        <a href="#">
          <FaAngleDoubleDown style={{ fontSize: "1.2rem" }} />
        </a>
      </nav>
    </NavBar>
  );
}

export default Nav;
