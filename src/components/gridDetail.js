import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GridDetail extends Component{
    render(){
        return (
            <div class={`col-md-${this.props.colunaComputador} col-sm-${this.props.colunaComputador} col-xs-${this.props.colunaMobile}`}>
                <div class="x_panel tile fixed_height_320">
                    <div class="x_title">
                        <h2>{this.props.colunaTitle}</h2>
                        <div class="clearfix"></div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default GridDetail;

GridDetail.propTypes = {
    colunaComputador: PropTypes.number.isRequired,
    colunaMobile: PropTypes.number.isRequired,
    colunaTitle: PropTypes.string.isRequired
};