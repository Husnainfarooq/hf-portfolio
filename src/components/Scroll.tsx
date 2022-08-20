import { FC } from "react";
import { BiChevronsDown } from "react-icons/bi";
import { m } from "framer-motion";

interface Scroll {
    id: string;
  }

const Scroll: FC<Scroll> = ({ id }) => {
  return (
      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="left-[calc(50%-23px)] cursor-pointer center"
        href={`#${id}`}
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
  );
};

export default Scroll;
