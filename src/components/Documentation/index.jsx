import React, { Component } from 'react'
import GettingStarted from '../views/GettingStarted.jsx';
import Expedition from '../views/Expedition.jsx';
import Forge from '../views/Forge.jsx';

import {
  Switch,
  Route,
} from 'react-router-dom';
import Sidenav from '../Sidenav/index.jsx';

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
        <div className="sidenav-wrapper">
          <Sidenav />
        </div>
        <div className="documentation-content">
          <Switch>
            <Route path="/documentation/gettingstarted"
              component={GettingStarted} />
           <Route path="/documentation/expedition"
              component={Expedition} />
           <Route path="/documentation/forge"
              component={Forge} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Documentation
