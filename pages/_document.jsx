import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ABOUT_DESCRIPTION } from '../utils/about';

class MyDocument extends Document {
  static getInitialProps(props) {
    const { renderPage, isServer = false } = props;

    const { html, head, errorHtml, chunks } = renderPage();
    return {
      html,
      head,
      errorHtml,
      chunks,
      isServer
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <link
            rel="dns-prefetch"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
            integrity="sha256-PHcOkPmOshsMBC+vtJdVr5Mwb7r0LkSVJPlPrp/IMpU="
            crossOrigin="anonymous"
          />
          <meta name="description" content={ABOUT_DESCRIPTION} />
          <meta
            name="keywords"
            content="website for my business, web developer, web designer, UI, UX, SEO, webpage creator"
          />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#1c1c1c" />
          <meta name="apple-mobile-web-app-title" content="sDaniel" />
          <meta name="application-name" content="sDaniel" />
          <meta name="msapplication-TileColor" content="#1c1c1c" />
          <meta name="theme-color" content="#1c1c1c" />
        </Head>
        <body className="font-body sm:overflow-y-visible">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
