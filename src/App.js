import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Projects from '../src/components/Projects';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import styled from 'styled-components';

const Line = styled.hr`
   width:90%;
   border-top: 1px solid #EEE;
`;

function App() {

  let homeRef = useRef(null);
  let projectsRef = useRef(null);
  let contactRef = useRef(null);

  const scrollToRef = (item) => {
    switch (item) {
      case "about":
        window.scrollTo(0, homeRef.current.offsetTop)
        return null;
      case "projects":
        window.scrollTo(0, projectsRef.current.offsetTop)
        return null;
      case "contact":
        window.scrollTo(0, contactRef.current.offsetTop)
        return null;
      default: return null;
    }
  }

  const handleRef = (ref, item) => {
    switch (item) {
      case "about":
        return homeRef = ref;
      case "projects":
        return projectsRef = ref;
      case "contact":
        return contactRef = ref;
      default: return null;
    }
  }

  return (
    <React.Fragment>
      <About getRef={handleRef} />
      <Line />
      <Projects getRef={handleRef} />
      <Line />
      <Contact getRef={handleRef} />
      <Navbar clicked={scrollToRef} />
    </React.Fragment>
  );
}

export default App;
