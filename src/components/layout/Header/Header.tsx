import * as React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../configs/routes';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to={ROUTES.ROOT} className="header__logo"/>
    </header>
  );
}
