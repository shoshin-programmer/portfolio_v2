import Fade from "react-reveal/Fade";

const FooterSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <footer className="footer bg-black m-0">
      <Fade delay={500} duration={1000}>
        <div className="u-text-center">
          <h6 className="footer__title white uppercase">
            Follow or Contact Me
          </h6>
        </div>
        <div className="r">
          <a
            className="btn btn-primary"
            href="mailto:atienza.new@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>
        </div>

        <div className="content">
          <div className="divider"></div>
          <div className="row">
            <div className="col-2 offset-3 ignore-screen">
              <a href="https://www.linkedin.com/in/arvin-mark-atienza-687851143/">
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="col-2 ignore-screen">
              <a href="https://github.com/shoshin-programmer">
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-github"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="col-2 ignore-screen">
              <a
                href="mailto:atienza.new@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i
                    className="fa fa-wrapper fa-envelope"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};
export default FooterSection;
