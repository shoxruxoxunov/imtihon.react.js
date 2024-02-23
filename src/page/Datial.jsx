import { Link, useParams } from "react-router-dom";
import Brining from "../components/Brining";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}
function Datial() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData("http://localhost:3000/data?slug=" + slug);
        setData(result);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div key={data.slug}>
              <section className="md:pt-[160px] md:mb-[160px] mb-[40px] pt-[80px]">
                <div className="container  md:flex md:items-center md:gap-[125px]">
                  <div class="mb-[80px]">
                    <img
                      className=" w-[689px] md:w-[540px] h-[560px] rounded-md"
                      src={item.image.desktop.slice(1)}
                    />
                  </div>
                  <div className="mb-[80px]">
                    <h3 className="font-medium text-[14px] text-[#D87D4A] pt-[20px] ">
                      NEW PRODUCT
                    </h3>
                    <h1 className="font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px] mb-[20px]">
                      {data && item.name}
                    </h1>
                    <p className="md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px] mb-[20px]">
                      {data && item.description}
                    </p>
                    <p className="font-bold text-[14px] text-[#000000] mb-[30px] md:w-[73px] md:mb-[47px] ">
                      $ {data && item.price}
                    </p>
                    <div className="md:flex md:items-center flex justify-center ">
                      <button className="btn md:btn-md ">-</button>
                      <div className="font-bold text-[14px] text-black w-[16px] md:text-center flex items-center">
                        0
                      </div>
                      <button className="btn md:btn-md md:mr-[16px]">+</button>
                      <Link
                        // to="/headphones"
                        onClick={() =>
                          window.scrollTo({ top: top, behavior: "smooth" })
                        }
                        className=" ml-[30px] btn md:btn-md bg-[#FBAF85] text-white"
                      >
                        Add To Card
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="md:mb-[160px]">
                <div className="container md:flex md:gap-[125px]">
                  <div className="md:w-[635px]">
                    <h2 className=" pt-[30px] mb-[30px]font-bold text-[32px] md:w-[445px] text-[#000000] md:mb-[32px]">
                      FEATURES
                    </h2>
                    <p className="font-medium text-[15px] md:w-[635px] text-[#000000] opacity-[0.5]">
                      {data && item.features}
                      <br />
                      <br />
                    </p>
                  </div>
                  <div>
                    <h2 className="font-bold text-[32px] md:w-[445px] text-[#000000] md:mb-[32px] ">
                      in the box
                    </h2>
                    <ul>
                      <li className="md:flex md:items-center md:gap-[10px] md:mb-[8px]">
                        <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px] ">
                          {item.includes[0].quantity}x
                        </span>
                        <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                          {item.includes[0].item}
                        </p>
                      </li>
                      <li className=" md:flex md:items-center md:gap-[10px] md:mb-[8px]">
                        <span className="text-[#D87D4A] font-bold text-[15px]  ">
                          {item.includes[1].quantity}x
                        </span>
                        <p className="text-[#000000] font-medium text-[15px] md:w-[150px] opacity-[0.5]">
                          {item.includes[1].item}
                        </p>
                      </li>
                      <li className="md:flex md:gap-[10px] md:mb-[8px]">
                        <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                          {item.includes[2].quantity}x
                        </span>
                        <p className="text-[#000000] font-medium text-[15px] md:w-[150px] opacity-[0.5]">
                          {item.includes[2].item}
                        </p>
                      </li>
                      <li className="md:flex items-center md:gap-[10px] md:mb-[8px] mb-[120px]">
                        <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                          {item.includes[3].quantity}x
                        </span>
                        <p className="text-[#000000] font-medium text-[15px] md:w-[190px] opacity-[0.5]">
                          {item.includes[3].item}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="md:mb-[160px] mb-[100px]">
                <div className="container md:flex md:gap-[50px] ">
                  <div className="md:pb-[24px] pb-[20px]">
                    <img
                      className=" mb-[20px] rounded-md w-[350px] md:w-[450px] md:h-[200px] md:pb-[24px] "
                      src={data && item.gallery.first.desktop.slice(1)}
                      alt=""
                    />
                    <img
                      className="rounded-md md:w-[450px] w-[350px] md:h-[200px] "
                      src={data && item.gallery.second.desktop.slice(1)}
                    />
                  </div>
                  <div>
                    <img
                      className="rounded-md md:w-[600px] w-[350px] md:h-[420px] "
                      src={data && item.gallery.third.desktop.slice(1)}
                    />
                  </div>
                </div>
              </section>
              <section className="md:mb-[161px]">
                <div className="container">
                  <div className="md:flex md:justify-center md:mb-[64px]">
                    <h1 className=" mb-[80px] uppercase text-[#000000] text-[32px] md:w-[312px] font-bold md:text-center">
                      you may also like
                    </h1>
                  </div>
                  <div className="md:flex md:justify-between md:items-center md:gap-[30px]">
                    <div>
                      <img
                        className="md:w-[350px] md:h-[318px] rounded-md"
                        src={data && item.others[0].image.desktop.slice(1)}
                      />
                      <div className="md:flex md:flex-col md:items-center flex flex-col items-center  md:pt-[40px] pt-[30px]">
                        <p className="md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px] mb-[30px]">
                          {data && item.others[0].name}
                        </p>
                        <Link
                          to="/detail/xx99-mark-two-headphones"
                          onClick={() =>
                            window.scrollTo({ top: top, behavior: "smooth" })
                          }
                          className=" mb-[30px] btn md:btn-md bg-[#D87D4A] text-white"
                        >
                          See Product
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img
                        className="md:w-[350px] md:h-[318px] rounded-md"
                        src={data && item.others[1].image.desktop.slice(1)}
                      />
                      <div className="md:flex md:flex-col md:items-center md:pt-[40px] flex flex-col items-center pt-[30px]">
                        <p className=" md:text-center md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px] mb-[30px]">
                          {data && item.others[1].name}
                        </p>
                        <Link
                          to="/detail/xx59-headphones"
                          onClick={() =>
                            window.scrollTo({ top: top, behavior: "smooth" })
                          }
                          className=" mb-[30px] btn md:btn-md bg-[#D87D4A] text-white"
                        >
                          See Product
                        </Link>
                      </div>
                    </div>
                    <div>
                      <img
                        className="md:w-[350px] md:h-[318px] rounded-md"
                        src={data && item.others[2].image.desktop.slice(1)}
                      />
                      <div className="md:flex md:flex-col md:items-center md:pt-[40px] flex flex-col items-center pt-[30px]">
                        <p className="md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px] mb-[30px]">
                          {data && item.others[2].name}
                        </p>
                        <Link
                          to="/detail/xx99-mark-two-headphones"
                          onClick={() =>
                            window.scrollTo({ top: top, behavior: "smooth" })
                          }
                          className="mb-[30px] btn md:btn-md bg-[#D87D4A] text-white"
                        >
                          See Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-white  md:pb-[120px] ">
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
                        EARPHONES
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
            </div>
          );
        })}

      <Brining />
    </>
  );
}

export default Datial;
