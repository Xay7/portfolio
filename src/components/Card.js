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
import AndroidLogo from "../assets/android-icon.svg";
import SassLogo from "../assets/sass.svg";

const CardContainer = styled.div`
  width: 90%;
  height: auto;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  box-shadow: 0px 6px #ddd;
  margin: 20px;
  overflow: visible;
  border-radius: 5px;

  @media (min-width: 420px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 330px;
  }
`;

const InfoContainer = styled.div``;

const Technologies = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  align-self: center;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  border-radius: 5px 5px 0 0;

  :hover {
    filter: brightness(70%);
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #444444;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin: 10px 0;
  font-weight: bold;
`;

const TitleContainer = styled.div``;

const Description = styled.p`
  font-weight: bold;
  color: #444444;
  font-size: 16px;
  margin: 0px 30px;
  margin-bottom: 10px;
  text-align: justify;
  text-justify: distribute;
  text-align-last: left;
  font-weight: 700;
`;

const ListItem = styled.li`
  font-size: 14px;
  padding: 1px 0;

  ::before {
    content: "•";
    font-size: 16px;
    color: #6c63ff;
    font-weight: bold;
    display: inline-block;
    width: 1.2em;
    margin-left: -1em;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0px 30px;
  margin-left: 45px;
  list-style: none;
`;

const Link = styled.a`
  position: relative;
  width: 100px;
  cursor: pointer;
  text-align: center;
  background-color: #0984e3;
  color: white;
  padding: 7px;
  box-shadow: 0 5px #0564ad;
  transition: 150ms ease-in-out;
  transition-property: background-color, top;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0676cc;
  }
  &:active {
    box-shadow: none;
    top: 5px;
  }
`;

const Card = props => {
  return (
    <CardContainer>
      <a
        aria-label={props.title}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={props.img} alt={props.title} />
      </a>
      <InfoContainer>
        <TitleContainer>
          <Title>{props.title}</Title>
        </TitleContainer>
        <Description>{props.description}</Description>
        {props.list && (
          <List>
            {props.list.map(el => {
              return <ListItem key={el}>{el}</ListItem>;
            })}
          </List>
        )}
        <Technologies>
          {props.technologies.map(el => {
            switch (el) {
              case "React":
                return <LogoTooltip src={ReactLogo} name={el} key={el} />;
              case "React Native":
                return <LogoTooltip src={ReactLogo} name={el} key={el} />;
              case "Redux":
                return <LogoTooltip src={ReduxLogo} name={el} key={el} />;
              case "Javascript":
                return <LogoTooltip src={JavascriptLogo} name={el} key={el} />;
              case "HTML5":
                return <LogoTooltip src={HTMLLogo} name={el} key={el} />;
              case "CSS3":
                return <LogoTooltip src={CSSLogo} name={el} key={el} />;
              case "Sass":
                return (
                  <LogoTooltip src={SassLogo} name={el} key={el} size="40px" />
                );
              case "Nodejs":
                return <LogoTooltip src={NodejsLogo} name={el} key={el} />;
              case "Mongodb":
                return (
                  <LogoTooltip
                    src={MongoLogo}
                    name={el}
                    size="100px"
                    key={el}
                  />
                );
              case "Android":
                return <LogoTooltip src={AndroidLogo} name={el} key={el} />;
              default:
                return null;
            }
          })}
        </Technologies>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "10px",
            justifyContent: "space-evenly"
          }}
        >
          <Link
            aria-label="View live site"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Link>
          <Link
            aria-label="View github repo"
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
