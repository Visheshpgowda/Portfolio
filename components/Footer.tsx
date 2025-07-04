import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          loading="lazy"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="heading lg:max-w-[60vw]">
          Status: <span className="text-purple">active branch → main</span><br />
          Vision containerized with <span className="text-purple">Docker</span>,<br />
          dreams deployed on <span className="text-purple">AWS</span>,<br />
          and passion version-controlled on <span className="text-purple">GitHub</span>.<br />
          <br />
          This journey is CI/CD powered — always building, always shipping.<br />
          Let’s fork ideas, merge creativity, and scale something legendary.
        </p>

        <p className="text-white-200 md:mt-10 my-5">
          Ping me — let’s spin up the next big thing ⚙️
        </p>

        <a href="mailto:visheshhirisave@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          &copy; 2024 VISHESH P GOWDA — Deployed with ❤️ using coffee and commits ☕️💾
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt="social-icon" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
