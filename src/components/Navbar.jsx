import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="flex items-center justify-center w-16 h-12 bg-black  shadow-md cursor-pointer rounded-md ">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain " />
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-white p-1 px-4 rounded-md hover:bg-black hover:text-white"
              : "text-black bg-white p-1 px-4 rounded-md  hover:bg-black hover:text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-white p-1 px-4 rounded-md hover:bg-black hover:text-white"
              : "text-black bg-white p-1 px-4 rounded-md  hover:bg-black hover:text-white"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
