import React from "react";
import styled from "styled-components";
import Tooltip from "./UI/Tooltip";
import LogoTooltip from './UI/LogoTooltip';
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
    box-shadow:  0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
    color: #444444;
    text-align: center;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Description = styled.p`
    color: #444444;
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
            <Link aria-label={props.title} href={props.link} target="_blank" rel="noopener noreferrer">
                <Image src={props.img} alt={props.title} />
            </Link>
            <InfoContainer>
                {props.mobile ? <IsMobileContainer>
                    <Title>{props.title}</Title>
                    <Link href={props.link} aria-label="Google play" target="_blank" rel="noopener noreferrer">
                        <Logo src={GooglePlayLogo} alt="Google play" />
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
                                return <LogoTooltip src={ReactLogo} name={el} key={el} />
                            case "ReactNative":
                                return <LogoTooltip src={ReactLogo} name={el} key={el} />
                            case "Redux":
                                return <LogoTooltip src={ReduxLogo} name={el} key={el} />
                            case "Javascript":
                                return <LogoTooltip src={JavascriptLogo} name={el} key={el} />
                            case "HTML5":
                                return <LogoTooltip src={HTMLLogo} name={el} key={el} />
                            case "CSS3":
                                return <LogoTooltip src={CSSLogo} name={el} key={el} />
                            case "Sass":
                                return <LogoTooltip src={SassLogo} name={el} key={el} size="40px" />
                            case "Nodejs":
                                return <LogoTooltip src={NodejsLogo} name={el} key={el} />
                            case "Mongodb":
                                return <LogoTooltip src={MongoLogo} name={el} size="100px" key={el} />
                            default: return null;
                        }
                    })}
                </Technologies>
            </InfoContainer>
        </CardContainer>

    )
}

export default Card;
