import React, {Component} from 'react';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';

class DmgPerResource extends Component {

    constructor(){
        super();
        this.state = {
            avgDamageByResource: []   
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/dmgPerResource/Papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({avgDamageByResource: data});
        })
    }

    render(){
        return (
            <div className="x_content">
                <table className="ui celled table" id="avgDamageByResource">
                    <thead>
                        <tr><th with="3%">Champion</th>
                            <th with="30%"></th>
                            <th with="20%">Data da partida</th>
                            <th with="20%">Dano por gold recebido</th>
                            <th with="20%">Dano total da partida</th>
                            <th with="20%">Gold total da partida</th>
                            <th with="20%">Venceu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.avgDamageByResource.map(data => {
                        return (<tr > 
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
                                    <td><NumberFormat value={data.nuDmgPerGold} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} format="####"/></td>
                                    <td><NumberFormat value={data.nuDmgDealt} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/></td>
                                    <td>{data.nuGoldEarned}</td>
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

export default DmgPerResource;