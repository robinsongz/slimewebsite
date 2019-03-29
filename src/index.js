import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faStopwatch, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons'

import * as serviceWorker from './serviceWorker';
import './index.scss';

library.add(faUsers,faStopwatch,faInfoCircle,faBars);

const Root = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app-wrapper">
      <Navbar />
      <div className="app-content">
        <Switch>
          <Route path="/" component={Routes} />
        </Switch>
      </div>

      <Footer />
    </div>
  </Router>
)



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
