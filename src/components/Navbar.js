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

    // Home -> Projects -> Contacts
    state = {
        active: [true, false, false]
    }

    handleClick = (item, scrolling) => {

        if (item === "about") {
            window.scrollTo(0, this.props.refs[0].current.offsetTop)
        }
        else if (item === "projects") {
            window.scrollTo(0, this.props.refs[1].current.offsetTop - 55)
        }
        else if (item === "contact") {
            window.scrollTo(0, this.props.refs[2].current.offsetTop - 55)
        }
    }

    handleScroll = () => {

        let active = this.state.active;

        this.props.refs.map((el, index, arr) => {
            if (arr.length - 1 === index) {
                if (window.scrollY >= el.current.offsetTop - 100 && !this.state.active[index]) {
                    active = active.map((el, ind) => {
                        if (ind === index) {
                            return el = true;
                        } else return el = false;
                    })
                    return this.setState({ active });
                }
            }
            else if (window.scrollY >= el.current.offsetTop - 55 && window.scrollY < arr[index + 1].current.offsetTop - 55 && !this.state.active[index]) {
                active = active.map((el, ind) => {
                    if (ind === index) {
                        return el = true;
                    } else return el = false;
                })
                return this.setState({ active });
            }
        })

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
                <NavItemContainer onClick={() => this.handleClick('about')} clicked={this.state.active[0]}>
                    <HomeIcon clicked={this.state.active[0]} />
                    <p>About</p>
                </NavItemContainer>
                <NavItemContainer onClick={() => this.handleClick('projects')} clicked={this.state.active[1]}>
                    <ProjectsIcon clicked={this.state.active[1]} />
                    <p>Projects</p>
                </NavItemContainer>
                <NavItemContainer onClick={() => this.handleClick('contact')} clicked={this.state.active[2]}>
                    <ContactIcon clicked={this.state.active[2]} />
                    <p>Contact</p>
                </NavItemContainer>
            </Nav >
        )
    }
}

export default Navbar;
