import React, {Component, Suspense} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
// INIT
import feather from 'feather-icons';
import TopBar from './topbar';
// ROUTES
const Display = React.lazy(() => import('./pages/car'));

class Routes extends Component {
  componentDidMount() {
    require('../assets/js/app');
    require('./app.scss');
    feather.replace();
  }
  componentWillUnmount() {
    delete require.cache[require.resolve('../assets/js/app')];
    delete require.cache[require.resolve('./app.scss')];
  }
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <TopBar />
          <Suspense fallback={<div>Loadings...</div>}>
            <Switch>
              {/* ROUTER */}
              <Route exact path="/display" component={Display} />
              <Route exact path="/guest"> <h1>TEST GUEST ROUTES</h1> </Route>
              {/* HANDLE PAGE */}
              <Route exact path="*" component={Display} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes;
