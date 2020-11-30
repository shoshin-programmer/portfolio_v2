import Fade from "react-reveal/Fade";

const WorkSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <section className="footer mt-0" id="work-section">
      <Fade bottom>
        <h2 className="uppercase p-2 text-gray-600 u-text-center">Work</h2>
      </Fade>
      <div className="content text-left">
        <Fade bottom cascade delay={200}>
          <div className="row level">
            <div className="col-6">
              <h6 className="title text-left white">ZenRooms @ 2020</h6>
              <p>
                Working on internal system for Finance team automation of
                processes.
              </p>

              <div className="row"></div>
            </div>
            <div className="col-6">
              <div className="u-center">
                <button className="btn-light outline font-bold">
                  Python Developer
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <div className="space large"></div>
        <div className="row level">
          <Fade bottom cascade delay={400}>
            <div className="col-6">
              <h6 className="title text-left white">RingCentral @ 2019</h6>
              <p>
                Internal HR system using Python, Django, React. From designing
                to deploying internal tool. Also worked with Microsoft PowerApps
                and Sharepoint for specific purposes.
              </p>

              <div className="row"></div>
            </div>
            <div className="col-6">
              <div className="u-center">
                <button className="btn-light outline font-bold">
                  GSS PMO Analyst / Python Developer
                </button>
              </div>
            </div>
          </Fade>
        </div>
        <div className="space large"></div>

        <div className="row level">
          <Fade bottom cascade delay={400}>
            <div className="col-6">
              <h6 className="title text-left white">SiP @ 2018</h6>
              <p>
                Data-mining, data-analysis, Facebook Marketing and automating
                Internal Processes. Stack used is mostly Python with Pandas,
                Matplotlib, Numpy, and Tkinter.
              </p>

              <div className="row"></div>
            </div>
            <div className="col-6">
              <div className="u-center">
                <button className="btn-light outline font-bold">
                  Data Specialist
                </button>
              </div>
            </div>
          </Fade>
        </div>

        <div className="space large"></div>
      </div>
    </section>
  );
};

export default WorkSection;
