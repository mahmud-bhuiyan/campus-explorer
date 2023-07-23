import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../../../assets/Logo/ce-favicon.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink exact="true" to="/" activeclassname="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          activeclassname="active-link"
          className="nav-link"
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          activeclassname="active-link"
          className="nav-link"
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-college"
          activeclassname="active-link"
          className="nav-link"
        >
          My College
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeclassname="active-link">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeclassname="active-link">
          Login
        </NavLink>
      </li>
      <li>
        <Link to="/user">
          <FaUser />
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 max-w-screen-xl bg-white text-black drop-shadow-xl">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-44"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-xl"
          activeclassname="active-link"
        >
          <img className="w-10 h-10" src={logo} alt="Campus Explorer Logo" />
          <span className="hidden sm:block text-black">
            Campus <span className="text-[#FC3433]">Explorer</span>
          </span>
        </NavLink>
      </div>
      <div className="ml-auto hidden lg:flex items-center space-x-2">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
