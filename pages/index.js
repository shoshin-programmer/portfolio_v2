import Head from "next/head";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark The Dev</title>
      </Head>
      <Header />
    </div>
  );
}
