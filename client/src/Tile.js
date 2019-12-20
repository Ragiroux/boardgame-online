import React from "react";
import './styles/tile.scss'

class Tile extends React.Component {


    render() {
        return <div class="hexagon-inner"> 
                        <div class="">
                            <p>{this.props.type}</p>
                        </div>
                    </div>
        /*return <div class="tile">
                {this.props.type}
            </div>*/
    }
}

export default Tile;