import React from "react";
import * as Minesweeper from "../minesweeper/minesweeper";
import ReactBoard from "./board";

class Game extends React.Component {
    constructor(){
        super();
        const board = new Minesweeper.Board(5,5);
        this.state = {board};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){
        
    }

    render(){
        return(
            <ReactBoard board={this.state.board} update={this.updateGame()} />
        )
    }
}

export default Game;