import * as React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../configs/routes';

import './Header.scss';

export default function Header() {
  return (
    <header className="bc-header">
      <Link to={ROUTES.ROOT} className="bc-header__logo"/>
    </header>
  );
}
