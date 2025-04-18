import React from "react";
import brandIcon from "/images/icon-brand-recognition.svg";
import recordsIcon from "/images/icon-detailed-records.svg";
import customizeIcon from "/images/icon-fully-customizable.svg";

const featuresList = [
  {
    id: 1,
    icon: brandIcon,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: recordsIcon,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: customizeIcon,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Features = () => {
  return (
    <div className="bg-gray sm:py-25 max-sm:py-20">
      <div className="text-center">
        <h1 className="text-[2.5rem]">Advanced Statistics</h1>
        <p className="text-[1.1rem] violet">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex md:flex-row max-sm:flex-col max-sm:justify-center max-sm:items-center allignment gap-6 relative mt-8">
        {featuresList.map((feature, id) => (
          <div
            key={feature.id}
            className={`relative z-[2] h-60 w-100 max-sm:h-70 max-sm:w-70 max-md:h-100 max-md:w-250 max-lg:h-90 p-7 bg-white rounded-2xl ${
              id === 1 ? "mt-10 -mb-10" : id === 2 ? "mt-20 -mb-20" : ""
            }`}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-15 h-15 rounded-full p-2 primary-violet max-sm:absolute max-sm:left-27 max-sm:-top-10"
            />

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
        <div className="absolute top-50 z-[1] h-1 xl:w-300 lg:w-200 md:w-150 primary-cyan max-sm:w-1 max-sm:h-190"/>
      </div>
    </div>
  );
};

export default Features;
