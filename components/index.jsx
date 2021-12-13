import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";

const Main = () => {
    return (
        <div className="main">
            <Game />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Main />, root)
})