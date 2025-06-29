import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

const SearchBar = ({ border, allBooks, setBooks }) => {
  const handleChange = (e) => {
    const filteredBooks = allBooks.filter((book) => {
      return book.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBooks(filteredBooks);
  };

  return (
    <div
      className={`flex items-center gap-4 px-4 ${border ? "border" : "border border-blue-100"}`}
    >
      <FaSearch size={20} />
      <input
        onChange={handleChange}
        type="text"
        className="w-full py-3 outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
