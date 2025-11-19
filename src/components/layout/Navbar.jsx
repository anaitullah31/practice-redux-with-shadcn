import React from "react";
import master from "../../assets/master.svg";
import { Link } from "react-router";
import { IoLogInSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img className="w-20" src={master} alt="task-master" />
        <div className="space-x-2">
          <Link to="/tasks" className="font-bold">
            TASKS
          </Link>
          <Link to="/users" className="font-bold">
            USERS
          </Link>
        </div>
        <div>
          <Link to="/login" className="font-bold text-4xl">
            <IoLogInSharp />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
