import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Footer from './components/Footer/index';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const Root = () => (
  <Router basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)}>
    <div className="app-wrapper">
      <Navbar />
      <div className="app-content">
        <Switch>
          <Route path="/" render={({ match }) => (
            <Routes pathPrefix={match.url} />
          )} />
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
