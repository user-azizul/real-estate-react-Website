import React from "react";
import { assets } from "./../assets/assets";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:p-0  lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light ">
          {" "}
          Our Brand
        </span>
      </h1>
      <p className="capitalize text-gray-500 mx-w-80 text-center mb-8">
        passionate about properties, dedicated to your vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-2">
        <img
          src={assets.brand_img}
          alt="about brand img"
          className="w-full sm:w-1/2 max-w-lg md:pt-10"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="capitalize">year of excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="capitalize">projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="capitalize">mn. sq. ft. delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="capitalize">ongoing projects</p>
            </div>
          </div>
          <p className="my-6 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            repellat accusamus eligendi. Accusantium officia necessitatibus
            natus est mollitia, commodi amet quas, eligendi nihil quibusdam
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
