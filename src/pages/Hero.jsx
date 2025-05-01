import React from "react";
import {motion} from 'framer-motion'



function Hero() {
  return (
    <div 
    data-scroll data-scroll-section  data-scroll-speed='-.2'
     className="w-full h-screen ">
      <div className="pt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div  key={index} className="masker leading-none ">
              <h1 className=" text-[5.5vw] font-['Founders_Grotesk_X-Condensed'] uppercase tracking-tight">
                {index === 1 ? (
                  <>
                    <motion.div
                    initial={{width: 0}}
                    animate={{width: "8%"}}
                    transition={{ease: "linear" , delay: .1 }}
                     className="inline-block w-24 mr-2 rounded-md h-16 ">
                        <img src={''} alt="" />
                     </motion.div>
                  </>
                ) : (
                  ""
                )}
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-1 border-zinc-600 mt-32 flex justify-between  px-20 pt-4 items-center ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <a href="" key={index}>{item}</a>;
        })}

        <div className="start flex gap-1">
          <button className="px-5 py-2 border rounded-full text-sm  uppercase font-bold">
            start the project
          </button>
          <span className=" border px-4 py-2 rounded-full ">+</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
