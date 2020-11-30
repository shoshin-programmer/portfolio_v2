const WorkSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <section className="py-8" id="about-section">
      <div className="frame">
          <ul className="menu">
            <li className="divider"></li>
            <li className="menu-item selected">
              <div className="menu-addon right">
                <span className="icon">
                  <i
                    className="fa fa-wrapper fa-ellipsis-h small"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <a href="!#">News Feed</a>
            </li>
            <li className="menu-item">
              <a href="!#">Messenger</a>
            </li>
          </ul>

        <div className="frame__body">
          <div className="frame__header">
            <div className="tile level">
              <div className="tile__icon">
                <figure className="avatar">
                  <img src="https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1398292826/a1tq244sp7uqhb5a0utg.png" />
                </figure>
              </div>
              <div className="tile__container">
                <p className="tile__title">Richard Hendricks.</p>
                <p className="tile__subtitle">Founder and CEO of Pied Piper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
