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
        this.className = "tile";
        this.update = this.props.update;

        this.myFace = this.myFace.bind(this);
        this.handleClick = this.handleClick.bind(this);


    }

    myFace() {
        if (!this.revealed) {
            if (this.flagged) {
                return "\u2691";
            } else {
                return "";
            }
        } else {
            this.className = "tile-revealed";
            if (this.bombed) {
                return '💣';
            } else {
                return this.adjBombs.toString();
            }
        }
    }


    handleClick(tile, flagged) {
        //debugger
        this.update(tile, flagged);
    }

    render() {
        // debugger
        return(
            <div onAuxClick={() => this.handleClick(this.props.tile, false)} onClick={() => this.handleClick(this.props.tile, true) } 
                 className={this.className}>{this.myFace()}</div>
        );
    }
}

export default ReactTile;


// ⚐	white flag	023220	9872	0x2690	&#9872;
// ⚑	black flag	023221	9873	0x2691	&#9873;
// bomb - &#x1f4a3;