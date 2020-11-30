import { useState, MouseEvent } from "react";

const Header: React.FunctionComponent<{}> = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header header-dark header-fixed header-dark u-unselectable header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover m-1">
          <a>
            <h6 className="title">mark.the.dev</h6>
          </a>
        </div>
        <div className="nav-item nav-btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`header-nav ${menuOpen ? "active" : ""}`}
        id="header-menu"
      >
        <div className="nav-left">
          <div className="nav-item text-center">
            <a href="https://github.com/shoshin-programmer" target="_blank">
              <span className="icon">
                <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
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
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <a href="/">Home</a>
          </div>
          <div className="nav-item">
            <a href="#about-section">About</a>
          </div>
          <div className="nav-item">
            <a href="#project-section">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#work-section">Work</a>
          </div>
          <div className="nav-item">
            <a href="/blog" target="_blank">
              Blog
            </a>
          </div>
          {/* <div className="nav-item">
            <button className="btn outline btn-light btn-small">RESUME</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
