/** @format */

import React from "react";
import { Download } from "@deemlol/next-icons";
import { UserPlus } from "@deemlol/next-icons";
import { X } from "@deemlol/next-icons";
import { XCircle } from "@deemlol/next-icons";
// import { ArrowUp, ArrowDown } from "@deemlol/next-icons";
import Item from "./Item";
import { Filter } from "@deemlol/next-icons";

function Order() {
  return (
    <div className="p-6 pt-8 bg-[#F4F4F5] flex flex-col gap-[2rem]">
      <div className="flex flex-row justify-between">
        <div className="font-bold md:text-2xl text-lg">Open Orders</div>
        <div className="flex flex-row md:p-2  p-1 bg-[#E4E4E7] rounded-lg">
          <div className="flex flex-col justify-center">
            <Download color="black" className="h-[0.8rem] md:h-[1rem]" />
          </div>

          <button>
            <div>Download</div>
          </button>
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col">
        <div className=" lg:flex lg:flex-row lg:justify-between flex flex-col gap-[1rem]  py-2 bg-white ">
          <div className="lg:flex lg:flex-row flex flex-col gap-4">
            <div className="flex flex-row p-1 rounded-xl border-[0.1px] h-fit  w-fit bg-[#F4F4F5]">
              <input
                type="text"
                placeholder="AAA002"
                className=" p-1 bg-white rounded-xl border-1 border-gray-400"
              />
              <div className="p-1">
                <UserPlus />
              </div>
            </div>
            <div className="flex flex-col justify-center bg-[#E4E4E7] h-fit py-2  px-3 w-fit rounded-2xl text-lg">
              <div className="flex flex-row justify-between  ">
                Lalit
                <div className="flex flex-col justify-center">
                  <X className="h-[1rem]" />
                </div>
              </div>
            </div>
            <div className=" h-fit w-fit">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search for a stock, future, option or index"
                className="lg:w-[22rem]  border border-gray-300 py-4 px-2 rounded-lg focus:outline-0"
              />
            </div>
            <div className="flex flex-row gap-4 ">
              <div className="flex flex-col justify-center h-fit w-fit p-3  lg:text-[1rem] text-sm bg-[#E4E4E7] px-2 rounded-2xl">
                <div className="flex flex-row text-gray-600 ">
                  RELIANCE
                  <div className="flex flex-col justify-center">
                    <X className="md:h-[1.3rem] h-[1rem]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center h-fit w-fit p-3 bg-[#E4E4E7] px-2  rounded-2xl lg:text-[1rem] text-sm">
                <div className="flex flex-row text-gray-600">
                  ASSIAN PAINTS
                  <div className="flex flex-col justify-center">
                    <X className="lg:h-[1.3rem] h-[1rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className=" flex flex-row gap-3 md:p-1 md:px-2 p-2 h-fit w-fit bg-red-500 rounded-2xl items-center">
            <div className="flex flex-col justify-center h-fit w-fit">
              <XCircle size={24} color="white" />
            </div>

            <div className="md:flex md:flex-col p-[0.7rem] justify-center h-fit w-fit text-white">
              Cancel all
            </div>
          </button>
        </div>
        {/* ---------------------------------------------------------------- */}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-gray-800">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">
                    <div className="flex items-center gap-1">
                      Time <span>↑↓</span>
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Client ↑↓
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">Ticker</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    <div className="flex items-center gap-1">
                      Side <span>↑↓</span>
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Product ↑↓
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Qty (Executed/Total) ↑↓
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Price ↑↓
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">08:14:31</td>
                  <td className="px-4 py-2 whitespace-nowrap">AAA001</td>
                  <td className="px-4 py-2 whitespace-nowrap flex items-center gap-1">
                    RELIANCE <span className="text-blue-400">((📶))</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">Buy</td>
                  <td className="px-4 py-2 whitespace-nowrap">CNC</td>
                  <td className="px-4 py-2 whitespace-nowrap">50/100</td>
                  <td className="px-4 py-2 whitespace-nowrap">250.50</td>
                  <td className="px-4 py-2 text-xl">⋯</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">08:14:31</td>
                  <td className="px-4 py-2 whitespace-nowrap">AAA003</td>
                  <td className="px-4 py-2 whitespace-nowrap">MRF</td>
                  <td className="px-4 py-2 whitespace-nowrap">Buy</td>
                  <td className="px-4 py-2 whitespace-nowrap">NRML</td>
                  <td className="px-4 py-2 whitespace-nowrap">10/20</td>
                  <td className="px-4 py-2 whitespace-nowrap">2,700.00</td>
                  <td className="px-4 py-2 text-xl">⋯</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">08:14:31</td>
                  <td className="px-4 py-2 whitespace-nowrap">AAA002</td>
                  <td className="px-4 py-2 whitespace-nowrap flex items-center gap-1">
                    ASIANPAINT <span className="text-blue-400">((📶))</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">Buy</td>
                  <td className="px-4 py-2 whitespace-nowrap">NRML</td>
                  <td className="px-4 py-2 whitespace-nowrap">10/30</td>
                  <td className="px-4 py-2 whitespace-nowrap">1,500.60</td>
                  <td className="px-4 py-2 text-xl">⋯</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">08:14:31</td>
                  <td className="px-4 py-2 whitespace-nowrap">AAA002</td>
                  <td className="px-4 py-2 whitespace-nowrap">TATAINVEST</td>
                  <td className="px-4 py-2 whitespace-nowrap">Buy</td>
                  <td className="px-4 py-2 whitespace-nowrap">NRML</td>
                  <td className="px-4 py-2 whitespace-nowrap">10/30</td>
                  <td className="px-4 py-2 whitespace-nowrap">1,500.60</td>
                  <td className="px-4 py-2 text-xl">⋯</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-end gap-[1rem] items-center p-4 border-t text-sm text-gray-600">
            <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
              Previous
            </button>
            <span>Page 1</span>
            <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------------------------- */}
      </div>
      {/* Mapping krna hai bsss */}
    </div>
  );
}

export default Order;
