import React from 'react';
import Tile from '../minesweeper/minesweeper';

class ReactTile extends React.Component {
    constructor(props) {
        super(props);
        const tileObj = props.tile;
        this.pos = tileObj.pos;
        this.bombed = tileObj.bombed;
        this.revealed = tileObj.explored;
        this.flagged = tileObj.flagged;
        this.adjBombs = tileObj.adjacentBombCount();
        this.myFace = this.myFace.bind(this);
    }

    myFace() {
        // if (!this.revealed) {
        //     if (this.flagged) {
        //         return "&#9873;";
        //     } else {
        //         return "";
        //     }
        // } else {
            if (this.bombed) {
                return '💣';
            } else {
                return this.adjBombs.toString();
            }
        // }
    }

    render() {
        // debugger
        return(
            <button>{this.myFace()}</button>
        );
    }
}

export default ReactTile;


// ⚐	white flag	023220	9872	0x2690	&#9872;
// ⚑	black flag	023221	9873	0x2691	&#9873;
// bomb - &#x1f4a3;