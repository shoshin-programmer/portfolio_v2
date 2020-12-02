import { useState, MouseEvent } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Header: React.FunctionComponent<{}> = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setMenuOpen(!menuOpen);
  };

  const handleSoon = (event: MouseEvent<HTMLAnchorElement>) => {
    alert("Coming Soon");
  };

  return (
    <div className="header header-dark header-fixed header-dark u-unselectable header-animated">
      <Fade top cascade>
        <div className="header-brand">
          <div className="nav-item no-hover m-1">
            <a href="#">
              <h6 className="title">mark.the.dev</h6>
            </a>
          </div>
          <div className="nav-item nav-btn" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Fade>
      <div
        className={`header-nav ${menuOpen ? "active" : ""}`}
        id="header-menu"
      >
        <div className="nav-left">
          <Fade top cascade delay={500}>
            <div className="nav-item text-center">
              <a href="https://github.com/shoshin-programmer" target="_blank">
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-github"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </Fade>
          <Fade top cascade delay={800}>
            <div className="nav-item text-center">
              <a
                href="https://www.linkedin.com/in/arvin-mark-atienza-687851143/"
                target="_blank"
              >
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </Fade>
        </div>

        <div className="nav-right">
          <Slide top cascade delay={1000}>
            <div className="nav-item">
              <a href="/">Home</a>
            </div>
          </Slide>
          <Slide top cascade delay={1200}>
            <div className="nav-item">
              <a href="#about-section">About</a>
            </div>
          </Slide>
          <Slide top cascade delay={1400}>
            <div className="nav-item">
              <a href="#project-section">Featured</a>
            </div>
          </Slide>
          <Slide top cascade delay={1600}>
            <div className="nav-item">
              <a href="#work-section">Work</a>
            </div>
          </Slide>
          <Slide top cascade delay={1800}>
            <div className="nav-item">
              <a onClick={handleSoon} target="_blank">
                Blog
              </a>
            </div>
          </Slide>
          {/* <div className="nav-item">
            <button className="btn outline btn-light btn-small">RESUME</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
