import React from "react";

class Board extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        const board = props.board;
        const update = props.update;
        this.state = {board, update};
    }

    render(){
        return(
            <div>
                MORE TEST TEXT
            </div>
        )
    }
}

export default Board;