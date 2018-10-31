import React, {Component} from 'react'
import ChampionAction from './championAction';

class MostDeathToChampions extends Component{

    constructor(){
        super();
        this.state = {
            championDeath: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/rankedgg/getChampionDeath/papay')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({championDeath: data});
        })
    }

    render(){
       return (<ChampionAction dataChampions={this.state.championDeath} />)
    }
}

export default MostDeathToChampions;
