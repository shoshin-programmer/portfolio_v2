// LIBRARIES
import Head from "next/head";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
// COMPONENTS
import FooterSection from "../sections/FooterSection";
import Header from "../components/Header";
import Tile from "../components/Tile";
import Loader from "../components/Loader";

// VARIABLES
const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

// TYPES / INTERFACE
import { Project } from "../types/types";

const Projects = () => {
  const { data, error } = useSWR("/api/projects", fetcher);
  var startfade = 200;
  if (error) return <Loader message={"Error"} />;
  if (!data) return <Loader message={"Loading"} />;
  return (
    <>
      <Head>
        <title>Project Library</title>
      </Head>
      <Header />
      <div id="project-section" className="hero parallax-img full-height">
        <div className="hero-body">
          <div className="content u-text-left p-3 content-sm">
            {error ? (
              <Loader message="Error" />
            ) : !data ? (
              <Loader message="Loading" />
            ) : (
              <>
                <h1 className="headline-5 mt-5 text-gray-400">
                  PROJECT LIBRARY
                </h1>
                {data.projects.map((project: Project, idx: number) => (
                  <Fade key={idx} delay={startfade + idx * 300} bottom>
                    <Tile data={project} />
                  </Fade>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="transition "></div>
      </div>
      <FooterSection />
    </>
  );
};

export default Projects;
