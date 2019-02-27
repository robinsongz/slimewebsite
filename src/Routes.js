import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Documentation from './components/Documentation/index.jsx';

const Routes = ({ pathPrefix }) => {
  return (
    <Switch>
      <Route component={App} exact path={pathPrefix} />
      <Route path={`${pathPrefix}/documentation`} render={({ match }) => (
        <Documentation pathPrefix={match.url} />
      )} />
    </Switch >
  )
}

export default Routes