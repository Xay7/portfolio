import React, { useState } from "react";
import styled from "styled-components";
import { Home, At, Code } from "styled-icons/fa-solid/";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100vw;
  height: 64px;
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 1px 0px rgba(0, 0, 0, 0.06), 0px 2px 1px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  @media (min-width: 768px) {
    top: 0;
  }
`;

const NavItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  &:hover {
    @media (min-width: 1224px) {
      p {
        color: #675ef3;
      }

      div {
        color: #675ef3;
      }
    }
  }
`;

const Icon = styled.div`
  color: ${props => (props.scrolled ? "#675EF3" : "#505050")};
  height: 20px;
  width: 20px;
  transition: all 150ms ease-in-out;
`;

const NavText = styled.p`
  margin: 0;
  color: ${props => (props.scrolled ? "#675EF3" : "#505050")};
  font-size: 15px;
  flex-direction: column;
`;

const Navbar = props => {
  const [sections] = useState(["About", "Projects", "Contact"]);

  return (
    <Nav>
      {sections.map((el, index) => {
        return (
          <NavItemContainer
            onClick={() => props.clicked(el)}
            scrolled={props.active[index]}
            key={index}
          >
            <Icon scrolled={props.active[index]}>
              {el === "About" && <Home />}
              {el === "Projects" && <Code />}
              {el === "Contact" && <At />}
            </Icon>
            <NavText scrolled={props.active[index]}>{el}</NavText>
          </NavItemContainer>
        );
      })}
    </Nav>
  );
};

export default Navbar;
