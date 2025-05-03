import React from "react";
import {motion} from 'framer-motion'
import Button from "../components/Button";
import { IoArrowDownCircle } from "react-icons/io5";
import { CgArrowBottomRightO } from "react-icons/cg";
import { FaStar } from "react-icons/fa";





function Hero() {
  return (
    <div 
    data-scroll data-scroll-section data-scroll-speed='-.2'
    className="w-full py-20">
      <div className="pt-24 sm:pt-32 md:pt-40 lg:pt-52 px-5 sm:px-10 md:px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <h1 className="text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[5.5vw] overflow-hidden leading-none font-['Founders_Grotesk_X-Condensed'] uppercase font-bold">
                {index === 1 ? (
                  <>
                    <motion.div
                    initial={{width: 0}}
                    animate={{width: "8%"}}
                    transition={{ease: 'linear', delay: .3}}
                    className="inline-block mr-2 rounded-md text-md font-light">
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
      <div className="border-t-1 border-zinc-600 mt-16 sm:mt-20 md:mt-32 flex flex-col sm:flex-row justify-between px-5 sm:px-10 md:px-20 pt-4 items-center gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-32">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => {
            return <a href="" key={index} className="text-sm md:text-base">{item}</a>;
          })}
        </div>

        <div className="start flex gap-1 items-center mt-4 sm:mt-0">
          <Button
            varient="primary"
            label="start the project"
          />
          <span className="text-[5vw] sm:text-[4vw] md:text-[3vw] text-center"><IoArrowDownCircle /></span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
