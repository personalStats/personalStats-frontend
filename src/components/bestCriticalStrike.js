import React, {Component} from 'react';
import Moment from 'react-moment';

class BestCriticalStrike extends Component {

    constructor(){
        super();
        this.state = {
            bestCriticalStrikes: []   
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/bestCriticalStrikes/Papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({bestCriticalStrikes: data});
        })
    }

    render(){
        return (
            <div className="x_content">
                <h4>Nem todos os jogos tem um dano crítico. Consideramos apenas os jogos que tiveram um.</h4>
                <table className="ui celled table" id="crititalStrikes">
                    <thead>
                        <tr><th with="3%">Champion</th>
                            <th with="30%"></th>
                            <th with="20%">Data da partida</th>
                            <th with="20%">Critico</th>
                            <th with="20%">Venceu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bestCriticalStrikes.map(data => {
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
                                    <td>{data.nuCriticalStrike}</td>
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

export default BestCriticalStrike;