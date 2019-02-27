import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Documentation from './components/Documentation/index.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route path="/documentation" render={({ match }) => (
        <Documentation pathPrefix={match.url} />
      )} />
    </Switch >
  )
}

export default Routes