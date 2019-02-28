import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Documentation from './components/Documentation/index.js';

const Routes = () => {
  return (
    <Switch>
      <Route component={App} exact path="/" />
      <Route path="/documentation" component={Documentation} />
    </Switch >
  )
}

export default Routes