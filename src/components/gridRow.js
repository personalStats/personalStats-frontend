import React, {Component} from 'react';

class GridRow extends Component{
    render(){
        return (
            <div class="row">
                {this.props.children}
            </div>
        )
    }
}

export default GridRow;