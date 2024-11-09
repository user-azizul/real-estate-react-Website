import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Testimonials", href: "#Testimonials" }
  ];

  // Smooth scroll function
  const handleScroll = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Disable scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class when the component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(item.href.slice(1))}
                className="cursor-pointer hover:text-gray-400"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        {/* Hamburger Icon for Mobile */}
        <img
          onClick={() => setIsMenuOpen(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setIsMenuOpen(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close"
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(item.href.slice(1))}
                className="px-4 py-2 rounded-full"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
