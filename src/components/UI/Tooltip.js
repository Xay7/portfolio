import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: max-content;
  padding: 10px;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  background-color: #444444;
  color: white;
  transition: all 100ms ease-in-out;

  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: #444444 transparent transparent transparent;
  }
`;

const Tooltip = props => {
  return <TooltipContainer>{props.children}</TooltipContainer>;
};

export default Tooltip;
