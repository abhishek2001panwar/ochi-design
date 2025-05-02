import React from "react";
import Button from "../components/Button";
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-.1"
      className="w-full bg-[#d0ec6c] "
    >
      <div>
        <h1 className="text-5xl font-bold mb-5 px-20 max-w-6xl py-16 ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
      </div>
      <div className="w-full  flex gap-20 p-20 border-t">
        <div className="w-1/2  ">
          <h1 className="text-lg">What you can expect:</h1>
        </div>
        <div className="w-1/2  flex gap-20">
          <div className="w-1/2">
            <h1>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants. <br /> <br />
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
          <div className="w-1/2 flex flex-col items-baseline justify-end gap-2  ">
            <a href="" className="block underline">
              Instagram
            </a>
            <a href="" className="block underline">
              Behance
            </a>
            <a href="" className="block underline">
              Linkdin
            </a>
            <a href="" className="block underline">
              twitter
            </a>
          </div>
        </div>
      </div>

      <div className="lastsection p-20 flex gap-10 border-t-1  ">
        <div className="w-1/2   ">
          <h1 className="text-3xl font-bold mb-4">Our Approach:</h1>
          {/* <button className="px-5 py-3 bg-black rounded-full uppercase text-white">
            Read More -
          </button> */}
          <Button
            varient="secondary"
            label="read more"
            icon={<GoDotFill />}
            className="uppercase"
          />
        </div>
        <div className="w-1/2  rounded-md">
          <img
            className="rounded-md"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg
        "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
