import React, {Component} from 'react';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';

class LongerMatchs extends Component {

    constructor(){
        super();
        this.state = {
            longerMatchs: []   
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/longerMatchs/Papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({longerMatchs: data});
        })
    }

    render(){
        return (
            <div className="x_content">
                <table className="ui celled table" id="crititalStrikes">
                    <thead>
                        <tr><th with="3%">Champion</th>
                            <th with="30%"></th>
                            <th with="20%">Data da partida</th>
                            <th with="20%">Tempo de partida</th>
                            <th with="20%">Venceu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.longerMatchs.map(data => {
                        return (<tr key={data.nuGameId}> 
                                    <td>
                                    {data.champion != null ? <div>
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.champion.deChampion}.png`} with="35px" height="35px" alt=""/>
                                        </div>
                                        : ""
                                    }
                                    </td>
                                    <td> {data.champion != null ? data.champion.deChampion : ""}</td>
                                    <td><Moment format="DD/MM/YYYY">
                                        {data.dtMatch}
                                    </Moment>
                                    </td>
                                    <td><NumberFormat value={data.nuGameLength / 60} displayType={'text'} format="####"/> min</td>
                                    <td>{data.isWin ? "Sim" : "Não"}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default LongerMatchs;