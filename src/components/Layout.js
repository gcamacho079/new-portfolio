import React from 'react';
import 'normalize.css';
import '../assets/styles/styles.scss';
import '@fontsource/ibm-plex-sans';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
