import { FC } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { project } from "../shared/types";

const Project: FC<project> = ({
  description,
  image,
  technologies,
  title,
  url,
  index,
}) => {
  return (
    <div
      className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] ${
        index % 2 === 1
          ? "flex-col lg:flex-row"
          : "flex-col lg:flex-row-reverse"
      }`}
    >
      <div data-scroll data-scroll-speed="3" className="lg:flex-1">
        <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
          <div className="border-black border-[8px]">
            <img className="w-full rounded-[12px]" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="item-info lg:flex-1">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-[20px] text-justify my-3">&emsp;{description}</p>

        <div className="flex gap-[5px]">
          {technologies.map((tech) => (
            <img
              key={tech.title}
              className="w-[30px] h-[30px]"
              src={tech.url}
              title={tech.title}
              alt=""
            />
          ))}
        </div>

        <div className="flex mt-[25px] gap-[20px]">
          {url?.web && (
            <a
              href={url?.web}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#ff751a] hover:bg-[#ff944d]"
            >
              <BiLinkExternal size={25} />
              <span> Live Demo</span>
            </a>
          )}
          {url?.appstore && (
            <a
              href={url.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
            >
              <FaAppStore size={25} />
              <span> App Store</span>
            </a>
          )}
          {url?.playstore && (
            <a
              href={url.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]"
            >
              <FaGooglePlay size={25} color="#28A745" />
              <span> Play Store</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
