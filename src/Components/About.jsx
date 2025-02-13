import React from "react";
import { assets } from "./../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14  lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="capitalize text-gray-500 max-w-80 text-center mb-8 mt-1">
        Passionate about properties, dedicated to your vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-2">
        {/* Brand Image */}
        <img
          src={assets.brand_img}
          alt="Our brand and real estate excellence"
          className="w-full sm:w-1/2 max-w-lg md:pt-10"
        />

        {/* Statistics & Description */}
        <div className="flex flex-col items-center md:items-start mt-20 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="capitalize">Years of excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="capitalize">Projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="capitalize">Mn. sq. ft. delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="capitalize">Ongoing projects</p>
            </div>
          </div>

          {/* Description & Button */}
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            repellat accusamus eligendi. Accusantium officia necessitatibus
            natus est mollitia, commodi amet quas, eligendi nihil quibusdam.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
