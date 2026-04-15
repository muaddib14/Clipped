import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </Head>
      <body className="bg-dark text-cream">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
