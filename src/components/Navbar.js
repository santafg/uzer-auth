import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import Logout from "./Logout";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {loggedIn === false && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      {loggedIn === true && (
        <>
          <NavLink to="/customer">Customer</NavLink>
          <NavLink to="/logout">Logout</NavLink>
            {/* <Logout/> */}
        </>
      )}
    </>
  );
}

export default Navbar;
