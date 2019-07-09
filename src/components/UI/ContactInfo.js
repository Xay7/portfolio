import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Envelope, PhoneSquareAlt } from "styled-icons/fa-solid";
import { GithubSquare, Linkedin } from "styled-icons/fa-brands";

const ContactContainer = styled.div`
  width: 280px;
  height: auto;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
  margin: 5px auto;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 480px) {
    width: 450px;
  }

`;

const LogoContainer = styled.div`
  width: 25px;
  color: #444444;
  transition: all 150ms ease-in-out;

  &:hover {
    color: #0984e3;
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    width: 50px;
  }
`;

const LinkImage = styled.a`
  color: #444444;
  &:hover {
    color: #0984e3;
    transform: scale(1.1);
  }
`;

const LinkText = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  margin-bottom: 5px;
`;

const Header = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 12px;
  color: #656380;

  @media (min-width: 480px) {
    font-size: 18px;
  }
`;

const Contact = props => {

  const [isLink, setIsLink] = useState(false);

  const isURL = str => {
    return setIsLink(/^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(str));
  }

  useEffect(() => {
    isURL(props.children);
  }, [props.children])

  const renderContact = (name) => {
    switch (name) {
      case "Github":
        return <LinkImage
          href="https://github.com/Xay7"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
        >
          <GithubSquare style={{ cursor: "pointer" }} />
        </LinkImage>
      case "Email":
        return <LinkImage
          href="mailto:emilian.cw@gmail.com"
          target="_top"
          aria-label="Email me"
        >
          <Envelope style={{ cursor: "pointer" }} />
        </LinkImage>
      case "Phone":
        return <PhoneSquareAlt />
      case "Linkedin":
        return <LinkImage
          href="https://www.linkedin.com/in/emilian%C4%87wiok/"
          target="_top"
          aria-label="Email me"
        >
          <Linkedin style={{ cursor: "pointer" }} />
        </LinkImage>
      default: return null;
    }
  }

  return (
    <ContactContainer>
      <LogoContainer>
        {renderContact(props.name)}
      </LogoContainer>
      <TextContainer>
        <Header>{props.name}</Header>
        {isLink ? <LinkText href={props.children} target="_blank" rel="noopener noreferrer">
          <Text style={{ color: "blue" }}>{props.children}</Text>
        </LinkText>
          : <Text>{props.children}</Text>}
      </TextContainer>
    </ContactContainer>
  );
};

export default Contact;
