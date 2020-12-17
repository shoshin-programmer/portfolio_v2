import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "../styles/globals.css"
import "cirrus-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge;" />
        <meta property="og:image" content="/web.png" key="ogimage" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
