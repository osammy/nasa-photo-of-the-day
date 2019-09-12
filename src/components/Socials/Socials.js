import React from "react";
import { socials } from "../../data";
import SocialIcon from "./SocialIcon";
import styled from "styled-components";

// import "./socials.css";

const SocialsSection = styled.div`
    display:flex;
    justify-content: space-between;
    width:170px;
`

function Socials() {
  return (
    <SocialsSection className="icons">
      {socials.map(props => (
        <SocialIcon
          Icon={props.Icon}
          iconClass={props.iconClass}
          name={props.name}
          key={props.name}
        />
      ))}
    </SocialsSection>
  );
}

export default Socials;
