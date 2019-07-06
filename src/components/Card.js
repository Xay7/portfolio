import React from "react";
import styled from "styled-components";
import LogoTooltip from "./UI/LogoTooltip";
import ReactLogo from "../assets/react.svg";
import JavascriptLogo from "../assets/javascript.svg";
import CSSLogo from "../assets/css-3.svg";
import HTMLLogo from "../assets/html-5.svg";
import NodejsLogo from "../assets/nodejs-icon.svg";
import MongoLogo from "../assets/mongodb.svg";
import GooglePlayLogo from "../assets/google-play-icon.svg";
import ReduxLogo from "../assets/redux.svg";
import SassLogo from "../assets/sass.svg";

const CardContainer = styled.div`
  width: 280px;
  height: auto;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px;
  overflow: visible;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

const InfoContainer = styled.div``;

const IsMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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
  border-radius: 10px 10px 0 0;
  transition: all 150ms ease-in-out;

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

const Logo = styled.img`
  width: 25px;
  margin: 10px;
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
  cursor: pointer;
`;

const Card = props => {
  return (
    <CardContainer>
      <Link
        aria-label={props.title}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={props.img} alt={props.title} />
      </Link>
      <InfoContainer>
        {props.mobile ? (
          <IsMobileContainer>
            <Title>{props.title}</Title>
            <Link
              href={props.link}
              aria-label="Google play"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo src={GooglePlayLogo} alt="Google play" />
            </Link>
          </IsMobileContainer>
        ) : (
          <TitleContainer>
            <Title>{props.title}</Title>
          </TitleContainer>
        )}
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
              default:
                return null;
            }
          })}
        </Technologies>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
