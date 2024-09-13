import Image from "next/image";
import React from "react";
import LogoImage from "../images/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <div className="w-full h-20 bg-gray-950 text-white sticky top-0 z-50">
      <div
        className="h-full w-full mx-auto inline-flex items-center
        justify-between gap-1 md:gap-3 px-4"
      >
        {/* Logo */}
        <div
          className="px-2 border border-transparent hover:border-white
        cursor-pointer duration-300 items-center justify-center h-[80%]"
        >
          <Image
            className="object-cover"
            width={50}
            height={50}
            src={LogoImage}
            alt=""
          />
        </div>
        {/* delivery */}
        <div
          className="px-2 border border-transparent hover:border-white
        cursor-pointer duration-300 items-center justify-center h-[80%]"
        >
          <LocationOnOutlinedIcon className="text-gray-400" />
          <div className="text-xs">
            <p className="text-gray-400">Deliver to</p>
            <p className="text-white font-bold uppercase">Thailand</p>
          </div>
        </div>
        {/* Searchbar */}
        <div
          className="flex-1 h-10 hidden md:inline-flex items-center
        justify-between relative"
        >
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-yellow-500"
            type="text"
            placeholder="Search ecommerce products"
          />

          <span
            className="w-12 h-full bg-yellow-500 text-black text-2xl flex
          items-center justify-center absolute right-0 rounded-md rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>

        {/* SignIn */}
        <div
          className="px-2 border border-transparent hover:border-white
        cursor-pointer duration-300 items-center justify-center h-[80%]"
        >
          <p className="text-gray-400">Hello SignIn</p>
          <p className="text-white font-bold flex items-center">
            Account & Lists
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        {/* Favorite */}
        <div
          className="px-2 border border-transparent hover:border-white
        cursor-pointer duration-300 items-center justify-center h-[80%]"
        >
          <p className="text-gray-400">Marked</p>
          <p className="text-white font-bold">& Favorite</p>
        </div>
        {/* Cart */}
        <div
          className="flex px-2 border border-transparent hover:border-white
        cursor-pointer duration-300 items-center justify-center h-[80%] relative"
        >
          <ShoppingCartOutlinedIcon className="w-auto object-cover h-8" />
          <p className="text-xl text-white font-bold mt-3">Cart</p>
          <span className="absolute text-yellow-500 text-sm top-1 left-[36px] font-bold">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
