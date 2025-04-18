/** @format */

import React from "react";
import { ChevronDown } from "@deemlol/next-icons";
function Navbar() {
  return (
    <div className="flex flex-row justify-between pb-2 text-sm ">
      <div className="flex flex-row md:text-sm text-[0.5rem] w-full lg:w-fit justify-between  lg:gap-[1rem] ">
        <div className="logo flex flex-col justify-center">
          <img className="h-[2rem] lg:h-[3rem]" src="/LOGO.png" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">SGNORIA</div>
          <div className="flex flex-row justify-center text-green-600">
            0.00
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>NIFTY BANK</div>
          <div className="flex flex-row justify-center text-green-600">
            52323.30
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>NIFTY FIN SERVICE</div>
          <div className="flex flex-row justify-center text-green-600">
            25255.75
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>RELCHEMQ</div>
          <div className="flex flex-row justify-center text-green-600">
            162.73
          </div>
        </div>
        <div className="flex flex-col justify-center lg:hidden cursor-pointer ">
          <div className="rounded-full h-fit bg-gray-300 p-2 ">AS</div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row  md:gap-[1rem] hidden pr-2 ">
        <div className="flex flex-col justify-center">MARKET WATCH</div>
        <div className="flex flex-col justify-center">EXCHANGE FILES</div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-center">PORTFOLIO</div>
          <div className="flex flex-col justify-center">
            <ChevronDown className="text-sm " />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-center">FUNDS</div>
          <div className="flex flex-col justify-center">
            <ChevronDown />
          </div>
        </div>
        <div className="flex flex-col justify-center cursor-pointer">
          <div className="rounded-full h-fit bg-gray-300 p-2 ">AS</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
