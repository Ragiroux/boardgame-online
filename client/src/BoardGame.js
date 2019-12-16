import React from "react";
import Tile from "./Tile";

class BoardGame extends React.Component {
    NUM_ROWS = 7;
    NUM_COL = 5;    
    NUM_TILES = this.NUM_ROWS * this.NUM_COL;

    render() {
        return <div>board game with many tiles
            <Tile/>
        </div>
    }
}

export default BoardGame;