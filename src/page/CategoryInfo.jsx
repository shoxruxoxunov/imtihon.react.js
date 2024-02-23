import { Link } from "react-router-dom";
import Brining from "../components/Brining";
function CategoryInfo() {
  return (
    <>
      <section className="md:pt-[160px] mt-[80px] md:mb-[160px]">
        <div className="container  md:flex md:items-center md:gap-[125px]">
          <div class="">
            <img
              className="md:w-[540px] w-[689px] h-[560px] rounded-md"
              src="/assets/shared/desktop/image-zx9-speaker.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-medium text-[14px] text-[#D87D4A] pt-[10px] ">
              NEW PRODUCT
            </h3>
            <h1 className="mb-[20px] font-medium md:font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px]">
              ZX9 SPEAKER
            </h1>
            <p className=" mb-[20px] md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
              to="/detail/zx9-speaker"
              className=" mb-[80px] btn md:btn-md bg-[#FBAF85] text-white"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="md:mb-[160px]">
        <div className="container  md:flex md:flex-row-reverse md:items-center md:gap-[125px] text-center">
          <div class="">
            <img
              className="mb-[20px] w-[689px] md:w-[540px] h-[560px] rounded-md"
              src="/assets/shared/desktop/image-zx7-speaker.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-medium md:font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px] mb-[20px]">
              ZX7 SPEAKER
            </h1>
            <p className="md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px] mb-[44px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
              to="/detail/zx7-speaker"
              className=" btn md:btn-md bg-[#FBAF85] text-white"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white  md:pb-[120px] mb-[80px] ">
        <div className="container flex flex-col md:flex-row gap-[30px]">
          <div className=" flex flex-col items-center mt-[150px]  bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className=" relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px] "
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                HEADPHONES
              </p>
              <Link
                to="/headphones"
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%] "
              >
                Shop
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[150px]  bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className="  relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px]"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                SPEAKERS
              </p>
              <Link
                to="/categoryinfo"
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%]"
              >
                Shop
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center mt-[150px] relative bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className="  relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px]"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                EARPHONES
              </p>
              <Link
                to="/categoryphones"
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%]"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Brining />
    </>
  );
}

export default CategoryInfo;
