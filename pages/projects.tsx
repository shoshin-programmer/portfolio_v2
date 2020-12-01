import Head from "next/head";
import Header from "../components/Header";

const Projects: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>The Library</title>
      </Head>
      <Header />
      <div
        id="project-section"
        className="hero parallax-img"
      >
        <div className="hero-body">
          <div className="content u-text-left p-3">
            <h1 className="headline-5 mt-5 text-gray-400">THE LIBRARY</h1>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
        </div>
        <div className="transition "></div>
      </div>
    </>
  );
};

export default Projects;

function Tile() {
  return (
    <div className="row">
      <div className="col-md-12 bg-black mt-5">
        <div className="tile u-items-center white p-2 u-text-left">
          <div className="tile__container u-text-ellipsis">
            <p className="tile__title m-0 u-text-ellipsis">Portfolio Website</p>
            <p className="tile__subtitle m-0 u-text-ellipsis">
              Website created for ...'
            </p>
            <span className="info">2020</span>
          </div>
          <div className="tile__buttons">
            <button className="btn-dark btn-small uppercase">Github</button>
            <button className="btn-dark btn-small uppercase">Page</button>
            <button className="btn-dark btn-small uppercase">README</button>
          </div>
        </div>
      </div>
    </div>
  );
}
