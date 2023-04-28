import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faUpload} from "@fortawesome/free-solid-svg-icons";

const EditAccount = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="w-full">
            <div className="md:flex gap-10   mt-10">
            <div className="bg-white shadow-lg p-12  w-96">
            <div className='p-2 border border-gray-300  mx-auto rounded-md'>
            <img className="p-2 mx-auto h-64 w-64 border-4 border-gray-300 rounded-md" src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1681989723~exp=1681990323~hmac=b9c1799b4afcf293ecd014e767c27bbd94e20c518553d4b5bc7cb24fa784ebe1" />
            </div>
          <div className="text-center">
          <button  className="mt-4 btn w-56 btn-secondary p-3"> <input type="file"></input> </button></div>
          <p className="mt-4 text-center text-3xl text-gray-500">{user && user.displayName}</p>
            </div>
            <div className="w-full bg-white mt-8 md:mt-0 shadow-lg p-6">
            <h2 className='text-2xl p-4'>Edit Account</h2>
            <hr className='border mt-6 border-gray-400'/>
          <div className="md:flex mt-8">
          <div className=" ">
          <label className="block   font-bold   mb-1 md:mb-0 pr-4 text-orange-600" htmlFor="email">
          Name
          </label>
        </div>
        <div className="w-full ml-4">
          <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" name="email" placeholder="Your Name"   />
        </div>
          </div>
          <div className="md:flex mt-4">
          <div className=" ">
          <label className="block text-orange-600 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
        Email
          </label>
        </div>
        <div className="w-full ml-5">
          <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Name"   />
        </div>
          </div>
          <div className="md:flex mt-4">
          <div className=" ">
          <label className="block text-orange-600 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
          Phone
          </label>
        </div>
        <div className="w-full ml-4">
          <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Phone"   />
        </div>
          </div>

          <div className="md:flex mt-4">
          <div className=" ">
          <label className="block text-orange-600 font-bold   mb-1 md:mb-0 pr-4" htmlFor="email">
        About Me
          </label>
        </div>
        <div className="w-full ml-3 md:ml-1">
          <textarea rows="5" cols=""  className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text"   placeholder="Describe yourself"   />
        </div>
          </div>
          <div className='mt-4  text-white ml-4 md:ml-20'>
          <button className="h-12 w-32 font-bold  bg-orange-500 p-4 hover:bg-orange-700 rounded-md  "  >
          Update
        </button>
          </div>
            </div>
            </div>
        </div>
    );
};

export default EditAccount;