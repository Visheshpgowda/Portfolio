import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="heading lg:max-w-[60vw]">
        Consistency, creativity, and continuous growth are the keys to unlocking extraordinary potential. I thrive on challenges, adapt swiftly, and relentlessly pursue excellence.  <span className="text-purple">Let's create something exceptional together</span> 
        </p>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today!!!!
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 VISHESH P GOWDA
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
              <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
              
              
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
