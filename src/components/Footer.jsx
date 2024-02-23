import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col items-center md:flex md:pt-[50px] pt-[20px]   ">
        <div
          className="
          md:flex md:mb-5 "
        >
          <div className="md:pt-[-20px]">
            <Link
              className=" text-[#FFFFFF] font-bold md:font-bold lg:font-bold text-2xl md:text-3xl lg:text-5xl md:text-start   "
              to="/"
            >
              audiophile
            </Link>
          </div>
          <nav className="md:pt-[20px] md:ml-[50px]">
            <ul className="md:flex  md:gap-[120px]">
              <li className="mb-[16px] text-center  ">
                <Link
                  className=" md:font-bold lg:font-bold text-sm md:text-lg lg:text-xl text-[#FFFFFF]  w-[44px] md:w-[81px] lg:w-[44px] font-light"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-[16px] text-center ">
                <Link
                  to="/headphones"
                  onClick={() =>
                    window.scrollTo({ top: top, behavior: "smooth" })
                  }
                  className="font-light md:font-bold lg:font-bold text-sm md:text-lg lg:text-xl text-[#FFFFFF]  text-center  w-[44px] md:w-[81px] lg:w-[44px]"
                >
                  HEADPHONES
                </Link>
              </li>
              <li className="mb-[16px] text-center ">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: top, behavior: "smooth" })
                  }
                  to="/categoryinfo"
                  className="font-light md:font-bold lg:font-bold text-sm md:text-lg lg:text-xl text-[#FFFFFF]  w-[44px] md:w-[81px] lg:w-[44px]"
                >
                  SPEAKERS
                </Link>
              </li>
              <li className="text-center ">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: top, behavior: "smooth" })
                  }
                  to="/categoryphones"
                  className="font-light md:font-bold lg:font-bold text-sm md:text-lg lg:text-xl text-[#FFFFFF]  w-[44px] md:w-[81px] lg:w-[44px]"
                >
                  EARPHONES
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-sm md:text-base lg:text-lg font-medium w-[327px] md:w-[689px] lg:w-[540px] text-white opacity-[50%] mb-[48px]">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="md:flex justify-between gap-[340px]">
          <div className="font-bold text-[15px] w-258px md:w-[258px] lg:w-[540px] text-[#FFFFFF] opacity-[50%] mb-[48px] ">
            <h3 className="">Copyright 2021. All Rights Reserved</h3>
          </div>

          <div className="flex justify-center gap-[16px] mb-[18px]">
            <FaFacebookSquare className="text-white w-[24px] h-[24px]" />
            <FaInstagram className="text-white w-[24px] h-[24px]" />
            <FaTwitter className="text-white w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
