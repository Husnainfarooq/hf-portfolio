import { FC } from "react";
import Canvas from "./Canvas";
import Scroll from "./Scroll";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="relative h-screen flex justify-center items-center flex-col gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh]"
    >
      <Canvas />
      <div className="flex items-center justify-center flex-col md:flex-row">
        <img
          data-scroll
          data-scroll-speed="2"
          className="w-[225px] h-[225px] rounded-full mr-6"
          src="https://i.ibb.co/ZJHw5RN/dp.jpg"
          alt="Me"
        />
        <div>
          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            Who am I?
          </h1>

          {/* Hide my age :v */}
          <p data-scroll className="text-lg text-gray-200" id="story">
            &emsp;My name is Asad Shabir. I&apos;m a
            {true ? ` ${new Date().getFullYear() - 1998} years old` : ""}{" "}
            frontend developer living in Pakistan. I started learning
            development when I was 18. Since then, I have made a lot of
            projects, from basic HTML pages to complex mobile applications. I
            hope to be a great developer and get my dream job in the future.
            Besides coding, I also like listening to music and playing video
            games
          </p>
        </div>
      </div>
      <Scroll id="skills" />
    </div>
  );
};

export default Who;
