import * as React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './RootLayout.scss';

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <div className="bc-page">
        <Header/>
        {children}
      </div>
      <Footer/>
    </>
  );
}
