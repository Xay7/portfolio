import React from "react";
import Navbar from "./components/Navbar";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import styled from "styled-components";

const Line = styled.hr`
  width: 90%;
  height: 0;
  border: 0;
  border-top: 1px solid #ddd;
  margin: 0 auto;
`;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: true,
      projects: false,
      contact: false,
    };
    this.about = React.createRef();
    this.projects = React.createRef();
    this.contact = React.createRef();
  }

  // Find a better way to debounce scroll event
  componentDidMount() {
    window.addEventListener("scroll", () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.handleScroll();
      }, 100);
    });
  }

  // Finds clicked element and set it to false
  removeActiveStatus = () => {
    return Object.keys(this.state).some((el, index) => {
      if (this.state[el]) {
        this.setState({ [el]: false })
        return true;
      } else return false;
    })
  }

  handleClick = item => {
    this.removeActiveStatus();
    this.setState({ [item]: true });
    return window.scrollTo(0, this[item].current.offsetTop);
  };

  handleScroll = e => {

    // Offset value make CSS appear faster than intended
    const offset = 150;
    const bodyScrollPosition = document.documentElement.scrollTop;

    Object.keys(this.state).some((el, index) => {
      if (bodyScrollPosition >= this[el].current.offsetTop - offset &&
        bodyScrollPosition - offset < this[el].current.offsetTop && !this.state[el]) {
        this.removeActiveStatus();
        this.setState({ [el]: true });
        return true;
      } else return false;
    })
  };

  render() {
    return (
      <Main>
        <About ref={this.about} />
        <Line />
        <Projects ref={this.projects} />
        <Line />
        <Contact ref={this.contact} />
        <Navbar
          active={this.state}
          clicked={this.handleClick}
        />
      </Main>
    );
  }
}

export default App;
