import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import project_list from "../data/project_list";

const Projects: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>The Library</title>
      </Head>
      <Header />
      <div
        id="project-section"
        className={`hero parallax-img ${
          project_list.length < 4 ? "fullscreen" : ""
        }`}
      >
        <div className="hero-body">
          <div className="content u-text-left p-3">
            <h1 className="headline-5 mt-5 text-gray-400">THE LIBRARY</h1>
            {project_list.map((item, idx) => (
              <Tile key={idx} item={item} />
            ))}
          </div>
        </div>
        <div className="transition "></div>
      </div>
    </>
  );
};

export default Projects;

function Tile({ item }) {
  return (
    <div className="row">
      <div className="col-md-12 bg-black mt-5">
        <div className="tile white p-2 library-tiles">
          <div className="tile__container">
            <p className="tile__title m-0 u-text-ellipsis">{item.title}</p>
            <p className="tile__subtitle m-0">{item.subtitle}</p>
            <span className="info">{item.year}</span>
          </div>
          <div className="tile__buttons p-2">
            <div className="btn-group">
              {item.links.map((link, idx) => (
                <Link href={link.url} key={idx}>
                  <a className="btn btn-dark btn-small uppercase">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}