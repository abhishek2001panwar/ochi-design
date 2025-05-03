import React from "react";

function Feature() {
  return (
    <div className="w-full min-h-screen">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10 border-b">
        <h1 className="text-3xl md:text-4xl font-bold">Clients' reviews</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-5 md:gap-8 lg:gap-10 mt-6 md:mt-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full lg:w-1/2 bg-[#084c44] rounded-md py-20 sm:py-32 md:py-40 px-3 relative">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">ochi</h1>
          <button className="px-3 sm:px-4 py-1 sm:py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border text-sm md:text-base">
            &copy;2019-2020
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-5 md:gap-8 lg:gap-10 mt-5 lg:mt-0">
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-md py-16 sm:py-24 md:py-32 px-3 relative">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">clutch</h1>
            <button className="px-3 sm:px-4 py-1 sm:py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border text-sm md:text-base">
              &copy;2019-2020
            </button>
          </div>
          
          <div className="w-full sm:w-1/2 bg-zinc-800 rounded-md py-16 sm:py-24 md:py-32 px-3 relative">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">ochi</h1>
            <button className="px-3 sm:px-4 py-1 sm:py-2 border-[#d0ec6c] absolute bottom-3 rounded-full text-[#d0ec6c] border text-sm md:text-base">
              &copy;2019-2020
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
