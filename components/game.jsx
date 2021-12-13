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

    updateGame(tile, flagged){
        //debugger
        console.log(flagged);
        console.log(tile.pos);
    }

    render(){
        return(
            <ReactBoard board={this.state.board} update={this.updateGame} />
        )
    }
}

export default Game;