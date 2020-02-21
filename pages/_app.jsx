import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '../styles/main.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>
            Web Designer & Developer | UI & UX Engineer | Web Services -
            sdaniel.me
          </title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
