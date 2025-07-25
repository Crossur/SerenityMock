import React, { useState } from "react";;
import logo from "/home/crossur/White's Cleaning Website/src/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMail } from "react-icons/io5";

const NavBar = () => {
  const elementArr = ["Home", "About", "Services", "Contact"];

  return (
    <div style={{ fontFamily: "dmSans" }}>
      <div className="fixed top-0 left-0 w-full z-[-1] opacity-0 bg-[#9c9c9c] h-[6.12rem]"></div>
      <img className="absolute md:fixed top-0 left-10 z-50 -translate-y-25 w-[20rem] flex items-center justify-center text-2xl mt-[.4rem] opacity-100"src={logo}alt="Logo"/>

      {/* Book Now Button(hides on smaller screen) */}
      <div className="flex gap-7 lg:gap-14 z-50 items-center justify-center fixed top-8 right-10">
        <button  
          onClick={()=>{location.assign("https://calendly.com/luisacruz-dev")}}
          className="hover:scale-95 transition transform duration-200 cursor-pointer flex opacity-0 z-3 md:opacity-100 text-white border rounded-lg px-2 text-xl "><IoMail className="translate-y-1 -translate-x-1"/>Book Now</button>
      </div>
    </div>
  );
};

export default NavBar;
