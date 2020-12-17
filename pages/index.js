import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FullLoader from "../components/full_loader";
import Landing from "../sections/Landing";
import AboutSection from "../sections/AboutSection";
import FeaturedSection from "../sections/FeaturedSection";
import WorkSection from "../sections/WorkSection";
import FooterSection from "../sections/FooterSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge;" />
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

        <title>Mark The Dev</title>
        <meta property="og:type" content="Portfolio for Mark the Dev." />
        <meta property="og:title" content="Mark The Dev - The Portfolio" />
        <meta property="og:url" content="https://www.mark-atienza.com/" />
        <meta
          property="og:description"
          content="Portfolio for sample projects and more details."
        />

        <meta property="og:image" content="/web.png" />
      </Head>
      {loading ? (
        <FullLoader />
      ) : (
        <>
          <Header />
          <Landing />
          <AboutSection />
          <FeaturedSection />
          <WorkSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}
