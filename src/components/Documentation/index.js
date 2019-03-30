import React, { Component } from 'react'
import GettingStarted from '../views/GettingStarted.js';
import Expedition from '../views/Expedition.js';
import Data from '../views/Data.js';
import Reminders from '../views/Reminders.js';

import {
  Switch,
  Route,
} from 'react-router-dom';


import './index.scss';

export class Documentation extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="documentation-comp">
        <div className="documentation-content">
          <Switch>
            <Route path="/documentation/gettingstarted"
              component={GettingStarted} />
            <Route path="/documentation/expedition"
              component={Expedition} />
            <Route path="/documentation/reminders" 
              component={Reminders} />
            <Route path="/documentation/data"
              component={Data} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Documentation
