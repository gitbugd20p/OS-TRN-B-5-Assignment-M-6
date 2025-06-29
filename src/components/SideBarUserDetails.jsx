import React from "react";
import NavLink from "./NavLink";
import { CiLogout, CiSettings } from "react-icons/ci";

const userDetails = {
  name: "Gustavo Xavier",
  img: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  email: "sara@mail.com",
  role: "admin",
};

const SideBarUserDetails = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {" "}
        <img
          src={userDetails.img}
          alt="user"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <h3 className="font-bold capitalize">{userDetails.name}</h3>
          <span className="rounded-full bg-orange-200 px-2">
            {userDetails.role}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        {" "}
        <NavLink name={"Setting"} icon={<CiSettings />} path={"/setting"} />
      </div>
      <div className="flex items-center">
        <NavLink name="Log Out" icon={<CiLogout />} color="text-red-500" />
      </div>
    </div>
  );
};

export default SideBarUserDetails;
