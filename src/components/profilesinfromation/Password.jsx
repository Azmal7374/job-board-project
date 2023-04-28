import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Password = () => {
    return (
        <div className="w-full h-4/5  bg-white rounded-md shadopw-lg p-8">
            <div className="">
            <h1 className="text-3xl font-semibold">Change Password</h1>
            <hr className=" mt-6 border-gray-400" />

            <div className="md:flex mt-8">
            <div className=" ">
            <label className="block   font-bold   mb-1 md:mb-0 pr-4 text-orange-600" htmlFor="email">
            Current Password
            </label>
          </div>
          <div className="w-full ml-4">
            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" name="email" placeholder="Current Password"   />
          </div>
            </div>
            <div className="md:flex mt-4">
            <div className=" ">
            <label className="block text-orange-600 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
            New Password
            </label>
          </div>
          <div className="w-full ml-5">
            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="New Password"   />
          </div>
            </div>
            <div className="md:flex mt-4">
            <div className=" ">
            <label className="block text-orange-600 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
            Confirm Password
            </label>
          </div>
          <div className="w-full  ml-4">
            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Confirm Password"   />
          </div>
            </div>
            <div className="flex justify-center mt-8">
           <Link to='/'>
           <button  className="bg-orange-500 p-4 hover:bg-orange-700 h-10 flex justify-center items-center text-white rounded-md"><FontAwesomeIcon className="mx-2" icon={faFloppyDisk} />Change Password</button>
           </Link>
            </div>
            </div>
        </div>
    );
};

export default Password;