import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, At, Code } from 'styled-icons/fa-solid/';

// Containers
const Nav = styled.nav`
    position:fixed;
    display:flex;
    flex-direction:row;
    bottom: 0;
    width: 100vw;
    height: 55px;
    background: white;
    box-shadow: 0 0px 5px 0px rgba(0,0,0,0.1);
    border-top: 1px solid rgba(0,0,0,0.1);
`;

const NavItemContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color:white;
    p {
        margin: 0;
        color:${props => props.clicked ? "green" : "#AAA"};
        font-size:12px;
    }
`;

// Icons
const HomeIcon = styled(Home)`
    color: ${props => props.clicked ? "green" : "#AAA"};
    height:20px;
    width:20px;
    transition: all 150ms ease-in-out;
`;
const ProjectsIcon = styled(Code)`
    color: ${props => props.clicked ? "green" : "#AAA"};
    height:20px;
    width:20px;
    transition: all 150ms ease-in-out;
`
const ContactIcon = styled(At)`
    color: ${props => props.clicked ? "green" : "#AAA"};
    height:20px;
    width:20px;
    transition: all 150ms ease-in-out;
`;

// Text

const Navbar = () => {

    const [clicked, setClicked] = useState({
        home: false,
        projects: false,
        contact: false
    })

    // Update clicks when nav item is clicked
    const handleClick = (item) => {
        const clicks = clicked;
        Object.keys(clicks).map(el => {
            if (el === item) {
                return clicks[el] = true;
            } else {
                return clicks[el] = false;
            }
        })
        setClicked({ ...clicks });
    }

    return (
        <Nav>
            <NavItemContainer onClick={() => handleClick('home')} clicked={clicked.home}>
                <HomeIcon clicked={clicked.home} />
                <p>Home</p>
            </NavItemContainer>
            <NavItemContainer onClick={() => handleClick('projects')} clicked={clicked.projects}>
                <ProjectsIcon clicked={clicked.projects} />
                <p>Projects</p>
            </NavItemContainer>
            <NavItemContainer onClick={() => handleClick('contact')} clicked={clicked.contact}>
                <ContactIcon clicked={clicked.contact} />
                <p>Contact</p>
            </NavItemContainer>
        </Nav >
    )
}

export default Navbar;
