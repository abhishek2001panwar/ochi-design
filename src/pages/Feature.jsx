import React from "react";

function Feature() {
  return (
    <div className="w-full h-screen">
      <div className="px-20 py-10 border-b">
        <h1 className="text-4xl font-bold  ">Clients’ reviews</h1>
      </div>{" "}
      <div className="flex gap-10 mt-10 px-20">
        <div className=" w-1/2 bg-[#084c44] rounded-md py-40 px-3  relative ">
          <h1 className="text-white text-3xl font-bold  text-center">ochi</h1>

          <button className="px-4 py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border ">
            &copy;2019-2020
          </button>
        </div>
        <div className="w-1/2 flex  gap-10 ">
        <div className=" w-1/2 bg-zinc-800 rounded-md py-32 px-3  relative ">
          <h1 className="text-white text-3xl font-bold  text-center">clutch</h1>

          <button className="px-4 py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border ">
            &copy;2019-2020
          </button>
        </div>
        <div className=" w-1/2 bg-zinc-800 rounded-md py-32 px-3  relative ">
          <h1 className="text-white text-3xl font-bold  text-center">ochi</h1>

          <button className="px-4 py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border ">
            &copy;2019-2020
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
