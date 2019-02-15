import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Commands from './components/Commands/index.jsx';
import GettingStarted from './components/views/GettingStarted.jsx';
import Expedition from './components/views/Expedition.jsx';
import Forge from './components/views/Forge.jsx';

const Routes = (props) => {
  const {
    match,
  } = props;
  console.log(props);
  return (
    < Switch >
      <Route component={App} exact path={match.url} />
      <Route component={Commands} exact path={`${match.url}commands`} />
      <Route component={GettingStarted} path={`${match.url}gettingstarted`} />
      <Route component={Expedition} path={`${match.url}expedition`} />
      <Route component={Forge} path={`${match.url}forge`} />
    </Switch >
  )
}

export default Routes