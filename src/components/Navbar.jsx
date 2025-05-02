import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed z-[999] backdrop-blur-3xl  w-full px-20 py-5 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold text-black ">ochi</h1>
        </div>
        <div className="hidden links md:flex gap-10">
          {["Services", "Our Work ", "About Us", "Insights", "Contact Us"].map(
            (item, index) => {
              return (
                <a
                  href=""
                  key={index}
                  className={` underline-offset-0 capitalize  ${
                    index === 4 ? "ml-52" : ""
                  }`}
                >
                  {item}
                </a>
              );
            }
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
