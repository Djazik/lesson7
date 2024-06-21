import React from "react";
import { Link } from "react-router-dom";
import User from "../../pages/user/User";

const Navbar = () => {
  return (
   <div className="">
     <div className="navbar">
      <Link to={"/user"}>User</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
   </div>
  );
};

export default Navbar;
