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
          src="https://i.ibb.co/ZJHw5RN/dp.png"
          alt="Me"
        />
        <div>
          <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
            Who am I?
          </h1>

          {/* Hide my age :v */}
          <p data-scroll className="text-lg text-gray-200" id="story">
            &emsp;My name is Husnain Farooq. I&apos;m a
            {true ? ` ${new Date().getFullYear() - 1999} years old` : ""}{" "}
            Full Stack developer living in Pakistan. I started learning
            development when I started my Software Engineering. Since then, I have made a lot of
            projects, from basic HTML pages to complex mobile applications. 
            I'm trying to be a better version of myself and get my dream come true in the future.
            Besides coding, I also like listening to music and playing video
            games as well as working out at gym.
          </p>
        </div>
      </div>
      <Scroll id="skills" />
    </div>
  );
};

export default Who;
