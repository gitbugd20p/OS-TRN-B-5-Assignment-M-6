import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const DataTableFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 z-10 w-full bg-gray-100/80 px-10 py-5">
      <div className="flex items-center justify-between">
        <p>1-10 of 97</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <p>Rows Per page: </p>
            <select name="" id="">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded bg-white p-2">
              <FaArrowCircleLeft size={25} />
            </button>
            <p>1/10</p>
            <button className="rounded bg-white p-2">
              <FaArrowCircleRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableFooter;
