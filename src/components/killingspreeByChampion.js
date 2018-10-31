import React, {Component} from 'react';
import PropTypes from 'prop-types';

class KillingspreeByChampion extends React.Component{

    constructor(){
        super();
        this.state = {
            championSpree: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/getKillingspreePerChampionByProfile/papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({championSpree: data});
        })
    }

    render(){
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                    <div className="x_content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Champion</th>
                                    <th className="sorted ascending">Games</th>
                                    <th>Kills</th>
                                    <th>Double Kills</th>
                                    <th>Triple Kills</th>
                                    <th>Quadra Kills</th>
                                    <th>Penta Kills</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.championSpree.map(data => {
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
                    </div>
                </div>
            </div>
        )}
}

KillingspreeByChampion.propTypes = {
    dataChampions: PropTypes.object.isRequired
};

export default KillingspreeByChampion;