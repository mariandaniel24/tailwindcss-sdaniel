import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

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
      <html lang="en">
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

          <meta name="description" content="" />
          <meta
            name="keywords"
            content="website for my business, web developer, web designer, UI, UX, SEO, webpage creator"
          />
        </Head>
        <body className="font-body sm:overflow-y-visible">
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
