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
        <title>Portfolio by Mark the Dev</title>
        <meta property="og:type" content="Portfolio for Mark the Dev." />
        <meta property="og:title" content="Mark The Dev - The Portfolio" />
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
