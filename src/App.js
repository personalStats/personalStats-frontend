import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import HeaderStatistics from './components/headerStatistics';
import GridDetail from './components/gridDetail';
import GridRow from './components/gridRow';
import Profile from './components/profile';
import NavTop from './components/navTop';

import '../node_modules/flag-icon-css/css/flag-icon.min.css';

class App extends Component {
  render() {
    return (
      <div class="container body">
        <div class="main_container">
          <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
              <div class="navbar nav_title" style={{margin: 0}}>
                <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Personal Stats!</span></a>
              </div>
  
              <div class="clearfix"></div>

              <Profile />
  
              <br />
      
              <Menu />
  
              <div class="sidebar-footer hidden-small">
              </div>
            </div>
          </div>

          <NavTop />
  
          <div class="right_col" role="main">
            <HeaderStatistics />
  
            <GridRow>
              <GridDetail colunaMobile={12} colunaComputador={6} colunaTitle="App Versions">            
                  <div class="x_content">
                    <h4>App Usage across versions</h4>
                    <div class="widget_summary">
                    <div class="w_left w_25">
                        <span>0.1.5.2</span>
                    </div>
                    <div class="w_center w_55">
                        <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '66%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                        </div>
                    </div>
                    <div class="w_right w_20">
                        <span>123k</span>
                    </div>
                    <div class="clearfix"></div>
                    </div>

                    <div class="widget_summary">
                    <div class="w_left w_25">
                        <span>0.1.5.3</span>
                    </div>
                    <div class="w_center w_55">
                        <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                        </div>
                    </div>
                    <div class="w_right w_20">
                        <span>53k</span>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <div class="widget_summary">
                    <div class="w_left w_25">
                        <span>0.1.5.4</span>
                    </div>
                    <div class="w_center w_55">
                        <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                        </div>
                    </div>
                    <div class="w_right w_20">
                        <span>23k</span>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <div class="widget_summary">
                    <div class="w_left w_25">
                        <span>0.1.5.5</span>
                    </div>
                    <div class="w_center w_55">
                        <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '5%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                        </div>
                    </div>
                    <div class="w_right w_20">
                        <span>3k</span>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    <div class="widget_summary">
                    <div class="w_left w_25">
                        <span>0.1.5.6</span>
                    </div>
                    <div class="w_center w_55">
                        <div class="progress">
                        <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '2%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                        </div>
                    </div>
                    <div class="w_right w_20">
                        <span>1k</span>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                </div>
              </GridDetail>
  
              <GridDetail colunaComputador={6} colunaMobile={12} colunaTitle="Device Usage">
                <div class="x_content">
                  <table class="" style={{width:'100%'}}>
                    <tr>
                      <th style={{width:'37%'}}>
                        <p>Top 5</p>
                      </th>
                      <th>
                        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                          <p class="">Device</p>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                          <p class="">Progress</p>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <canvas class="canvasDoughnut" height="140" width="140" style={{margin: '15px 10px 10px 0'}}></canvas>
                      </td>
                      <td>
                        <table class="tile_info">
                          <tr>
                            <td>
                              <p><i class="fa fa-square blue"></i>IOS </p>
                            </td>
                            <td>30%</td>
                          </tr>
                          <tr>
                            <td>
                              <p><i class="fa fa-square green"></i>Android </p>
                            </td>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <td>
                              <p><i class="fa fa-square purple"></i>Blackberry </p>
                            </td>
                            <td>20%</td>
                          </tr>
                          <tr>
                            <td>
                              <p><i class="fa fa-square aero"></i>Symbian </p>
                            </td>
                            <td>15%</td>
                          </tr>
                          <tr>
                            <td>
                              <p><i class="fa fa-square red"></i>Others </p>
                            </td>
                            <td>30%</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </GridDetail>
            </GridRow>
          </div>

          <Footer />
       
        </div>
      </div>
    );
  }
}

export default App;
