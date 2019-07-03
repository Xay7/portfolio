import React from 'react';
import styled from 'styled-components';
import { Home, At, Code } from 'styled-icons/fa-solid/';

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
        top: 0;
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

class Navbar extends React.Component {

    state = {
        clicked: {
            about: true,
            projects: false,
            contact: false
        },
        active: {
            about: true,
            projects: false,
            contact: false
        }
    }

    handleClick = (item, scrolling) => {

        if (item === "about") {
            window.scrollTo(0, this.props.refs[0].current.offsetTop)
        }
        if (item === "projects") {
            window.scrollTo(0, this.props.refs[1].current.offsetTop - 55)
        }
        if (item === "contact") {
            window.scrollTo(0, this.props.refs[2].current.offsetTop - 55)
        }
    }

    handleScroll = () => {
        if (window.scrollY >= this.props.refs[0].current.offsetTop && window.scrollY < this.props.refs[1].current.offsetTop - 100 && !this.state.active.about) {
            return this.setState({ active: { about: true, projects: false, contact: false }, clicked: { about: true, projects: false, contact: false } })
        }
        else if (window.scrollY >= this.props.refs[1].current.offsetTop - 100 && window.scrollY < this.props.refs[2].current.offsetTop - 100 && !this.state.active.projects) {
            return this.setState({ active: { about: false, projects: true, contact: false }, clicked: { about: false, projects: true, contact: false } })
        }
        else if (window.scrollY >= this.props.refs[2].current.offsetTop - 100 && !this.state.active.contact) {
            return this.setState({ active: { about: false, projects: false, contact: true }, clicked: { about: false, projects: false, contact: true } })
        }

    }

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll);
    }

    componentWillMount() {
        document.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <Nav>
                <NavItemContainer onClick={() => this.handleClick('about')} clicked={this.state.clicked.about}>
                    <HomeIcon clicked={this.state.clicked.about} />
                    <p>About</p>
                </NavItemContainer>
                <NavItemContainer onClick={() => this.handleClick('projects')} clicked={this.state.clicked.projects}>
                    <ProjectsIcon clicked={this.state.clicked.projects} />
                    <p>Projects</p>
                </NavItemContainer>
                <NavItemContainer onClick={() => this.handleClick('contact')} clicked={this.state.clicked.contact}>
                    <ContactIcon clicked={this.state.clicked.contact} />
                    <p>Contact</p>
                </NavItemContainer>
            </Nav >
        )
    }
}

export default Navbar;
