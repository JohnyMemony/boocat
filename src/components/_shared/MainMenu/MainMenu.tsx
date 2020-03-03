import * as React from 'react';
import Link from '../Link/Link';
import {ROUTES} from '../../../configs/routes';

import './MainMenu.scss';

export default function MainMenu() {
  return (
    <nav>
      <ul className="main-menu">
        <li>
          <Link url={ROUTES.ROOT}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}
