import React, { useContext, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon, ArrowLeftOnRectangleIcon,user 
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser, faMessage, faGear, faLock, faArrowRightFromBracket, faPlus} from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-container sticky top-0 z-30">
      <div className="navbar bg-slate-100">
        <BoltIcon className="h-20 md:w-64 text-blue-500" />
        <a className="btn btn-ghost normal-case text-4xl font-bold">JobBoard</a>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 bg-base-100 rounded-md  w-52"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careerAdvice"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Career Advice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sector"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Sectors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  SignUp
                </NavLink>
              </li>
             <NavLink>
             <li>
             <button className="mt-5 w-full h-12 p-4  bg-orange-600   text-white  font-bold hover:bg-orange-700 "><FontAwesomeIcon className="ml-5" icon={faPlus}></FontAwesomeIcon> Post A Job</button>
             </li>
             </NavLink>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink 
            to='/home'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jobs'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/careerAdvice'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
          Career Advice
          </NavLink>
          </li>
         <li>
         <NavLink
         to='/sector'
         className={({ isActive }) => (isActive ? 'active' : 'default')}
       >
       Sectors
       </NavLink>
         </li>
       <li>
       <NavLink
       to='/login'
       className={({ isActive }) => (isActive ? 'active' : 'default')}
     >
     Login
     </NavLink>
       </li>
     <li>
     <NavLink
     to='/signup'
     className={({ isActive }) => (isActive ? 'active' : 'default')}
   >
   SignUp
   </NavLink>
     </li>
     <NavLink>
     <li className="md:ml-24 lg:ml-30 xl:ml-52">
     <button className="p-4  bg-orange-600   text-white  font-bold hover:bg-orange-700 "><FontAwesomeIcon className="ml-5" icon={faPlus}></FontAwesomeIcon> Post A Job</button>
     </li>
     </NavLink>
      
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Header;
