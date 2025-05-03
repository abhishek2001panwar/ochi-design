import React from "react";

function Featured() {
  return (
    <div className="w-full">
      <div className="px-5 md:px-20 py-10">
        <h1 className="text-4xl font-bold  ">Featured Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 py-10">
        <div className="innercard-container">
          <h1 className="font-bold uppercase p-3">Salience Labs</h1>
          <div className="innercard w-full relative">
            {/* <h1 className="absolute text-8xl font-bold left-full text-[#d0ec6c] -translate-x-1/2 top-1/2 -translate-y-1/2">
              FYRE
            </h1> */}
            <img
              className="rounded-md"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt=""
            />
          </div>
        </div>

        <div className="innercard-container">
          <h1 className="font-bold uppercase p-3">Cardboard Spaceship</h1>
          <div className="innercard w-full relative">
            {/* <h1 className="absolute text-8xl font-bold right-full text-[#d0ec6c] translate-x-1/2 top-1/2 -translate-y-1/2">
              VISE
            </h1> */}
            <img
              className="rounded-md"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </div>
        </div>

        {/* Repeat more cards similarly... */}
        <div className="innercard-container">
          <h1 className="font-bold uppercase p-3">Cardboard Spaceship</h1>
          <div className="innercard w-full relative">
            <h1 className="absolute text-8xl font-bold right-full text-[#d0ec6c] translate-x-1/2 top-1/2 -translate-y-1/2">
              
            </h1>
            <img
              className="rounded-md"
              src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="innercard-container">
          <h1 className="font-bold uppercase p-3">Cardboard Spaceship</h1>
          <div className="innercard w-full relative">
            <h1 className="absolute text-8xl font-bold right-full text-[#d0ec6c] translate-x-1/2 top-1/2 -translate-y-1/2">
              
            </h1>
            <img
              className="rounded-md"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
