import { FC } from "react";
import { allDataType } from "../shared/types";
import Project from "./Project";
import Scroll from "./Scroll";

interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = ({ projects }) => {
  return (
    <div className="relative flex justify-center items-center flex-col pt-[80px] mt-10">
      <h1
        id="mainProjects"
        className="text-center text-4xl mb-10 md:mb-20 font-bold"
      >
        Projects i&apos;ve worked on
      </h1>
      {projects.map((project, index) => {
        const { id, description, image, technologies, title, url } = project;
        return (
          <Project
            key={id}
            id={id}
            description={description}
            image={image}
            technologies={technologies}
            title={title}
            url={url}
            index={index}
          />
        );
      })}
      <Scroll id="contactMe" />
    </div>
  );
};

export default MainProjects;
