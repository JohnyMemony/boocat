import * as React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  describe('Header initial', () => {
    const HeaderComponent = renderer
      .create(
        <Router>
          <Header/>
        </Router>
      )
      .toJSON();

    it('RendersProperly', () => {
      expect(HeaderComponent).toMatchSnapshot();
    });
  });
});
