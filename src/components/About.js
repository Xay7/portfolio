import React from "react";
import styled from "styled-components";
import GuyComputer from "../assets/reactbg.svg";

const Container = styled.div`
    height: calc(100vh - 55px);
    width: 100%;
    padding-top:55px;
    background-color: white;
    display:flex;
`;

const Title = styled.h1`
    color: black;
    margin: 0;
    font-size:48px;
    white-space: nowrap;
`;

const Description = styled.h3`
    color: black;
    margin: 0;
    font-size:36px;
`;

const MeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:10%;
`;

const ReactImage = styled.img`
    width:80%;
    height:80%;
    object-fit: contain;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`;
const About = (props) => {
    return (
        <Container ref={props.forwardRef}>
            <MeContainer>
                <Title>Hello, I'm Emil</Title>
                <Description>I code stuff</Description>
            </MeContainer>
            <ImageContainer >
                <ReactImage src={GuyComputer} />
            </ImageContainer>
        </Container>
    )
}

export default React.forwardRef((props, ref) => <About forwardRef={ref} {...props} />);
