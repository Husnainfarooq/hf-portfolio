import { FC } from "react";
import { socialLinks } from "../shared/constants";

const Contact: FC = () => {
  return (
    <div className="pb-20" id="contactMe">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-3">Contact me</h1>
            <p className="mb-3">
              If you want to contact me, you can do it through the following
              <p className="mt-3">Email: </p>
              <a
                href="mailto:asadbutt667@gmail.com"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[23px] "
                  src="https://i.ibb.co/N12cYjr/gmail-icon-logo-png-transparent.png"
                  alt=""
                />
                asadbutt667@gmail.com
              </a>
              <p className="mt-1">Phone: </p>
              <a
                href="tel:+923316559291"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[30px] "
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
                  alt=""
                />
                +92331-6559291
              </a>
            </p>

            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="flex-1 mt-8">
            <h1 className="text-xl mb-3">Other places</h1>
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                />
                <h1>{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
