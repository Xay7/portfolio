import React from "react";
import Card from "./Card";
import styled from "styled-components";
import WeatherBackground from "../assets/weatherbg.png";
import JustChattingBackground from "../assets/justchattingbg.png";
import TeamfightTacticsBackground from "../assets/tftbg.webp";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    height: 100vh;
  }
`;

const Projects = props => {
  return (
    <React.Fragment>
      <Container ref={props.forwardRef}>
        <Card
          img={JustChattingBackground}
          title="Just chatting"
          description="Real time chat application with custom rooms with channels."
          list={[
            "Offline and online members",
            "Edit channel name, description",
            "Delete or leave room",
            "Change avatar and password",
            "Messages timestamps",
            "Image and link support and more!"
          ]}
          technologies={[
            "React",
            "Redux",
            "Javascript",
            "HTML5",
            "CSS3",
            "Sass",
            "Nodejs",
            "Mongodb"
          ]}
          link="https://justchatting.netlify.com/"
          github="https://github.com/Xay7/just-chatting"
        />
        <Card
          img={TeamfightTacticsBackground}
          title="TFT Guide"
          description="Teamfight tactics game guide and news parser."
          list={[
            "Get latest news from official source",
            "Filter champions and view their stats",
            "View item combinations and their stats",
            "Find champion synergies and their abilites"
          ]}
          technologies={[
            "Android",
            "React Native",
            "Javascript",
            "HTML5",
            "CSS3"
          ]}
          link="https://play.google.com/store/apps/details?id=com.teamfighttactics"
          github="https://github.com/Xay7/Teamfight-Tactics-Handbook"
        />
        <Card
          img={WeatherBackground}
          title="Weather forecast"
          description="5 day weather forecast with 24h data display."
          list={[
            "Min/Max temp for each day",
            "Temp/Wind/Humidity graphs",
            "24 hour data display from the current hour"
          ]}
          technologies={["React", "Javascript", "HTML5", "CSS3"]}
          link="https://weather-forecast-fe821.firebaseapp.com/"
          github="https://github.com/Xay7/Weather-Forecast"
        />
      </Container>
    </React.Fragment>
  );
};

export default React.forwardRef((props, ref) => (
  <Projects forwardRef={ref} {...props} />
));
