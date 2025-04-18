import React from "react";

const Hero = () => {
  return (
    <>
      <div className="allignment">
        <div className="flex items-center gap-10 max-sm:flex-col">
          <div className="max-sm:order-2 max-sm:text-center">
            <h1 className="lg:text-[4.5rem] sm:text-[2.5rem] max-sm:text-[2rem] max-sm:text-center font-bold neutral-dark-violet xl:leading-20">
              More than just shorter links
            </h1>
            <p className="text-[1.1rem] xl:w-[70%] neutral-grayish max-sm:text-[0.99rem]">
              {" "}
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn primary-cyan text-white mt-6" type="button">
              Get Started
            </button>
          </div>
          <div className="max-sm:order-1">
            <img
              className="max-w-[100%]"
              src="/images/illustration-working.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
