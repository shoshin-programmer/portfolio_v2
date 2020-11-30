import featured from "./FeaturedProjects";
import Fade from "react-reveal/Fade";

const FeaturedSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <section className="pt-12" id="project-section">
      <div className="hero">
        <Fade bottom cascade duration={2000}>
          <div className="content">
            <div className="u-text-center content">
              <h2 className="uppercase p-2 text-gray-600">Projects</h2>
              <p className="text-secondary white">
                Some projects that I have worked on.
              </p>
            </div>
            <div className="row">
              <div className="row fluid-container">
                {featured.map((item, idx) => {
                  return (
                    <div className="col-12" key={idx}>
                      <div className="card bg-black">
                        <div className="card-container">
                          <div
                            className="card-image project-img"
                            style={{
                              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${item.img}")`,
                            }}
                          ></div>
                          <div className="title-container">
                            <p className="title">{item.title}</p>
                            <span className="subtitle">{item.subtitle}</span>
                          </div>
                        </div>
                        <div className="content text-gray-300">
                          <p>{item.intro}</p>
                        </div>
                        <div className="u-text-center">
                          <div className="btn-group btn-group p-2">
                            {item.github__link ? (
                              <a
                                href={item.github__link}
                                className="btn btn-dark btn-xsmall"
                                rel="noreferrer"
                                target="_blank"
                              >
                                GITHUB
                              </a>
                            ) : (
                              ""
                            )}
                            {item.page__link ? (
                              <a
                                href={item.page__link}
                                className="btn btn-dark btn-xsmall"
                                rel="noreferrer"
                                target="_blank"
                              >
                                PAGE
                              </a>
                            ) : (
                              ""
                            )}

                            {item.post__link ? (
                              <a
                                href={item.post__link}
                                className="btn btn-dark btn-xsmall"
                                target="_blank"
                              >
                                Post
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space" />
            <h4 className="uppercase p-2 text-gray-400 u-text-center">
              More will be uploaded soon...
            </h4>
            <div className="divider"></div>
            <div className="space" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FeaturedSection;
