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
    box-shadow: 0 0px 3px 0px rgba(0,0,0,0.1);
    z-index: 99;
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
    box-shadow:0px 1px 3px 0px ${props => props.clicked ? "rgba(0, 0, 0, 0.1)" : "none"},
    0px 1px 1px 0px ${props => props.clicked ? "rgba(0, 0, 0, 0.07)" : "none"},
    0px 2px 2px -1px ${props => props.clicked ? "rgba(0, 0, 0, 0.06)" : "none"}; 
    p {
        margin: 0;
        color:${props => props.clicked ? "#675EF3" : "#505050"};
        font-size:12px;
        flex-direction: column;
    }
`;

const Icon = styled.div`
    color: ${props => props.clicked ? "#675EF3" : "#505050"};
    height: 20px;
    width: 20px;
    transition: all 150ms ease-in-out;
`;

class Navbar extends React.Component {

    // Home -> Projects -> Contacts
    state = {
        tags: ["about", "projects", "contact"]
    }

    handleClick = (item) => {

        if (item === "about") {
            return this.props.main.current.scrollTop = this.props.refs[0].current.offsetTop - 55
        }
        else if (item === "projects") {
            return this.props.main.current.scrollTop = this.props.refs[1].current.offsetTop
        }
        else if (item === "contact") {
            return this.props.main.current.scrollTop = this.props.refs[2].current.offsetTop
        }
    }

    render() {
        return (
            <Nav>
                {this.state.tags.map((el, index) => {
                    return <NavItemContainer onClick={() => this.handleClick(el)} clicked={this.props.active[index]} key={index}>
                        <Icon clicked={this.props.active[index]}>
                            {el === "about" && <Home clicked={this.props.active[index]} />}
                            {el === "projects" && <Code clicked={this.props.active[index]} />}
                            {el === "contact" && <At clicked={this.props.active[index]} />}
                        </Icon>
                        <p>{el}</p>
                    </NavItemContainer>
                })}
            </Nav >
        )
    }
}

export default Navbar;
