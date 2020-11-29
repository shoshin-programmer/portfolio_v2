import Head from "next/head";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark The Dev</title>
      </Head>
      <Header />
      <section id="landing">
        <div id="landing-img" className="hero fullscreen hero-img parallax-img">
          <div className="hero-body">
            <div className="content">
              <h1 className="headline-3 white">Mark Atienza</h1>
              <div className="row">
                <div className="col-8">
                  <h5 className="text-gray-300 sub-title font-alt font-normal">
                    I am <b className="white">fullstack web developer </b>
                    that creates <b className="white">engaging </b>and
                    <b className="white"> user-centric </b>
                    web applications.
                  </h5>
                </div>
              </div>
              <p className="white">
                <b>Country:</b> Philippines
              </p>
              <div className="btn-group">
                <button className="btn-light outline">Contact</button>
              </div>
            </div>
          </div>
          <div className="transition "></div>
        </div>
      </section>
    </div>
  );
}
