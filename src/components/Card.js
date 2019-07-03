import React from "react";
import styled from "styled-components";
import Tooltip from "./UI/Tooltip";
import ReactLogo from "../assets/react.svg";
import JavascriptLogo from "../assets/javascript.svg";
import CSSLogo from "../assets/css-3.svg";
import HTMLLogo from "../assets/html-5.svg";
import NodejsLogo from "../assets/nodejs-icon.svg";
import MongoLogo from "../assets/mongodb.svg";
import GooglePlayLogo from "../assets/google-play-icon.svg";
import ReduxLogo from "../assets/redux.svg";

const CardContainer = styled.div`
    width: 280px;
    height: auto;
    box-shadow: 0px 0px 3px 0 rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border-radius: 25px;
    overflow:hidden;
    display:flex;
    flex-direction: column;
    margin: 20px;
    overflow:visible;
`;

const InfoContainer = styled.div`

`;

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
    border-radius: 25px 25px 0 0;
    transition: all 150ms ease-in-out;

    :hover {
        filter:brightness(70%);
    }
`;

const Title = styled.h3`
    margin:0;
    color: black;
    text-align: center;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Description = styled.p`
    color: black;
    font-size: 14px;
    margin: 0px 30px;
    margin-bottom: 10px;
`;

// Logos to display: 
const Logo = styled.img`
    width: 25px;
    margin: 10px;
`;

const LogoContainer = styled.div`
    position:relative;
    display:flex;

    &:hover div {
        display:block;
    }
`

const ListItem = styled.li`
    font-size: 12px;
`;

const List = styled.ul`
    padding: 0; 
    margin: 0px 30px;
    margin-left: 45px;
`;

const Link = styled.a`
    cursor:pointer;
`;

const Card = (props) => {

    return (
        <CardContainer>
            <Link href={props.link} target="_blank" rel="noopener noreferrer">
                <Image src={props.img} alt={props.title} />
            </Link>
            <InfoContainer>
                {props.mobile ? <IsMobileContainer>
                    <Title>{props.title}</Title>
                    <Link href={props.link} target="_blank" rel="noopener noreferrer">
                        <Logo src={GooglePlayLogo} alt="React" />
                    </Link>
                </IsMobileContainer>
                    : <Title>{props.title}</Title>}
                <Description>{props.description}</Description>
                {props.list && <List>{props.list.map(el => {
                    return <ListItem key={el}>{el}</ListItem>
                })}</List>}
                <Technologies>
                    {props.technologies.map(el => {
                        switch (el) {
                            case "React":
                                return <LogoContainer key={el}>
                                    <Logo src={ReactLogo} alt="React" />
                                    <Tooltip>React</Tooltip>
                                </LogoContainer>
                            case "ReactNative":
                                return <LogoContainer key={el}>
                                    <Logo src={ReactLogo} alt="React Native" />
                                    <Tooltip>React Native</Tooltip>
                                </LogoContainer>
                            case "Redux":
                                return <LogoContainer key={el}>
                                    <Logo src={ReduxLogo} alt="Redux" />
                                    <Tooltip>Redux</Tooltip>
                                </LogoContainer>
                            case "Javascript":
                                return <LogoContainer key={el}>
                                    <Logo src={JavascriptLogo} alt="Javascript" />
                                    <Tooltip>Javascript</Tooltip>
                                </LogoContainer>
                            case "HTML5":
                                return <LogoContainer key={el}>
                                    <Logo src={HTMLLogo} alt="HTML5" />
                                    <Tooltip>HTML5</Tooltip>
                                </LogoContainer>
                            case "CSS3":
                                return <LogoContainer key={el}>
                                    <Logo src={CSSLogo} alt="CSS3" />
                                    <Tooltip>CSS3</Tooltip>
                                </LogoContainer>
                            case "Nodejs":
                                return <LogoContainer key={el}>
                                    <Logo src={NodejsLogo} alt="Nodejs" />
                                    <Tooltip>Nodejs</Tooltip>
                                </LogoContainer>
                            case "Mongodb":
                                return <LogoContainer key={el}>
                                    <Logo src={MongoLogo} alt="Mongodb" style={{ width: "100px" }} />
                                    <Tooltip>Mongodb</Tooltip>
                                </LogoContainer>
                            default: return null;
                        }
                    })}
                </Technologies>
            </InfoContainer>
        </CardContainer>

    )
}

export default Card;
