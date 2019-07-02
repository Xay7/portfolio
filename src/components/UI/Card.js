import React from "react";
import styled from "styled-components";
import ReactLogo from "../../assets/react.svg";
import JavascriptLogo from "../../assets/javascript.svg";
import CSSLogo from "../../assets/css-3.svg";
import HTMLLogo from "../../assets/html-5.svg";
import NodejsLogo from "../../assets/nodejs-icon.svg";
import MongoLogo from "../../assets/mongodb.svg";
import GooglePlayLogo from "../../assets/google-play-icon.svg";

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
`;

const InfoContainer = styled.div`

`;

const IsMobileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Technologies = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    align-self: center;
    cursor: pointer;
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

const ListItem = styled.li`
    font-size: 12px;
`;

const List = styled.ul`
    margin: 0;
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
                    return <ListItem>{el}</ListItem>
                })}</List>}
                <Technologies>
                    {props.technologies.map(el => {
                        switch (el) {
                            case "React":
                                return <Logo src={ReactLogo} alt="React" />
                            case "Javascript":
                                return <Logo src={JavascriptLogo} alt="Javascript" />
                            case "HTML5":
                                return <Logo src={HTMLLogo} alt="HTML5" />
                            case "CSS3":
                                return <Logo src={CSSLogo} alt="CSS3" />
                            case "Nodejs":
                                return <Logo src={NodejsLogo} alt="Nodejs" />
                            case "Mongodb":
                                return <Logo src={MongoLogo} alt="Mongodb" style={{ width: "100px" }} />
                            default: return null;
                        }
                    })}
                </Technologies>
            </InfoContainer>
        </CardContainer>

    )
}

export default Card;
