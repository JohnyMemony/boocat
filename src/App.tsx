import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import {store} from './store';

import './assets/styles/main.scss';

declare var document: Document;

ReactDom.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root'),
);
