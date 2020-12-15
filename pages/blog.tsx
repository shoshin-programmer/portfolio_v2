import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import project_list from "../data/project_list";
import Fade from "react-reveal/Fade";
import FooterSection from "../sections/FooterSection";
import blog_data from "../data/blog_data";

const Projects: React.FunctionComponent<{}> = (): React.ReactElement => {
  var startfade = 200;
  return (
    <>
      <Head>
        <title>Blog by Mark the Dev</title>
      </Head>
      <Header />
      <div id="blog-bg" className="hero parallax-img">
        <div className="full-height w-100">
          <div className="hero-body u-flex u-flex-column u-justify-center fullscreen">
            <div>
              <samp className="white headline-4"> THE BLOG</samp>
            </div>
            <div>
              <code style={{ fontSize: "1.5em" }} className="white bg-black">
                by mark the dev
              </code>
            </div>
          </div>
          <div className="blog-list">
            <div className="ml-5 mr-5 p-2">
              {blog_data.map((item) => {
                return (
                  <div className="row" key={item.id}>
                    <Link href="/blog">
                        <div className={`col-${item.col_length} blog-card`}>
                          <div className="card">
                            <div className="card-container">
                              <div className="card-image">
                                <img src={item.img_url} className="card-img-obj" />
                              </div>
                              <div className="title-container">
                                <p className="title">{item.title}</p>
                                <span className="subtitle">
                                  {item.subtitle}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
