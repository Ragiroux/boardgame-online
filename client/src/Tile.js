import React from "react";
import './styles/tile.scss'

class Tile extends React.Component {


    render() {
        return <div class="tile">
                {this.props.type}
            </div>
    }
}

export default Tile;