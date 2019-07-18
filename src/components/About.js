import React from "react";
import styled from "styled-components";
import LogoTooltip from "./UI/LogoTooltip";
import ReactLogo from "../assets/react.svg";
import JavascriptLogo from "../assets/javascript.svg";
import CSSLogo from "../assets/css-3.svg";
import HTMLLogo from "../assets/html-5.svg";
import NodejsLogo from "../assets/nodejs-icon.svg";
import MongoLogo from "../assets/mongodb.svg";
import ReduxLogo from "../assets/redux.svg";
import SassLogo from "../assets/sass.svg";
import PhotoshopLogo from "../assets/photoshop.svg";
import IllustratorLogo from "../assets/illustrator.svg";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: #444444;
  margin: 0;
  font-size: 36px;
  white-space: nowrap;
  font-weight: 700;
  text-align: center;
  line-height: 1em;

  @media (min-width: 768px) {
    font-size: 64px;
    text-align: start;
  }
`;

const Description = styled.h3`
  color: #0984e3;
  margin: 0;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: start;
  }
`;

const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 0px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;

const About = props => {
  return (
    <Container ref={props.forwardRef}>
      <MeContainer>
        <Title>Hello, I'm Emil</Title>
        <Description>I'm a web developer</Description>
        <LogosContainer>
          <LogoTooltip src={HTMLLogo} name="HTML5" />
          <LogoTooltip src={CSSLogo} name="CSS5" />
          <LogoTooltip src={SassLogo} name="Sass" size="40px" />
          <LogoTooltip src={JavascriptLogo} name="Javascript" />
          <LogoTooltip src={ReactLogo} name="React" />
          <LogoTooltip src={ReduxLogo} name="Redux" />
          <LogoTooltip src={NodejsLogo} name="Nodejs" />
          <LogoTooltip src={MongoLogo} name="Mongodb" size="100px" />
          <LogoTooltip src={PhotoshopLogo} name="Photoshop" />
          <LogoTooltip src={IllustratorLogo} name="Illustrator" />
        </LogosContainer>
      </MeContainer>
    </Container>
  );
};

export default React.forwardRef((props, ref) => (
  <About forwardRef={ref} {...props} />
));
