import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTES from './configs/routes';

import Home from './pages/Home/Home';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.ROOT} component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
