import React from "react";
import styled from "styled-components";
import ContactInfo from "./UI/ContactInfo";

const Container = styled.div`
    margin-top: 55px;
    height: calc(100vh);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 36px;
    color: #444444;
    margin: 10px 0;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const ContactInfoContainer = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 50px;

    @media (min-width: 768px) {
        margin-left: 300px;
    }
`;

const Canvas = styled.canvas`
    outline: none;
`;


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jumping: false,
            gameOver: false,
            paused: true,
        }
        this.animation = null

    }

    componentDidMount = () => {
        this.ctx = this.refs.canvas.getContext("2d");
        this.draw();
    }

    draw = () => {
        this.setState({ gameOver: false })
        this.ctx.mobile = false;
        if (window.innerWidth < 1024) {
            this.ctx.mobile = true;
        }
        // Player
        this.ctx.x = this.ctx.mobile ? 50 : 150;
        this.ctx.y = this.ctx.mobile ? 170 : 140;
        this.ctx.dy = 0;
        this.ctx.size = this.ctx.mobile ? 30 : 60;
        this.ctx.onGround = false;
        this.ctx.jumpPower = -13;
        // World
        this.ctx.gravity = 0.6;
        this.ctx.drag = 0.999;
        this.ctx.groundDrag = 1;
        this.ctx.ground = 200;
        // Bad guy
        this.ctx.badx = window.innerWidth;
        this.ctx.bady = this.ctx.mobile ? 170 : 140;
        this.ctx.badsize = this.ctx.mobile ? 30 : 60;
        this.ctx.badSpeed = this.ctx.mobile ? 2 : 5;
        this.ctx.badOut = false;
        // Score
        this.ctx.score = 0;
        this.ctx.gameOver = false;

        this.drawGround();
        this.drawBadGuy();
        this.drawPlayer();
    }


    mainLoop = () => {
        let canvas = this.refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;

        this.drawGround();
        this.drawBadGuy();
        this.drawPlayer();


        if (!this.ctx.badOut) {
            this.updateBadGuy();
        }
        this.updatePlayer();


        if (this.ctx.gameOver) {
            this.drawGameOver();
            return;
        }


        requestAnimationFrame(() => this.mainLoop())

    }

    drawGameOver = () => {
        this.ctx.textAlign = "center";
        this.ctx.font = this.ctx.mobile ? "18px poppins" : "48px poppins";
        this.ctx.fillStyle = "#000";
        this.ctx.fillText("Oh no! Green block died :(", this.ctx.canvas.width / 2, 80);

        this.ctx.textAlign = "center";
        this.ctx.font = this.ctx.mobile ? "16px poppins" : "24px poppins";
        this.ctx.fillStyle = "#76758E";
        this.ctx.fillText("Click to go back in time", this.ctx.canvas.width / 2, 120);
    }

    drawGround = () => {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.fillRect(0, this.ctx.ground, window.innerWidth, 100);
    }

    drawPlayer() {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(this.ctx.x, this.ctx.y, ctx.size, ctx.size);
    }


    drawBadGuy() {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.ctx.badx, this.ctx.bady, this.ctx.badsize, this.ctx.badsize);
    }

    updatePlayer() {
        if (this.state.jumping && this.ctx.onGround) {
            this.ctx.dy = this.ctx.jumpPower
        }
        this.ctx.dy += this.ctx.gravity;
        this.ctx.dy *= this.ctx.drag;
        this.ctx.y += this.ctx.dy;

        if (this.ctx.y + this.ctx.size >= this.ctx.ground) {
            this.ctx.y = this.ctx.ground - this.ctx.size;
            this.ctx.dy = 0;
            this.ctx.onGround = true;
            this.setState({ jumping: false })

        } else {
            this.ctx.onGround = false;
        }
    }

    updateBadGuy() {
        if (this.ctx.badx < 0 - 60) {
            this.ctx.badOut = true;
            this.ctx.score++;
            setTimeout(() => {
                this.ctx.badx = window.innerWidth
                if (this.ctx.mobile) {
                    this.ctx.badSpeed = (Math.random() * 3.5) + 1.5;
                } else this.ctx.badSpeed = Math.floor((Math.random() * 10) + 5);

                this.ctx.badOut = false;
            }, Math.floor((Math.random() * 500) + 1))
        } else {
            this.ctx.badx -= this.ctx.badSpeed;

            if (this.ctx.badx < this.ctx.x + this.ctx.size && this.ctx.badx > this.ctx.x - this.ctx.size &&
                this.ctx.bady < this.ctx.y + this.ctx.size && this.ctx.bady > this.ctx.y - this.ctx.size) {
                this.ctx.gameOver = true;
                this.setState({ gameOver: true });
            }


        }

    }

    handleInput = (e) => {
        e.preventDefault();
        if (e.keyCode === 38 || e.keyCode === 32) {
            this.setState({ jumping: true, paused: false })
        }
    }

    handleClick = (e) => {
        if (this.state.paused === true) {
            this.mainLoop();
        }
        if (this.state.gameOver === true) {
            this.setState({ gameOver: false })
            this.draw();
            this.mainLoop();
        }
        this.setState({ jumping: true, paused: false })
    }


    render() {


        return (
            <Container ref={this.props.forwardRef} >
                <ContactInfoContainer>
                    <Header>Find me here</Header>
                    <ContactInfo logo="Envelope">emilian.cw@gmail.com</ContactInfo>
                    <ContactInfo logo="Phone">+48 883 241 335</ContactInfo>
                    <ContactInfo logo="Github">Xay7</ContactInfo>
                </ContactInfoContainer>
                <Canvas ref="canvas" width={window.innerWidth} height={280} onKeyDown={this.handleInput} onClick={this.handleClick} tabIndex="1"></Canvas>
            </Container>
        )
    }
}

export default React.forwardRef((props, ref) => <Contact forwardRef={ref} {...props} />);
