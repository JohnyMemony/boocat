import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RootLayout from './components/layout/RootLayout/RootLayout';
import {ROUTES} from './configs/routes';

import Home from './pages/Home/Home';
import Post from './pages/Post/Post';

const AppRouter = () => (
  <Router>
    <RootLayout>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Home}/>
        <Route path={ROUTES.POST} component={Post}/>
      </Switch>
    </RootLayout>
  </Router>
);

export default AppRouter;
