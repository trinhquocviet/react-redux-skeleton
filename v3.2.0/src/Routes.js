import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import withTracker from 'withTracker';
import { ROUTES } from 'common/constants/routes';
import {
  NotFound,
  Home,
} from 'pages';

const Routes = () => (
  <Switch>
    <Route path={ROUTES.HOME.URL} component={Home} />
    <Route exact path="/">
      <Redirect to={{ pathname: ROUTES.HOME.URL }} />
    </Route>
    <Route path="*" component={NotFound} />
  </Switch>
);

export default withRouter(withTracker(Routes));
