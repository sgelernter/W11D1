import React from "react";
import ReactTile from "./tile";

class ReactBoard extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        const board = props.board;
        const update = props.update;
        this.state = {board, update};
    }

    render(){
        const grid = this.state.board.grid;
        
        const mapped = grid.map((row, idx1) => {
            return (
                <div>
                    {row.map((tile, idx2) => {
                        return <ReactTile key={[idx1, idx2]} tile={tile} />
                    })}
                    <br />
                </div>)     
        })
        
        return(
            <div>
                {mapped}
            </div>
        )
    }
}

export default ReactBoard;