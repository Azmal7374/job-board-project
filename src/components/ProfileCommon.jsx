import React, { useContext, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon, ArrowLeftOnRectangleIcon,user 
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser, faMessage, faGear, faLock, faArrowRightFromBracket, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";


const ProfileCommon = () => {
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
        <div className="  sticky top-0 z-30">
        <div className="navbar bg-slate-100">
          <BoltIcon className="h-20 md:w-64 text-blue-500" />
          <a className="btn btn-ghost normal-case text-xl md:text-3xl font-bold">JobBoard</a>
          <div className=" md:ml-20">
          <input type="text" placeholder="Search" className="p-4 w-32 md:w-64 outline-none" />
         <button className="bg-orange-500 p-4 hover:bg-orange-700  "><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
            
            </div>
          </div>
          <div className="navbar-center   lg:flex">
            <ul className="menu menu-horizontal px-1">
         
        
       {
        user && <li tabIndex={0}>
        <a className="justify-between font-bold">
        <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1681989723~exp=1681990323~hmac=b9c1799b4afcf293ecd014e767c27bbd94e20c518553d4b5bc7cb24fa784ebe1" />
        {user.displayName}
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
        </a>
        <ul className=" bg-base-100 rounded-sm p-4">
        <li><Link to='/profile'><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
        <li><Link to='/account'><FontAwesomeIcon icon={faUser} /> Edit Account</Link></li>
        <li><Link to='/messages'><FontAwesomeIcon icon={faMessage} /> Messages</Link></li>
        <li><Link to='/setting'><FontAwesomeIcon icon={faGear} /> Settings</Link></li>
        <li><Link to='/password'><FontAwesomeIcon icon={faLock} /> Password</Link></li>
        <li><a><FontAwesomeIcon icon={faArrowRightFromBracket} />  <p onClick={handleLogOut}>Sign Out</p></a></li>
        </ul>
      
      </li>
       }
            </ul>
          </div>
        
        </div>
      </div>
    );
};

export default ProfileCommon;