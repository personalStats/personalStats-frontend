import React, {Component} from 'react'
import ChampionAction from './championAction';

class MostKilledChampions extends Component{

    constructor(){
        super();
        this.state = {
            championKills: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/getChampionKill/papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({championKills: data});
        })
    }

    render(){
       return (<ChampionAction dataChampions={this.state.championKills} />)
    }
}

export default MostKilledChampions;