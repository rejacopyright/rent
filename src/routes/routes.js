import React, {Component, Suspense} from 'react'
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
// Dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard/index'));
const Cars = React.lazy(() => import('../pages/cars/index'));
const Settings = React.lazy(() => import('../pages/settings/index'));
const SettingsBrand = React.lazy(() => import('../pages/settings/brand'));
// Pages
const PageNotFound = React.lazy(() => import('../layouts/pageNotFound'));

class Routes extends Component {
  componentDidMount() {
    const expired =() => {
      if (!cookie.getJSON('auth')) {
        this.props.dispatch({type:'LOGOUT'});
      }
    }
    this.unlisten = this.props.history.listen((location, action) => {
      document.querySelector('#search').value = '';
      this.props.dispatch({type:'SEARCH', value: ''});
      expired();
    });
    window.addEventListener('mouseover', expired);
    window.addEventListener('focus', expired);
  }
  componentWillUnmount() {
    this.unlisten();
    window.removeEventListener('mouseover', {});
    window.removeEventListener('focus', {});
  }
  render() {
    return (
      <Suspense fallback={<div>Loadings...</div>}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings/brand" component={SettingsBrand} />
          {/* HANDLE PAGE */}
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default connect()(withRouter(Routes));
