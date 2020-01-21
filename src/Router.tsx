import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RootLayout from './components/layout/RootLayout/RootLayout';
import {ROUTES} from './configs/routes';

import Home from './pages/Home/Home';

const AppRouter = () => (
  <Router>
    <RootLayout>
      <Switch>
        <Route path={ROUTES.ROOT} component={Home}/>
      </Switch>
    </RootLayout>
  </Router>
);

export default AppRouter;
