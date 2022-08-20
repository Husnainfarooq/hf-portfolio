import { FC } from "react";
import { allDataType } from "../shared/types";
import Scroll from "./Scroll";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div
      id="skills"
      className="px-[6vw] lg:px-[15vw] py-[80px] z-[2] lg:min-h-[70vh] flex flex-col items-center justify-center"
    >
      <h1
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use to make projects everyday
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
        {skills.map((skill) => (
          <a
            key={skill.link}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
      </div>
      <Scroll id="mainProjects" />
    </div>
  );
};

export default Skills;
