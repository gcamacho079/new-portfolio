import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lupe Camacho | Portfolio</title>
        <html lang="en" />
      </Helmet>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
}
