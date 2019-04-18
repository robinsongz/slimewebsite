import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Expedition from './components/views/Expedition';
import Data from './components/views/Data';
import GettingStarted from './components/views/GettingStarted';
import Reminders from './components/views/Reminders';

const Routes = () => {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route path="/expedition" component={Expedition} />
      <Route path='/data' component={Data} />
      <Route path='/gettingstarted' component={GettingStarted} />
      <Route path='/reminders' component={Reminders} />
    </Switch >
  )
}

export default Routes