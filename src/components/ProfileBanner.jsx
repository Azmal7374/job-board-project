import React from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ProfileBanner = () => {
    return (
        <div className='w-full sticky mr-4'>
        <div className=" bg-slate-100 flex justify-between items-center">
        <div>
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
        </div>
           <div>
           
           <div>
           <h1 className="mx-auto text-center text-2xl font-bold">Profile</h1>
           <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
           </div>
           
            <div className='flex items-center gap-4 mt-3 mb-12'>
            <Link to= '/home' className="text-gray-500 hover:text-orange-500">Home</Link>
          <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
            <p className="text-orange-500">Profile</p>
            </div>
            </div>
          <div>
          <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
          </div>
        </div>
         
       </div>
    
    );
};

export default ProfileBanner;