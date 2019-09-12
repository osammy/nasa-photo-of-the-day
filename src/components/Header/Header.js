import React from "react";
import Socials from "../Socials/Socials";
import styled from "styled-components";

// import './header.css';

const HeaderSection = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 30px;
  h1 {
    font-size: 2.5rem;
    font-weight: bolder;
    margin: 70px 0;
  }
  .header-category {
    text-transform: uppercase;
    span {
      font-weight: bold;
    }
    .divider {
      font-size: 1.8rem;
      color: #0066b3;
    }
  }
`;

function Header() {
  return (
    <HeaderSection className="header-headerbar">
      <p className="header-category">
        <span>Photography</span> <span className="divider">|</span> Photogallery
      </p>
      <h1>Photo Of the day</h1>
      <Socials />
    </HeaderSection>
  );
}

export default Header;
