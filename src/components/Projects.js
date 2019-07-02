import React from "react";
import styled from "styled-components";
import Card from "./UI/Card";
import WeatherBackground from "../assets/weatherbg.png";
import JustChattingBackground from "../assets/justchattingbg.png";
import TeamfightTacticsBackground from "../assets/tftbg.webp";

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: white;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    margin-bottom:55px;
`;

const Projects = () => {
    return (
        <Container>
            <Card
                img={JustChattingBackground}
                title="Just chatting"
                description="MERN live chat application with custom rooms and channels. "
                list={["Offline and online members", "Edit channel name, description", "Delete or leave room", "Edit avatar and password", "Messages timestamps", "Image and link support", "...and more!"]}
                technologies={["React", "Javascript", "HTML5", "CSS3", "Nodejs", "Mongodb"]}
                link="https://justchatting.netlify.com/" />
            <Card
                img={TeamfightTacticsBackground}
                title="TFT Guide"
                description="Game guide for Teamfight tactics game made by Riot games."
                list={["Get latest news from official source", "Filter champions and view their stats", "View item combinations and their stats", "Find champion synergies and their abilites"]}
                technologies={["React", "Javascript", "HTML5", "CSS3"]}
                link="https://play.google.com/store/apps/details?id=com.teamfighttactics"
                mobile={true} />
            <Card
                img={WeatherBackground}
                title="Weather forecast"
                description="5 day weather forecast with current temperatures, wind speed and humidity. You can view upcoming data in graphs up to 24 hours."
                technologies={["React", "Javascript", "HTML5", "CSS3"]}
                link="https://weather-forecast-fe821.firebaseapp.com/" />
        </Container>
    )
}

export default Projects;
