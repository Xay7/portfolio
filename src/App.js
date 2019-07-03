import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from '../src/components/Projects';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import styled from 'styled-components';

const Line = styled.hr`
   width:90%;
   border-top: 1px solid #EEE;
   margin: 0 auto;
`;

function App() {

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <React.Fragment>
      <About ref={homeRef} />
      <Line />
      <Projects ref={projectsRef} />
      <Line />
      <Contact ref={contactRef} />
      <Navbar refs={[homeRef, projectsRef, contactRef]} />
    </React.Fragment>
  );
}

export default App;
