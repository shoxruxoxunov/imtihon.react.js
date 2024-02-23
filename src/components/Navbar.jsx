import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

function Navbar() {
  return (
    <header className="pt-[37px] bg-black ">
      <div className="container py-[32px] border-b-[1px] border-b-gray-600 flex justify-between items-center  ">
        <label className="text-white swap swap-rotate lg:hidden">
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <div>
          <Link
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="lg:w-[143px] lg:h-[25px] font-bold text-lg md:text-xl lg:text-3xl text-[#FFFFFF] "
            to="/"
          >
            audiophile
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-[34px] ">
            <li className="">
              <Link
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                to="/"
                className="lg:w-[44px] font-bold text-[13px] text-white "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                to="/headphones"
                className="lg:w-[44px] font-bold text-[13px] text-white  "
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                to="/categoryinfo"
                className="lg:w-[44px] font-bold text-[13px] text-white "
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                onClick={() =>
                  window.scrollTo({ top: top, behavior: "smooth" })
                }
                to="/categoryphones"
                className="lg:w-[44px] font-bold text-[13px] text-white "
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </nav>
        <div className="dropdown z-50 dropdown-end">
          <div tabIndex={0} role="button">
            <button>
              {" "}
              <FaCartArrowDown className="w-[23px] h-[16px] md:w-[23px] md:h-[20px] text-white" />
            </button>
          </div>
          <div
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[377px] h-[488px]"
          >
            <div className="mx-8">
              <div className="flex justify-between my-8 items-center">
                <p className="text-[#000000] font-bold text-[18px] tracking-[1.29px]">
                  CART (3)
                </p>
                <p className="text-[#000000] hover:text-[#D87D4A] transition text-[15px] opacity-[50%]">
                  Remove all
                </p>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#000000] opacity-[50%] text-[15px]">
                  TOTAL
                </p>
                <p className="text-[#000000] text-[18px] font-bold">$ 5,396</p>
              </div>
              <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
