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
        <title>Mark The Dev</title>
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content="Portfolio for Mark the Dev."
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Mark The Dev - The Portfolio"
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="Portfolio for sample projects and more details."
        />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="/web.png"
        />

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
