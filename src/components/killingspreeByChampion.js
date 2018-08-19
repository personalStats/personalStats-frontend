import React, {Component} from 'react';
import PropTypes from 'prop-types';

class KillingspreeByChampion extends React.Component{
    render(){
        return (
            <table class="ui sortable celled table">
                <thead>
                    <tr>
                        <th>Champion</th>
                        <th class="sorted ascending">Games</th>
                        <th>Kills</th>
                        <th>Double Kills</th>
                        <th>Triple Kills</th>
                        <th>Quadra Kills</th>
                        <th>Penta Kills</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.dataChampions.map(data => {
                    return (<tr>
                                <td><img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.champion.deChampion}.png`} with="35px" height="35px" alt=""/>
                                    &nbsp;
                                    {data.champion.deChampion}
                                </td>
                                <td>{data.nuGames}</td>
                                <td>{data.nuKills}</td>
                                <td>{data.nuDoubleKills}</td>
                                <td>{data.nuTripleKills}</td>
                                <td>{data.nuQuadraKills}</td>
                                <td>{data.nuPentaKills}</td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
        )}
}

KillingspreeByChampion.propTypes = {
    dataChampions: PropTypes.object.isRequired
};

export default KillingspreeByChampion;