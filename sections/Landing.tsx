import Fade from "react-reveal/Fade";

const Landing: React.FunctionComponent<{}> = (): React.ReactElement => {
  const start = 1200;
  return (
    <section id="landing">
      <div id="landing-img" className="hero fullscreen hero-img parallax-img">
        <div className="hero-body">
          <div className="content">
            <Fade delay={start + 200}>
              <h1 className="headline-3 white">Mark Atienza</h1>
            </Fade>
            <Fade delay={start + 400}>
              <div className="row">
                <div className="col-8">
                  <h5 className="text-gray-300 sub-title font-alt font-normal">
                    I am a full stack developer having business experience of
                    transforming requirements to{" "}
                    <b className="text-primary">user-centered applications.</b>
                  </h5>
                </div>
              </div>
            </Fade>
            <Fade delay={start + 600}>
              <p className="white">
                <b>Country:</b> Philippines
              </p>
              <div className="btn-group">
                <a
                  href="mailto:atienza.new@gmail.com"
                  className="btn btn-primary btn-small"
                >
                  Contact
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="transition "></div>
      </div>
    </section>
  );
};

export default Landing;
