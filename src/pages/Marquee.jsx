import React from "react";
import {motion} from 'framer-motion'

function Marquee() {
    
  return (
    <div
    data-scroll data-scroll-section data-scroll-speed='.1' 

      className="w-full  bg-[#084c44]  py-24 overflow-hidden rounded-tr-3xl rounded-tl-2xl "
    >
      <div
      
      
      className="flex   whitespace-nowrap  border-t-2 border-b-2 text-white border-zinc-300 ">
        <motion.div 
        initial={{x : 0}}
        animate={{x : "-100%"}}
        transition={{ease  : 'linear' , repeat : Infinity , duration: 5}}

        className="text-[10vw] font-semibold font-['Founders_Grotesk_X-Condensed'] uppercase ">We are ochi</motion.div>
        <motion.div 
        initial={{x : 0}}
        animate={{x : "-100%"}}
        transition={{ease  : 'linear' , repeat : Infinity , duration: 5}}

        className="text-[10vw] font-semibold font-['Founders_Grotesk_X-Condensed'] uppercase ">We are ochi</motion.div>
      </div>
    </div>
  );
}

export default Marquee;
