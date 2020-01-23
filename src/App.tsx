import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './Router';
import {store, persistor} from './store';

import './assets/styles/vendor.scss';
import './assets/styles/main.scss';

declare var document: Document;

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router/>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
