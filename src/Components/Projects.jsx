import React from "react";
import { assets, projectsData } from "../assets/assets";

function Projects() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(1);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectsData.length);
  };
  React.useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <div
      className="container mx-auto py-4 pt-20 px-5 md:px-20 my-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto mt-1">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={prevSlide}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="p-3 bg-gray-200 rounded"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects Slider */}
      <div className="overflow-hidden ">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / cardsToShow}%)`
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-5 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
