import React, {Component} from 'react'

class DragonStatistics extends Component{

    constructor(){
        super();
        this.state = {
            dragonDetails: []
        }
    }

    componentWillMount(){
        fetch(`http://localhost:8080/rankedgg/getDragonData/${this.props.nmProfile}`)
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({dragonDetails: data});
        })
    }

    render(){
        return (
            <div>
                Numero de jogos analisados: {this.state.dragonDetails.nuTotalGames}
                <br />
                Total de dragões abatidos: {this.state.dragonDetails.nuTotalDragons}
                <br />
                Média de dragões por jogo: {this.state.dragonDetails.nuDragonAvgPerGame}
                <br />
                Número de jogos com pelo menos 1 dragão abatido: {this.state.dragonDetails.nuGamesWithAtLeastOneDrag} ({this.state.dragonDetails.nuGamesWithMorethen2DragsPerc} % dos jogos)
                <br />
                Número de jogos com pelo menos 1 dragão abatido e com vitória: {this.state.dragonDetails.nuGamesWinWithAtLeastOneDrag} ({this.state.dragonDetails.nuGamesWinWithAtLeastOneDragPerc} % dos jogos)
                <br />
                Número de jogos com mais de 2 ou mais dragões abatidos: {this.state.dragonDetails.nuGamesWithMorethen2Drags} ({this.state.dragonDetails.nuGamesWithMorethen2DragsPerc} % dos jogos)
                <br />
                Número de jogos com mais de 2 ou mais dragões e com vitória {this.state.dragonDetails.nuGamesWithMorethen2DragsAndWin} ({this.state.dragonDetails.nuGamesWithMorethen2DragsAndWinPerc} % dos jogos)
            </div>
        )
    }
}

export default DragonStatistics;
