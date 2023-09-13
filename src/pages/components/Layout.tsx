
import Footer from "../component/Footer";
import React, { ReactNode } from 'react';
import Header from './components/Header';
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>
       <Header />
        <br /><br />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
