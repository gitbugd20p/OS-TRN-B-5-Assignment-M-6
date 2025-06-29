import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SideBarUserDetails from "./SideBarUserDetails";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold uppercase">BookStore Dashboard</h1>
          <SearchBar border={true}/>
          <Navbar />
        </div>

        <SideBarUserDetails />
      </div>
    </div>
  );
};

export default Sidebar;
