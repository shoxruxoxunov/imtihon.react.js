function Brining() {
  return (
    <>
      <section className="bg-white mb-[200px]">
        <div className="container flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="md:w-[420px] ">
            <h2 className="text-[#000000] uppercase font-medium md:font-bold md:text-[40px] text-[20px] pt-[24px]">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>
            <p className="md:w-[445px] font-medium text-[15px] text-black opacity-[50%]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="">
            <img
              className="rounded-[8px] relative top[50px] right-[10px]"
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Brining;
