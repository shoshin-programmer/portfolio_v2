import Head from "next/head";
import Header from "../components/Header.tsx";
import Landing from "../sections/Landing.tsx";
import FeaturedSection from "../sections/FeaturedSection.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark The Dev</title>
      </Head>
      <Header />
      <Landing />
      <FeaturedSection />
    </div>
  );
}
