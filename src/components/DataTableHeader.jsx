import React from "react";
import { CiFilter } from "react-icons/ci";
import SearchBar from "./SearchBar";

const DataTableHeader = ({ allBooks, setBooks }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <CiFilter className="p-1 shadow-md" size={45} />
        <SearchBar border={false} setBooks={setBooks} allBooks={allBooks}/>
      </div>
      <button className="rounded-md bg-blue-700 px-6 py-3 text-2xl text-white shadow">
        + Add Book
      </button>
    </div>
  );
};

export default DataTableHeader;
