'use client'
import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

  function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-black text-3xl"
            >
              <RiCloseLine />
            </button>
            <div className="flex flex-col items-center gap-8">
              {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
                (item, index) => (
                  <a
                    href=""
                    key={index}
                    className="text-2xl font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}

        <nav className="navbar fixed z-[999] backdrop-blur-3xl w-full px-5 md:px-20 py-5 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl font-bold text-black">ochi</h1>
          </div>
          <div className="hidden md:flex gap-10 links">
            {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
              (item, index) => (
                <a
                  href=""
                  key={index}
                  className={`underline-offset-0 capitalize ${
                    index === 4 ? "ml-52" : ""
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </div>
          <button 
            className="block md:hidden text-black text-2xl" 
            onClick={() => setIsMenuOpen(true)}
          >
            <RiMenu3Line />
          </button>
        </nav>
      </>
    );
  }


export default Navbar;
