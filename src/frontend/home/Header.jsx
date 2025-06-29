import React from "react";
import FlexItemCenter from "../../components/FlexItemCenter";
import { BiBell } from "react-icons/bi";

const Header = () => {
  return (
    <section className="min-h-16 bg-black bg-[url(assets/header.png)] px-5">
      <div className="mx-auto max-w-7xl text-white">
        <FlexItemCenter className="justify-between">
          {/* logo */}
          <FlexItemCenter>
            <img src="assets/logo.png" alt="" className="h-16 w-16" />
            <h3 className="font-bold text-yellow-500 uppercase">BookStore </h3>
          </FlexItemCenter>

          {/* menu */}
          <FlexItemCenter className="gap-5">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Delivery Team</a>
              </li>
              <li>
                <a href="#">Seller</a>
              </li>
            </ul>

            <BiBell size={20} />

            <FlexItemCenter>
              <img
                src="assets/avatar.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <p>John Doe</p>
            </FlexItemCenter>
          </FlexItemCenter>
        </FlexItemCenter>
      </div>
    </section>
  );
};

export default Header;
