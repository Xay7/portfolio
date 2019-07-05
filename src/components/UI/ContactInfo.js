import React from 'react';
import styled from 'styled-components';
import { Envelope, PhoneSquareAlt } from 'styled-icons/fa-solid'
import { GithubSquare } from 'styled-icons/fa-brands'

const ContactContainer = styled.div`
    width: auto;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const LogoContainer = styled.div`
    width: 25px;
    color: #444444;
    transition: all 150ms ease-in-out;

    &:hover {
        color: #53C1DE;
        transform: scale(1.1);
    }

    @media (min-width: 1024px) {
        width: 50px;
    }
`;

const Text = styled.p`
    margin:0;
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
        color: #53C1DE;
        transform: scale(1.1);
    }
`;

const Contact = (props) => {

    return (
        <ContactContainer>
            <LogoContainer>
                {props.logo === "Github" && <Link href="https://github.com/Xay7" target="_blank" aria-label="Github" rel="noopener noreferrer"><GithubSquare style={{ cursor: "pointer" }} /></Link>}
                {props.logo === "Envelope" && <Link href="mailto:emilian.cw@gmail.com" target="_top" aria-label="Email me"><Envelope /></Link>}
                {props.logo === "Phone" && <PhoneSquareAlt />}
            </LogoContainer>
            <Text>{props.children}</Text>
        </ContactContainer>
    )
}

export default Contact;