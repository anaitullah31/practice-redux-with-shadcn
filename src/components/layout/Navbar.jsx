import React from "react";
import master from "../../assets/master.svg";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16">
        <img className="w-20" src={master} alt="task-master" />
        <button className="font-bold">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
