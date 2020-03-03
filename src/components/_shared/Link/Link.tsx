import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom';

interface PropTypes {
  url: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Link(props: PropTypes) {
  const {children, url, className} = props;

  return (
    <RouterLink to={url} className={className}>{children}</RouterLink>
  );
}
