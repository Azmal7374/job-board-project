import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faUpload, faGear} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Profile = ({}) => {
    const {user} =useContext(AuthContext)
    return (
        <div  className='w-full'>
        <div>
            <div className="md:flex gap-10 mt-10 ">
            <div className='bg-white md:w-96 p-4 text-center rounded-md shadow-lg'>
            <div className='p-4 border border-gray-300 w-32 mx-auto rounded-md'>
            <img className="mx-auto h-20 w-20 border-2 border-gray-400 rounded-md" src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1681989723~exp=1681990323~hmac=b9c1799b4afcf293ecd014e767c27bbd94e20c518553d4b5bc7cb24fa784ebe1" />
            </div>
             <p className ='mt-2 text-2xl text-blue-400 font-semibold'>{user && user.displayName}</p>
            <div className ="text-orange-500 mt-2 flex justify-center gap-1">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div >
            <Link to='/account'>
            <button className="mt-4  bg-orange-500 p-4 hover:bg-purple-500 rounded-md text-white ">
            <FontAwesomeIcon className="mx-2"icon={faUpload} />Edit Photo </button>
            </Link>
            </div>
            <div className="w-full h-96 bg-white p-4 rounded-md mt-8 md:mt-0 shadow-lg">
            <div className="flex gap-20">
             <div>
             <p className="font-semibold text-2xl">0</p>
             <p className='text-gray-500'>Followers</p>
             </div>
             <div>
             <p className="font-semibold text-2xl">0</p>
             <p className='text-gray-500'>Following</p>
             </div>
             <div>
             <p className="font-semibold text-2xl">0</p>
             <p className='text-gray-500'>Questions</p>
             </div>
            <div className='ml-32'>
            <Link to='/account'>
            <button  className="bg-orange-500 p-4 hover:bg-purple-700 h-10 flex justify-center items-center text-white rounded-md"> <FontAwesomeIcon className='mx-3' icon={faGear}></FontAwesomeIcon>Setting</button>
            </Link>
            </div>
            </div>
            <hr  className='mt-4  '/>
            </div>
            </div>

           
               
            <div className='mt-4 h-10 bg-orange-500 rounded-md p-3'>
            <p className='text-white'>No question feeds at this time</p>
            </div>    
            <div className='mt-4 w-full h-96 bg-white border shadow-lg border-gray-400 rounded-md'>
               
            </div>
            </div>

         <div>
         <div className='mt-4 text-center text-white'>
         <button className=" bg-orange-500 p-4 hover:bg-orange-700 rounded-md  "  >
         Load more.. 
       </button>
         </div>

         </div>
         <div>
          <div className="flex gap-3">
         <Link to=''> <p className="text-orange-500 hover:underline hover:text-purple-500">Job</p></Link>
          <p className="text-gray-500">/</p>
          <p className="text-gray-500">Trending</p>
          </div>
         </div>
        </div>
    );
};

export default Profile;