import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import KillingspreeByChampion from './killingspreeByChampion';

class Menu extends Component{

    render(){
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <ul className="nav side-menu">
                <li><a><i className="fa fa-edit"></i> Estatisticas: <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu" style={{display: "block"}}>
                      <li><Link to="/mostKilledChampions">Champions mais matados </Link></li>
                      <li><Link to="/mostDeathToChampions">Champons que mais te matou </Link></li>
                      <li><Link to="/killingspreeByChampion">Killingspree by Champion </Link></li>
                      <li><Link to="/dragonStatistics">Dragon Statistics </Link></li>
                      <li><Link to="/dmgPerResource">Maior média de dano por recurso </Link></li>
                      <li><Link to="/dmgPerTime">Maior média de dano por segundo </Link></li>
                      <li><Link to="/DmgDealtPerMatch">Maiores danos por partida</Link></li>
                      <li><Link to="/bestCriticalStrike">Maiores danos críticos por partida</Link></li>
                      <li><Link to="/longerMatchs">Partidas mais longas</Link></li>
                      <li><Link to="/fasterMatchs">Partidas mais rápidas</Link></li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        )
    }

}

export default Menu;