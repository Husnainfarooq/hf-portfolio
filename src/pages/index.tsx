import type { NextPage } from "next";

import Contact from "../components/Contact";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";
import Who from "../components/Who";
import { allDataType } from "../shared/types";
import { useRef } from "react";
import skills from "../shared/skills";
import projects from "../shared/projects";
import SmallProjects from "../components/SmallProjects";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage<HomeProps> = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills skills={skills} />
        <MainProjects projects={projects} />
        {/* <SmallProjects projects={data.smallProjects} /> */}
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
