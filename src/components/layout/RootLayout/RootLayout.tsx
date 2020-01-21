import * as React from 'react';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const {children} = props;

  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
}
