import featured from "./FeaturedProjects";

const FeaturedSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <section className="pt-12" id="project-section">
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
                <div className="col-4" key={idx}>
                  <div className="card bg-black">
                    <div className="card-container">
                      <div
                        className="card-image project-image"
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
                      <div className="btn-group btn-group">
                        {item.page__link ? (
                          <a
                            href={item.github__link}
                            className="btn btn-dark btn-xsmall"
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
                          >
                            PAGE
                          </a>
                        ) : (
                          ""
                        )}

                        {item.page__link ? (
                          <a
                            href={item.post__link}
                            className="btn btn-dark btn-xsmall"
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
        <div className="space"></div>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default FeaturedSection;
