import React, { Component } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  outline: none;
`;

export class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jumping: false,
            gameOver: false,
            paused: true,
        };
        this.animation = null;
    }

    componentDidMount = () => {
        this.ctx = this.refs.canvas.getContext("2d");
        this.draw();
    };

    draw = () => {
        this.setState({ gameOver: false });
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
        this.ctx.savedUniverse = false;

        this.drawGround();
        this.drawBadGuy();
        this.drawPlayer();
    };

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

        if (this.ctx.savedUniverse) {
            this.drawSavedUniverse();
            return;
        }
        if (this.ctx.gameOver) {
            this.drawGameOver();
            return;
        }

        requestAnimationFrame(() => this.mainLoop());
    };

    drawGameOver = () => {
        this.ctx.textAlign = "center";
        this.ctx.font = this.ctx.mobile
            ? "bold 18px open sans"
            : "bold 36px open sans";
        this.ctx.fillStyle = "red";
        this.ctx.fillText(
            "Oh no! Green block died 😢",
            this.ctx.canvas.width / 2,
            40
        );
        this.ctx.textAlign = "center";
        this.ctx.font = this.ctx.mobile ? "16px open sans" : "24px open sans";
        this.ctx.fillStyle = "#76758E";
        this.ctx.fillText(
            "Click to go back in time",
            this.ctx.canvas.width / 2,
            80
        );
    };

    drawSavedUniverse = () => {
        this.ctx.textAlign = "center";
        this.ctx.font = this.ctx.mobile
            ? "bold 24px open sans"
            : "bold 48px open sans";
        this.ctx.fillStyle = "green";
        this.ctx.fillText("Congratulations!", this.ctx.canvas.width / 2, 45);
        this.ctx.font = this.ctx.mobile ? "18px open sans" : "36px open sans";
        this.ctx.fillStyle = "#000";
        this.ctx.fillText(
            "You saved the universe 🤗",
            this.ctx.canvas.width / 2,
            this.ctx.mobile ? 75 : 95
        );
    };

    drawGround = () => {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.fillRect(0, this.ctx.ground, window.innerWidth, 100);
    };

    drawPlayer() {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(this.ctx.x, this.ctx.y, ctx.size, ctx.size);
    }

    drawBadGuy() {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(
            this.ctx.badx,
            this.ctx.bady,
            this.ctx.badsize,
            this.ctx.badsize
        );
    }

    updatePlayer() {
        if (this.state.jumping && this.ctx.onGround) {
            this.ctx.dy = this.ctx.jumpPower;
        }
        this.ctx.dy += this.ctx.gravity;
        this.ctx.dy *= this.ctx.drag;
        this.ctx.y += this.ctx.dy;

        if (this.ctx.y + this.ctx.size >= this.ctx.ground) {
            this.ctx.y = this.ctx.ground - this.ctx.size;
            this.ctx.dy = 0;
            this.ctx.onGround = true;
            this.setState({ jumping: false });
        } else {
            this.ctx.onGround = false;
        }
    }

    updateBadGuy() {
        if (this.ctx.badx < 0 - 60) {
            this.ctx.badOut = true;
            this.ctx.score++;
            if (this.ctx.score === 10) {
                this.ctx.savedUniverse = true;
            }
            setTimeout(() => {
                this.ctx.badx = window.innerWidth;
                if (this.ctx.mobile) {
                    this.ctx.badSpeed = Math.random() * 4 + 2.5;
                } else this.ctx.badSpeed = Math.floor(Math.random() * 15 + 7);

                this.ctx.badOut = false;
            }, Math.floor(Math.random() * 500 + 1));
        } else {
            this.ctx.badx -= this.ctx.badSpeed;

            if (
                this.ctx.badx < this.ctx.x + this.ctx.size &&
                this.ctx.badx > this.ctx.x - this.ctx.size &&
                this.ctx.bady < this.ctx.y + this.ctx.size &&
                this.ctx.bady > this.ctx.y - this.ctx.size
            ) {
                this.ctx.gameOver = true;
                this.setState({ gameOver: true });
            }
        }
    }

    handleInput = e => {
        e.preventDefault();
        if (e.keyCode === 38 || e.keyCode === 32) {
            this.setState({ jumping: true, paused: false });
        }
    };

    handleClick = e => {
        if (this.state.paused === true) {
            this.mainLoop();
        }
        if (this.state.gameOver === true) {
            this.setState({ gameOver: false });
            this.draw();
            this.mainLoop();
        }
        this.setState({ jumping: true, paused: false });
    };
    render() {
        return (
            <Canvas
                ref="canvas"
                width={window.innerWidth}
                height={280}
                onKeyDown={this.handleInput}
                onClick={this.handleClick}
                tabIndex="0"
            />
        )
    }
}

export default Game
