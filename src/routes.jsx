import React from 'react'
import {Route,Switch} from 'react-router-dom'
import KillingspreeByChampion from './components/killingspreeByChampion';
import DragonStatistics from './components/dragonStatistics';
import MostKilledChampions from './components/mostKilledChampions';
import MostDeathToChampions from './components/mostDeathToChampions';
import DmgPerResource from './components/dmgPerResource';
import DmgPerTime from './components/dmgPerTime';
import BestCriticalStrike from './components/bestCriticalStrike';
import DmgDealtPerMatch from './components/dmgDealtPerMatch';
import LongerMatchs from './components/gamesPerTime/longerMatchs';
import FasterMatchs from './components/gamesPerTime/fasterMatchs';

export  default props => (
    <Switch>
       <Route path='/mostKilledChampions' component={MostKilledChampions}/>
       <Route path='/mostDeathToChampions' component={MostDeathToChampions}/>
       <Route path='/killingspreeByChampion' component={KillingspreeByChampion}/>
       <Route path='/dragonStatistics' component={DragonStatistics}/>
       <Route path='/dmgPerResource' component={DmgPerResource}/>
       <Route path='/dmgPerTime' component={DmgPerTime} />
       <Route path='/dmgDealtPerMatch' component={DmgDealtPerMatch} />
       <Route path='/bestCriticalStrike' component={BestCriticalStrike} />
       <Route path="/longerMatchs" component={LongerMatchs} />
       <Route path="/fasterMatchs" component={FasterMatchs} />
    </Switch>
)