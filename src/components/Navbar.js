import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, At, Code } from 'styled-icons/fa-solid/';
import { Link, withRouter } from 'react-router-dom';

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

    @media (min-width: 768px) {
        height:100vh;
        width:200px;
        flex-direction:column;
    }
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
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%; 
    height: 100%;
    &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
    }
    @media (min-width: 768px) {
        height: auto;
    }
`;


const Navbar = (props) => {

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
        setClicked({ ...clicks, });
    }

    return (
        <Nav>
            <StyledLink to='/about'>
                <NavItemContainer onClick={() => handleClick('home')} clicked={clicked.home}>
                    <HomeIcon clicked={clicked.home} />
                    <p>About</p>
                </NavItemContainer>
            </StyledLink>
            <StyledLink to='/projects'>
                <NavItemContainer onClick={() => handleClick('projects')} clicked={clicked.projects}>
                    <ProjectsIcon clicked={clicked.projects} />
                    <p>Projects</p>
                </NavItemContainer>
            </StyledLink>
            <StyledLink to='/contact'>
                <NavItemContainer onClick={() => handleClick('contact')} clicked={clicked.contact}>
                    <ContactIcon clicked={clicked.contact} />
                    <p>Contact</p>
                </NavItemContainer>
            </StyledLink>
        </Nav >
    )
}

export default withRouter(Navbar);
