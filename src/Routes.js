import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Documentation from './components/Documentation/index.jsx';

const Routes = (props) => {
  const {
    match,
  } = props;
  return (
    < Switch >
      <Route component={App} exact path={match.url} />
      <Route component={Documentation}
        pathPrefix={`${match.url}documentation`}
        path={`${match.url}documentation`} />
    </Switch >
  )
}

export default Routes