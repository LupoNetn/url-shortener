import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger menu
import { IoClose } from "react-icons/io5"; // Close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
  ];

  return (
    <>
      <nav className="allignment">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6 items-center">
            <div>
              <img src="/images/logo.svg" alt="" />
            </div>
            <div className="max-sm:hidden block">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li className="neutral-grayish font-semibold hover:text-black">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-sm:hidden block">
            <button className="btn " type="button">
              Log In
            </button>
            <button
              className="btn primary-cyan text-white hover:opacity-30"
              type="button"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden relative">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
            {/* Mobile Menu Dropdown */}
            <div className="absolute right-5 mt-4 w-[250px]">
              {isOpen && (
                <div className="primary-violet rounded-lg p-6 text-center">
                  <ul className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <li
                        key={link.name}
                        className="text-white font-semibold hover:text-neutral-gray"
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                  {/* Mobile Menu Buttons */}
                  <div className="border-t border-neutral-grayish mt-6 pt-6">
                    <button
                      className="btn text-white w-full mb-4"
                      type="button"
                    >
                      Log In
                    </button>
                    <button
                      className="btn primary-cyan text-white hover:opacity-70 w-full"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
