import * as React from 'react';
import Link from '../../_shared/Link/Link';
import {Col, Grid, Row} from '../../_shared/Grid/Grid';
import {ROUTES} from '../../../configs/routes';
import MainMenu from '../../_shared/MainMenu/MainMenu';

import './Header.scss';

export default function Header() {
  return (
    <header className="bc-header">
      <div className="container">
        <Grid>
          <Row verticalAlign="middle">
            <Col lg="8">
              <Link url={ROUTES.ROOT} className="bc-header__logo"/>
            </Col>
            <Col lg="8">
              <MainMenu />
            </Col>
          </Row>
        </Grid>
      </div>
    </header>
  );
}
