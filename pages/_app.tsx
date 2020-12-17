import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "cirrus-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
