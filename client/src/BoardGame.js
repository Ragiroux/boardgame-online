import React from "react";
import Tile from "./Tile";
import "./styles/boardgame.scss";

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

        for ( let i = 0; i < this.NUM_TILES; i++) {
            board.push({
                //todo: define state of each tiles
                "type": "mountain"
            });
        }
        return board;
    }

    render() {
        return <div id="grid" class="clear">
            <ul class="hexagon-grid-container">
                    {this.board.map((tile) => 
                    <li class="hexagon"><Tile type={tile.type}/></li>
                    )}
            </ul>
            
        </div>
        /*return <div class="board-game">
            {this.board.map((tile) => 
                    <Tile type={tile.type}/>
            )}
        </div>*/
    }
}

export default BoardGame;