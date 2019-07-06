import React from "react";
import styled from "styled-components";
import { Envelope, PhoneSquareAlt } from "styled-icons/fa-solid";
import { GithubSquare } from "styled-icons/fa-brands";

const ContactContainer = styled.div`
  width: 280px;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 728px) {
    margin: 0;
    width: 400px;
  }
`;

const LogoContainer = styled.div`
  width: 25px;
  color: #444444;
  transition: all 150ms ease-in-out;

  &:hover {
    color: #6c63ff;
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    width: 50px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
  margin-left: 15px;
  color: #656380;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Link = styled.a`
  color: #444444;
  &:hover {
    color: #6c63ff;
    transform: scale(1.1);
  }
`;

const Contact = props => {
  return (
    <ContactContainer>
      <LogoContainer>
        {props.logo === "Github" && (
          <Link
            href="https://github.com/Xay7"
            target="_blank"
            aria-label="Github"
            rel="noopener noreferrer"
          >
            <GithubSquare style={{ cursor: "pointer" }} />
          </Link>
        )}
        {props.logo === "Envelope" && (
          <Link
            href="mailto:emilian.cw@gmail.com"
            target="_top"
            aria-label="Email me"
          >
            <Envelope style={{ cursor: "pointer" }} />
          </Link>
        )}
        {props.logo === "Phone" && <PhoneSquareAlt />}
      </LogoContainer>
      <Text>{props.children}</Text>
    </ContactContainer>
  );
};

export default Contact;
