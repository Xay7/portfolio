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
      active: [true, false, false]
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
      }, 66);
    });
  }

  handleClick = item => {
    switch (item) {
      case "About": {
        this.setState({ active: [true, false, false] });
        return window.scrollTo(0, this.about.current.offsetTop)
      }
      case "Projects": {
        this.setState({ active: [false, true, false] });
        return window.scrollTo(0, this.projects.current.offsetTop)
      }
      case "Contact": {
        this.setState({ active: [false, false, true] });
        return window.scrollTo(0, this.contact.current.offsetTop)
      }
      default:
        return null;
    }
  };

  handleScroll = e => {
    const offset = 150;
    const bodyScrollPosition = document.documentElement.scrollTop;
    if (
      bodyScrollPosition >= this.about.current.offsetTop - offset &&
      bodyScrollPosition - offset < this.about.current.offsetTop &&
      !this.state.active[0]
    ) {
      return this.setState({ active: [true, false, false] });
    } else if (
      bodyScrollPosition >= this.projects.current.offsetTop - offset &&
      bodyScrollPosition - offset < this.projects.current.offsetTop &&
      !this.state.active[1]
    ) {
      return this.setState({ active: [false, true, false] });
    } else if (
      bodyScrollPosition >= this.contact.current.offsetTop - offset &&
      !this.state.active[2]
    ) {
      return this.setState({ active: [false, false, true] });
    }

    // Slower but dynamic

    // const refs = [this.about, this.projects, this.contact]
    // let active = this.state.active;
    // refs.map((el, index, arr) => {
    //   if (arr.length - 1 === index) {
    //     if (this.main.current.scrollTop >= el.current.offsetTop - offset && !this.state.active[index]) {
    //       active = active.map((el, ind) => {
    //         if (ind === index) {
    //           return el = true;
    //         } else return el = false;
    //       })
    //       return this.setState({ active });
    //     }
    //   }
    //   else if (this.main.current.scrollTop >= el.current.offsetTop - offset && this.main.current.scrollTop - offset < arr[index + 1].current.offsetTop && !this.state.active[index]) {
    //     active = active.map((el, ind) => {
    //       if (ind === index) {
    //         return el = true;
    //       } else return el = false;
    //     })
    //     return this.setState({ active });
    //   } else return null;
    //   return null;
    // })
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
          refs={[this.about, this.projects, this.contact]}
          active={this.state.active}
          clicked={this.handleClick}
        />
      </Main>
    );
  }
}

export default App;
