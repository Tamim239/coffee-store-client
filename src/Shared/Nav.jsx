import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export const Nav = () => {
  const { users, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {
        users && 
        <li>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          Users
        </NavLink>
      </li>
     }
      <li>
        <NavLink
          to="/addCoffee"
          className={({ isActive }) =>
            isActive ? "font-bold lg:underline" : ""
          }
        >
          Add Coffee
        </NavLink>
      </li>
    </>
  );



  return (
    <nav className="flex justify-between items-center max-lg:px-2">
      <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
        {open ? <IoMdClose /> : <FiMenu />}
      </div>
      <div className="flex items-center">
        <img src={logo} alt="logo" className="size-12" />
        <h1 className="text-2xl font-rancho">Espresso</h1>
      </div>
      <ul
        className={`lg:flex items-center lg:*:pl-6 *:text-base absolute lg:static
      ${
        open
          ? "top-14 w-full md:w-4/5 md:mx-auto bg-[#864B34] py-2 px-1 text-white *:border-y z-30"
          : "hidden"
      }
    `}
      >
        {navLinks}
      </ul>
      <div>
        {users ? (
          <Link
            onClick={()=> logOut()}
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Log Out
            </span>
          </Link>
        ) : (
          <Link
            to="/signIn"
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Sign In
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};
