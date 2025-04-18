/** @format */

import React from "react";

function Item() {
  return (
    <div className="border-b border-gray-200 flex flex-row justify-between bg-white text-sm w-[100%]">
      <div className="flex flex-row gap-[5.4rem] w-[50%]">
        <div>08:14:31</div>
        <div>AAA001</div>
        <div>Relinace</div>
        <div>Buy</div>
        <div>CNC</div>
      </div>
      <div className="flex flex-row gap-[5.6rem] pr-[2rem]">
        <div>50/100</div>
        <div>250.50</div>
        <div>...</div>
      </div>
    </div>
  );
}

export default Item;
