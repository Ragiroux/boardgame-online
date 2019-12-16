import React from "react";
import Tile from "./Tile";

class BoardGame extends React.Component {
    NUM_ROWS = 7;
    NUM_COL = 5;    
    NUM_TILES = this.NUM_ROWS * this.NUM_COL;
    board = [];

    constructor() {
        super();
        this.board = this.initBoard();
    }

    initBoard() {
        let board = [];

        for ( let i = 0; i < this.NUM_ROWS * this.NUM_COL; i++) {
            board.push({});
        }
        return board;
    }

    render() {
        
        return <div>
            {this.board.map((tile) => 
                <ul>
                    <Tile/>
                </ul>
            )}
        </div>
    }
}

export default BoardGame;