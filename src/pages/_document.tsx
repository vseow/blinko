import React from 'react';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

export default function _Document(props: DocumentProps) {
  return (
    <Html lang="en" >
      <Head>
        <link rel="icon" href={`/favicon.ico`} type="image/x-icon" />
        <meta name="application-name" content="Blinko" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Blinko" />
        <meta name="description" content="Blinko self-hosted personal note" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Blinko</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
