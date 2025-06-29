import React from "react";
import { Link } from "react-router";

const NavLink = ({ name, path, icon, color }) => {
  return (
    <li className="flex items-center gap-2">
      {icon}
      <Link to={path} className={color}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
