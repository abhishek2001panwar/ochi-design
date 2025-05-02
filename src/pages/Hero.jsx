import React from "react";
import {motion} from 'framer-motion'
import Button from "../components/Button";
import { IoArrowDownCircle } from "react-icons/io5";




function Hero() {
  return (
    <div 
    data-scroll data-scroll-section  data-scroll-speed='-.2'
     className="w-full h-screen ">
      <div className="pt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div  key={index} className="masker leading-none ">
              <h1 className=" text-[6.5vw] overflow-hidden leading-none font-['Founders_Grotesk_X_Condensed'] uppercase font-bold ">
                {index === 1 ? (
                  <>
                    <motion.div
                    initial={{width: 0}}
                    animate={{width: "8%"}}
                    transition={{ease: 'linear' , delay: .3 }}
                     className="inline-block  mr-2 rounded-md h-16 border bg-[#084c44] ">
                        <img className='object-cover  '  src='' alt="" />
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

        <div className="start flex gap-1 items-center">
          <Button
            varient="primary"
            label="start the project"
          
          />
          <span className="text-[3vw]  text-center "><IoArrowDownCircle />

          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
