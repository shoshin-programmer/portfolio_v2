const FooterSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <footer className="footer bg-black m-0">
      <h6 className="footer__title white uppercase">Follow Me</h6>
      <div className="content">
        <div className="divider"></div>

        <div className="row u-center">
          <div className="col">
            <a href="https://www.linkedin.com/in/arvin-mark-atienza-687851143/">
              <span className="icon">
                <i
                  className="fab fa-wrapper fa-linkedin"
                  aria-hidden="true"
                ></i>
              </span>
            </a>
          </div>

          <div className="col">
            <a href="https://github.com/shoshin-programmer">
              <span className="icon">
                <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="col">
            <a
              href="mailto:atienza.new@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <i className="fa fa-wrapper fa-envelope" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
