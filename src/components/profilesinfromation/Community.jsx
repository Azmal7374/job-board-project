import React from 'react';
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link} from 'react-router-dom';
const Community = () => {
    return (
        <div className="w-full mt-4 ">
        <div className=" bg-slate-100 flex justify-between items-center">
        <div>
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
        </div>
           <div>
           
           <div>
           <h1 className="mx-auto text-center text-2xl font-bold">Community</h1>
           <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
           </div>
           
            <div className='flex items-center gap-4 mt-3 mb-12'>
            <Link to= '/' className="text-gray-500 hover:text-orange-500">Profile</Link>
          <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
            <p className="text-orange-500">Community</p>
            </div>
            </div>
          <div>
          <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
          </div>
        </div>
            <div className=" md:flex justify-between ">
            <div className='bg-white p-4 shadow-lg rounded-lg'>
            <h2 className="text-center text-xl font-semibold">Ask Question</h2>
            <textarea className="mt-4 p-4  outline-none border-2 border-gray-500 hover:border-2 hover:border-purple-500" name="" id="" cols="60" rows="15" placeholder="What is your question or post?"></textarea>
            
            <div className="mt-2 md:flex justify-between items-center gap-4 ">
           <div className='bg-white shadow-2xl p-4 w-60'>
           <input className=" "
           type="file"
           id="profile_pic"
           name="profile_pic"
           accept=".jpg, .jpeg, .png"
           placeholder='image' />
           </div>

            <div className='my-4'>
            <button  className="h-10  p-2   bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 text-center">Send Message</button>
            </div>
            </div>
            </div >
              <div className='flex gap-4 mt-4 md:mt-0' >
              <p className='text-gray-500'>Job</p>
              <p className='text-gray-500'>/</p>
              <p className='text-orange-500'>Trending</p>
              </div>
            </div>
        
        </div>
    );
};

export default Community;