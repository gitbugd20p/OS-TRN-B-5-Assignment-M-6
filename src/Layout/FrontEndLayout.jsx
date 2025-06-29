import React from "react";
import { Outlet } from "react-router";
import Header from "../frontend/home/Header";

const FrontEndLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default FrontEndLayout;
