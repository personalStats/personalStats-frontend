import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChampionAction extends React.Component{

    render(){
        return (
            <div className="x_content">
            <table className="ui celled table" id="championAction">
                <thead>
                    <tr><th with="20%">Champion</th>
                        <th with="60%"></th>
                        <th with="20%">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataChampions.map(data => {
                    return (<tr > 
                                <td>
                                {data.champion != null ? <div>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.champion.deChampion}.png`} with="35px" height="35px" alt=""/>
                                    </div>
                                    : ""
                                }
                                </td>
                                <td> {data.champion != null ? data.champion.deChampion : ""}</td>
                                <td>{data.nuKills}</td>
                            </tr>
                         )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}

export default ChampionAction;

ChampionAction.propTypes = {
    dataChampions: PropTypes.object.isRequired
};