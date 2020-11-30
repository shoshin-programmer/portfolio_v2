const AboutSection: React.FunctionComponent<{}> = (): React.ReactElement => {
  return (
    <section className="py-8" id="about-section">
      <div className="content u-text-center text-gray-200 p-2">
        <div className="avatar avatar--xlarge bg-gray-200">
          <img src="/myAvatar.svg" alt="avatar" />
        </div>
        <h3 className="uppercase font-bold m-5">
          MY NAME IS
          <span className="text-primary"> Mark Atienza</span>
        </h3>
        <p className="mb-3">
          Hello! I'm Mark Atienza, a web developer based in the Philippines. I
          create <b className="white">user-centered</b> websites, applications
          and other things web. I make it a goal to provide a{" "}
          <b className="white">seamless and performant</b> products with
          user-experience in mind. I also happen to have specialized experiences
          for creating internal applications for companies to provide better and
          efficient processes.
          <span className="mb-5" />
          Here are a few technologies I've been working with recently:
        </p>
        <div className="content">
          <div className="row">
            <div className="col">
              <h6 className="lead uppercase mb-1 font-bold text-gray-500 p-1">
                BACKEND
              </h6>
              <div className="uppercase font-bold text-gray-200">Python</div>
              <div className="uppercase font-bold text-gray-200">Django</div>
              <div className="uppercase font-bold text-gray-200">Pandas</div>
              <div className="uppercase font-bold text-gray-200">Django Q</div>
            </div>
            <div className="col">
              <h6 className="lead uppercase mb-1 font-bold text-gray-500 p-1">
                Frontend
              </h6>
              <div className="uppercase font-bold text-gray-200">
                HTML & CSS
              </div>
              <div className="uppercase font-bold text-gray-200">
                Javascript
              </div>
              <div className="uppercase font-bold text-gray-200">React</div>
              <div className="uppercase font-bold text-gray-200">NextJS</div>
            </div>
            <div className="col">
              <h6 className="lead uppercase mb-1 font-bold text-gray-500 p-1">
                Others
              </h6>
              <div className="uppercase font-bold text-gray-200">GITHUB</div>
              <div className="uppercase font-bold text-gray-200">AWS EC2</div>
              <div className="uppercase font-bold text-gray-200">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
