import React, {Component} from 'react';

class HeaderStatistics extends Component{

    render(){
        return (
            <div className="row tile_count">
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-clock-o"></i> Jogos analisados:</span>
              <div className="count">{this.props.profileDetails.nuGames}</div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Total Kills</span>
              <div className="count">{this.props.profileDetails.nuKills}</div>
              <span className="count_bottom"><i className="green">{this.props.profileDetails.nuKills / this.props.profileDetails.nuGames} </i> Média pro jogo</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Total Deaths</span>
              <div className="count green">{this.props.profileDetails.nuDeaths}</div>
              <span className="count_bottom"><i className="green">{this.props.profileDetails.nuDeaths / this.props.profileDetails.nuGames} </i> Média pro jogo</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Total Assists</span>
              <div className="count">{this.props.profileDetails.nuAssists}</div>
              <span className="count_bottom"><i className="green">{this.props.profileDetails.nuAssists / this.props.profileDetails.nuGames} </i> Média pro jogo</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Total Collections</span>
              <div className="count">2,315</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Penta kills</span>
              <div className="count">{this.props.profileDetails.nuPentaKills}</div>
            </div>
          </div>
        )
    }
}

export default HeaderStatistics;