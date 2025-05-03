import React from "react";

function Footer() {
  return (
    <div className="w-full px-4 sm:px-10 md:px-20 py-6 sm:py-10 flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="w-full md:w-1/2 flex justify-between flex-col">
        <h1 className='uppercase text-[8vw] md:text-[7vw] leading-none font-bold font-["Founders_Grotesk_Condensed"]'>
          eye- opening
        </h1>
        <h1 className='text-[5vw] md:text-[3vw] leading-none font-bold font-["Founders_Grotesk_Condensed"]'>
          ochi
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className='uppercase text-[7vw] md:text-[5vw] leading-none font-bold font-["Founders_Grotesk_Condensed"] tracking-tighter'>
          presentations
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10 sm:mt-20">
          <div className="w-full sm:w-1/2 p-2">
            <a href="" className="block underline mt-3">S:</a>
            <a href="" className="block underline mt-3">Instagram</a>
            <a href="" className="block underline mt-3">Facebook</a>
            <a href="" className="block underline mt-3">Twitter</a>
            <a href="" className="block underline mt-3">Behance</a>
            <a href="" className="block underline mt-3">L:</a>
            <a href="" className="block underline mt-3">Instagram</a>
            <a href="" className="block underline mt-3">Facebook</a>
            <a href="" className="block underline mt-3">Twitter</a>
            <a href="" className="block underline mt-3">Behance</a>
          </div>
          <div className="w-full sm:w-1/2 text-center flex flex-col items-center justify-center">
            <a href="" className="block underline mt-3">M:</a>
            <a href="" className="block underline mt-3">Instagram</a>
            <a href="" className="block underline mt-3">Facebook</a>
            <a href="" className="block underline mt-3">Twitter</a>
            <a href="" className="block underline mt-3">Behance</a>
          </div>
        </div>

        <div className='mt-16 sm:mt-32 flex flex-col sm:flex-row sm:gap-10 md:gap-20 lg:gap-52'>
          <h2 className='text-zinc-500'>© ochi design 2025. Legal Terms</h2>
          <h1 className='text-zinc-500 mt-3 sm:mt-0'>Website by Obys</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
