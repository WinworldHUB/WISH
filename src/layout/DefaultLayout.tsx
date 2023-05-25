import React, { ReactNode } from 'react';
import Header from './Header';

export interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
