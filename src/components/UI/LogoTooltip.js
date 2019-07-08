import React from "react";
import Tooltip from "./Tooltip";
import styled from "styled-components";

const Logo = styled.img`
  width: ${props => (props.size ? props.size : "25px")};
  margin: 10px;

  &:hover + div {
    visibility: visible;
    opacity: 1;
    top: -50px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
`;

const LogoTooltip = props => {
  return (
    <LogoContainer>
      <Logo src={props.src} alt={props.name} size={props.size} />
      <Tooltip>{props.name}</Tooltip>
    </LogoContainer>
  );
};

export default LogoTooltip;
