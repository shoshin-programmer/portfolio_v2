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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge;" />
        <meta property="og:type" content="Portfolio for Mark the Dev." />
        <meta property="og:title" content="Mark The Dev - The Portfolio" />
        <meta property="og:url" content="https://www.mark-atienza.com/" />
        <meta property="og:image" content="/web.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        <meta
          property="og:description"
          content="Portfolio for sample projects and more details."
        />
      </Head>
      <Header />
      <div id="blog-bg" className="hero parallax-img">
        <div className="full-height w-100">
          <div className="hero-body u-flex u-flex-column u-justify-center fullscreen">
            <div>
              <h1 className="headline-3 white">BLOG</h1>
              <h4 className="white bg-black p-1 u-text-center">mark the dev</h4>
            </div>
          </div>
          <div className="blog-list">
            <div className="row">
              {blog_data.map((item) => {
                return (
                  <Link href={`/blog/${item.id}`}>
                    <div className={`col-lg-${item.col_length} blog-card`}>
                      <div className="card bg-black text-light">
                        <div className="card-container">
                          <div
                            className="card-image"
                            style={{
                              backgroundImage: `url(${item.img_url})`,
                            }}
                          ></div>
                        </div>
                        <div className="mobile-title bg-black">
                          <div className="content text-light">
                            <div className="tile">
                              <div className="tile__container">
                                <p className="tile__title">
                                  {item.title}
                                </p>
                                  {item.tags.map((tag) => (
                                    <small className="tile__subtitle tag ml-1">
                                      {tag}
                                    </small>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body content">
                          <p>{item.subtitle}</p>
                        </div>
                        <div className="card-footer content u-text-right">
                          {item.read_length}
                        </div>
                      </div>
                    </div>
                  </Link>
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
