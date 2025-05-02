import React from "react";
import Button from '../components/Button'

function Cta() {
  return (
    <div className="w-full h-screen bg-[#d0ec6c] flex items-center justify-center flex-col ">
      <div className="masker ">
        <h1 className='text-[9vw] font-["Founders_Grotesk_Condensed"] font-bold uppercase leading-none'>
          Ready
        </h1>
      </div>
      <div className="masker ">
        <h1 className='text-[9vw] font-["Founders_Grotesk_Condensed"] font-bold uppercase leading-none'>
          to start
        </h1>
      </div>
      <div className="masker ">
        <h1 className='text-[9vw] font-["Founders_Grotesk_Condensed"] font-bold uppercase leading-none'>
          the project
        </h1>
      </div>

      <div className=' flex flex-col gap-5'>

        <Button 
        varient='primary'
        label='start the project'
        />
        <h1 className='text-center text-xl font-extrabold'>or</h1>
        <Button 
        varient='secondary'
        label='hello@ochi.design'
        />


      </div>
    </div>
  );
}

export default Cta;
