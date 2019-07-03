import React from "react";
import styled from "styled-components";
import Card from "./Card";
import WeatherBackground from "../assets/weatherbg.png";
import JustChattingBackground from "../assets/justchattingbg.png";
import TeamfightTacticsBackground from "../assets/tftbg.webp";

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    margin-bottom:55px;
`;

const Projects = (props) => {

    return (
        <Container ref={props.forwardRef}>
            <Card
                img={JustChattingBackground}
                title="Just chatting"
                description="MERN live chat application with custom rooms and channels. "
                list={["Offline and online members", "Edit channel name, description", "Delete or leave room", "Edit avatar and password", "Messages timestamps", "Image and link support", "...and more!"]}
                technologies={["React", "Redux", "Javascript", "HTML5", "CSS3", "Nodejs", "Mongodb"]}
                link="https://justchatting.netlify.com/" />
            <Card
                img={TeamfightTacticsBackground}
                title="TFT Guide"
                description="Teamfight tactics game guide"
                list={["Get latest news from official source", "Filter champions and view their stats", "View item combinations and their stats", "Find champion synergies and their abilites"]}
                technologies={["ReactNative", "Javascript", "HTML5", "CSS3"]}
                link="https://play.google.com/store/apps/details?id=com.teamfighttactics"
                mobile={true} />
            <Card
                img={WeatherBackground}
                title="Weather forecast"
                description="5 day weather forecast with dynamic graphs."
                list={["Min/Max temp for each day", "Temp/Wind/Humidity graphs", "24 hour data display from the current hour"]}
                technologies={["React", "Javascript", "HTML5", "CSS3"]}
                link="https://weather-forecast-fe821.firebaseapp.com/" />
        </Container>
    )
}

export default React.forwardRef((props, ref) => <Projects forwardRef={ref} {...props} />);
