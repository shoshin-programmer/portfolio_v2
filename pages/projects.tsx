import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import project_list from "../data/project_list";
import Fade from "react-reveal/Fade";
import FooterSection from "../sections/FooterSection";

const Projects: React.FunctionComponent<{}> = (): React.ReactElement => {
  var startfade = 200;
  return (
    <>
      <Head>
        <title>The Library</title>
      </Head>
      <Header />
      <div id="project-section" className="hero parallax-img full-height">
        <div className="hero-body">
          <div className="content u-text-left p-3 content-sm">
            <h1 className="headline-5 mt-5 text-gray-400">THE LIBRARY</h1>
            {project_list.map((item, idx) => (
              <Fade key={idx} delay={startfade + idx * 300} bottom>
                <Tile item={item} />
              </Fade>
            ))}
          </div>
        </div>
        <div className="transition "></div>
      </div>
      <FooterSection />
    </>
  );
};

export default Projects;

function Tile({ item }) {
  return (
    <div className="row">
      <div className="col-md-12 bg-black mt-2">
        <div className="tile white p-2 library-tiles">
          <div className="tile__container u-text-ellipsis">
            <p className="tile__title m-0 u-text-ellipsis">{item.title}</p>
            <p className="tile__subtitle m-0 u-text-ellipsis">
              {item.subtitle}
            </p>
            <span className="info">{item.year}</span>
          </div>
          <div className="tile__buttons">
            {item.links.map((link, idx) => (
              <Link href={link.url} key={idx}>
                <a
                  target="_blank"
                  className="btn btn-dark btn-xsmall uppercase"
                >
                  {link.name == "Github" ? (
                    <span className="icon">
                      <i
                        className="fab fa-wrapper fa-github"
                        aria-hidden="true"
                      ></i>
                    </span>
                  ) : (
                    <span className="icon">
                      <i
                        className="fas fa-wrapper fa-external-link-alt"
                        aria-hidden="true"
                      ></i>
                    </span>

                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
