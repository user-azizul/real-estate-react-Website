import React from "react";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:mx-20 lg:px-32 w-full overflow-hidden"
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
      <div className="flex flex-col md:flex-row"></div>
    </div>
  );
}

export default About;
