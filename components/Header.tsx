import { useState, MouseEvent } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Link from "next/link";

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
        <Fade top cascade delay={500}>
          <div className="nav-left">
            <div className="nav-item">
              <a onClick={handleSoon} target="_blank">
                Blog
              </a>
            </div>
            <div className="nav-item">
              <Link href="/projects">Projects</Link>
            </div>
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
            <div className="nav-item text-center">
              <a href="https://www.instagram.com/mark.the.dev/" target="_blank">
                <span className="icon">
                  <i
                    className="fab fa-wrapper fa-instagram"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </Fade>

        <Slide top cascade delay={700}>
          <div className="nav-right">
            <div className="nav-item">
              <Link href="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link href="/#about-section">About</Link>
            </div>
            <div className="nav-item">
              <Link href="/#project-section">Featured</Link>
            </div>
            <div className="nav-item">
              <Link href="/#work-section">Work</Link>
            </div>
            {/* <div className="nav-item">
            <button className="btn outline btn-light btn-small">RESUME</button>
          </div> */}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Header;
