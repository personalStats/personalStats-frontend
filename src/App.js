import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import HeaderStatistics from './components/headerStatistics';
import GridDetail from './components/gridDetail';
import GridRow from './components/gridRow';
import Profile from './components/profile';
import NavTop from './components/navTop';
import ChampionAction from './components/championAction';
import KillingspreeByChampion from './components/killingspreeByChampion';

class App extends Component {

  constructor(){
    super();
    this.state = {
      profileDetails: [],
      championKills: [],
      championDeaths: [],
      championSpree: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/rankedgg/getHeaderStatistics/papay')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({profileDetails: data});
      })

      fetch('http://localhost:8080/rankedgg/getChampionKill/papay')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({championKills: data});
      })

      fetch('http://localhost:8080/rankedgg/getChampionDeath/papay')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({championDeaths: data});
      })

      fetch('http://localhost:8080/rankedgg/getKillingspreePerChampionByProfile/papay')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({championSpree: data});
      })
  }



  render() {
    return (
      <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <div className="navbar nav_title" style={{margin: 0}}>
                <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Personal Stats!</span></a>
              </div>
  
              <div className="clearfix"></div>

              <Profile />
  
              <br />
      
              <Menu />
  
              <div className="sidebar-footer hidden-small">
              </div>
            </div>
          </div>

          <NavTop />
  
          <div className="right_col" role="main">
            <HeaderStatistics profileDetails={this.state.profileDetails} />
  
            <GridRow>
              <GridDetail colunaMobile={12} colunaComputador={6} colunaTitle="Top 5 most killed champions">            
                  <ChampionAction dataChampions={this.state.championKills} />
              </GridDetail>
  
              <GridDetail colunaComputador={6} colunaMobile={12} colunaTitle="Top 5 most deaths by champions">
                  <ChampionAction dataChampions={this.state.championDeaths} />
              </GridDetail>
            </GridRow>

            <KillingspreeByChampion dataChampions={this.state.championSpree}/>
            
          </div>

          <Footer />
       
        </div>
      </div>
    );
  }
}

export default App;
