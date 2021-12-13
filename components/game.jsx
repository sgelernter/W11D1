import React from "react";
import * as Minesweeper from "../minesweeper/minesweeper";
import Board from "./board";

class Game extends React.Component {
    constructor(){
        super();
        const board = new Minesweeper.Board();
        this.state = {board};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){
        return(
            <Board board={this.state.board} update={this.updateGame()} />
        )
    }
}

export default Game;